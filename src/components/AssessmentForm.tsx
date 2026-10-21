"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

type Question = {
  id: string;
  text: string;
  guide_note: string | null;
  citation: string | null;
};

type Answer = "evet" | "hayir" | "kapsam_disi";

type ExistingResponse = {
  question_id: string;
  answer: Answer;
  note: string | null;
};

const ANSWER_LABELS: Record<Answer, string> = {
  evet: "Evet",
  hayir: "Hayır",
  kapsam_disi: "Kapsam Dışı",
};

export default function AssessmentForm({
  userId,
  questions,
  existingResponses,
}: {
  userId: string;
  questions: Question[];
  existingResponses: ExistingResponse[];
}) {
  const supabase = createClient();

  const initial = new Map(
    existingResponses.map((r) => [r.question_id, { answer: r.answer, note: r.note ?? "" }])
  );

  const [state, setState] = useState<Map<string, { answer?: Answer; note: string }>>(
    initial
  );
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  async function save(questionId: string, answer: Answer, note: string) {
    setSavingId(questionId);
    const { error } = await supabase.from("responses").upsert(
      {
        user_id: userId,
        question_id: questionId,
        answer,
        note: note || null,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "user_id,question_id" }
    );
    setSavingId(null);
    if (!error) {
      setSavedId(questionId);
      setTimeout(() => setSavedId(null), 1500);
    }
  }

  function updateAnswer(questionId: string, answer: Answer) {
    const current = state.get(questionId) ?? { note: "" };
    const next = new Map(state);
    next.set(questionId, { ...current, answer });
    setState(next);
    save(questionId, answer, current.note);
  }

  function updateNote(questionId: string, note: string) {
    const current = state.get(questionId) ?? { note: "" };
    const next = new Map(state);
    next.set(questionId, { ...current, note });
    setState(next);
  }

  function blurNote(questionId: string) {
    const current = state.get(questionId);
    if (current?.answer) {
      save(questionId, current.answer, current.note);
    }
  }

  return (
    <div className="space-y-5">
      {questions.map((q, idx) => {
        const current = state.get(q.id);
        return (
          <div
            key={q.id}
            className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="whitespace-pre-line text-sm font-medium text-gray-900">
                {idx + 1}. {q.text}
              </p>
              {savingId === q.id && (
                <span className="shrink-0 text-xs text-gray-400">kaydediliyor...</span>
              )}
              {savedId === q.id && (
                <span className="shrink-0 text-xs text-green-600">kaydedildi ✓</span>
              )}
            </div>

            {q.citation && (
              <p className="mt-1 text-xs text-gray-400">Dayanak: {q.citation}</p>
            )}
            {q.guide_note && (
              <p className="mt-1 text-xs text-gray-500">{q.guide_note}</p>
            )}

            <div className="mt-3 flex gap-2">
              {(Object.keys(ANSWER_LABELS) as Answer[]).map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => updateAnswer(q.id, a)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    current?.answer === a
                      ? a === "evet"
                        ? "bg-green-600 text-white"
                        : a === "hayir"
                        ? "bg-red-600 text-white"
                        : "bg-gray-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {ANSWER_LABELS[a]}
                </button>
              ))}
            </div>

            <textarea
              placeholder="Not / açıklama ekleyin (opsiyonel)"
              value={current?.note ?? ""}
              onChange={(e) => updateNote(q.id, e.target.value)}
              onBlur={() => blurNote(q.id)}
              className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              rows={2}
            />
          </div>
        );
      })}
    </div>
  );
}

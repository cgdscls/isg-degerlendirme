"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Question = {
  id: string;
  text: string;
  guide_note: string | null;
  beklenen_kanit: string | null;
  citation: string | null;
  needsReview?: boolean;
};

type Answer = "evet" | "hayir" | "kapsam_disi";

type ExistingResponse = {
  question_id: string;
  answer: Answer;
  note: string | null;
  oneri: string | null;
  sistem_faktoru: string | null;
  maliyet_faktoru: string | null;
  eylem_faktoru: string | null;
};

type RowState = {
  answer?: Answer;
  note: string;
  oneri: string;
  sistem_faktoru: string;
  maliyet_faktoru: string;
  eylem_faktoru: string;
};

const ANSWER_LABELS: Record<Answer, string> = {
  evet: "Evet",
  hayir: "Hayır",
  kapsam_disi: "Kapsam Dışı",
};

const SISTEM_FAKTORU_SECENEKLERI = [
  "Gereklilik tespit edilmemiş",
  "Uygun kontrol bulunamamış",
  "Kontrol uygulanmamış",
  "Sistem eksikliği",
];

const MALIYET_FAKTORU_SECENEKLERI = [
  "Yüksek getirili yatırım (ROI > %10)",
  "Düşük getirili yatırım (ROI < %10)",
  "İşgücü artışı gerektiriyor",
  "İşletme maliyetini artırıyor",
  "Önemli maliyet etkisi yok",
];

const EYLEM_FAKTORU_SECENEKLERI = [
  "Acil eylem gerekli (24 saat içinde)",
  "Eylem zorunlu (1 ay içinde)",
  "Eylem gerekli (3 ay içinde)",
  "Eylem önerilir (12 ay içinde)",
];

function emptyRow(): RowState {
  return { note: "", oneri: "", sistem_faktoru: "", maliyet_faktoru: "", eylem_faktoru: "" };
}

export default function AssessmentForm({
  companyId,
  questions,
  existingResponses,
}: {
  companyId: string;
  questions: Question[];
  existingResponses: ExistingResponse[];
}) {
  const supabase = createClient();
  const router = useRouter();

  const initial = new Map<string, RowState>(
    existingResponses.map((r) => [
      r.question_id,
      {
        answer: r.answer,
        note: r.note ?? "",
        oneri: r.oneri ?? "",
        sistem_faktoru: r.sistem_faktoru ?? "",
        maliyet_faktoru: r.maliyet_faktoru ?? "",
        eylem_faktoru: r.eylem_faktoru ?? "",
      },
    ])
  );

  const [state, setState] = useState<Map<string, RowState>>(initial);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);

  async function save(questionId: string, row: RowState) {
    if (!row.answer) return;
    setSavingId(questionId);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("responses").upsert(
      {
        company_id: companyId,
        question_id: questionId,
        answer: row.answer,
        note: row.note || null,
        oneri: row.answer === "hayir" ? row.oneri || null : null,
        sistem_faktoru: row.answer === "hayir" ? row.sistem_faktoru || null : null,
        maliyet_faktoru: row.answer === "hayir" ? row.maliyet_faktoru || null : null,
        eylem_faktoru: row.answer === "hayir" ? row.eylem_faktoru || null : null,
        updated_by: auth.user?.id,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "company_id,question_id" }
    );
    setSavingId(null);
    if (!error) {
      setSavedId(questionId);
      setTimeout(() => setSavedId(null), 1500);
      router.refresh();
    }
  }

  function patch(questionId: string, patch: Partial<RowState>) {
    const current = state.get(questionId) ?? emptyRow();
    const next = new Map(state);
    const updated = { ...current, ...patch };
    next.set(questionId, updated);
    setState(next);
    return updated;
  }

  function updateAnswer(questionId: string, answer: Answer) {
    const updated = patch(questionId, { answer });
    save(questionId, updated);
  }

  function blurField(questionId: string) {
    const current = state.get(questionId);
    if (current?.answer) save(questionId, current);
  }

  const reviewCount = questions.filter((q) => q.needsReview).length;

  return (
    <div className="space-y-5">
      {reviewCount > 0 && (
        <div className="rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm text-amber-800">
          <strong>Mevzuat güncellendi.</strong> Aşağıda işaretli {reviewCount} soru,
          daha önce cevapladığınızdan sonra admin tarafından güncellendi. Lütfen
          cevaplarınızı gözden geçirin.
        </div>
      )}
      {questions.map((q, idx) => {
        const row = state.get(q.id) ?? emptyRow();
        const isHayir = row.answer === "hayir";
        return (
          <div key={q.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-3">
              <p className="whitespace-pre-line text-sm font-medium text-gray-900">
                {idx + 1}. {q.text}
                {q.needsReview && (
                  <span className="ml-2 inline-block rounded-full bg-amber-100 px-2 py-0.5 text-xs font-medium text-amber-700">
                    Mevzuat güncellendi — gözden geçir
                  </span>
                )}
              </p>
              {savingId === q.id && (
                <span className="shrink-0 text-xs text-gray-400">kaydediliyor...</span>
              )}
              {savedId === q.id && (
                <span className="shrink-0 text-xs text-green-600">kaydedildi ✓</span>
              )}
            </div>

            {q.citation && <p className="mt-1 text-xs text-gray-400">Dayanak: {q.citation}</p>}
            {q.beklenen_kanit && (
              <p className="mt-1 text-xs text-gray-500">
                Beklenen kanıt: {q.beklenen_kanit}
              </p>
            )}
            {q.guide_note && <p className="mt-1 text-xs text-gray-500">{q.guide_note}</p>}

            <div className="mt-3 flex gap-2">
              {(Object.keys(ANSWER_LABELS) as Answer[]).map((a) => (
                <button
                  key={a}
                  type="button"
                  onClick={() => updateAnswer(q.id, a)}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition ${
                    row.answer === a
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
              placeholder="Bulgu açıklaması / not (opsiyonel)"
              value={row.note}
              onChange={(e) => patch(q.id, { note: e.target.value })}
              onBlur={() => blurField(q.id)}
              className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              rows={2}
            />

            {isHayir && (
              <div className="mt-3 space-y-3 rounded-md bg-red-50 p-3">
                <p className="text-xs font-medium text-red-700">
                  Uyumsuzluk değerlendirmesi
                </p>

                <div className="grid gap-3 sm:grid-cols-3">
                  <div>
                    <label className="mb-1 block text-xs text-gray-600">Sistem Faktörü</label>
                    <select
                      value={row.sistem_faktoru}
                      onChange={(e) => {
                        const updated = patch(q.id, { sistem_faktoru: e.target.value });
                        save(q.id, updated);
                      }}
                      className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                    >
                      <option value="">Seçiniz</option>
                      {SISTEM_FAKTORU_SECENEKLERI.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-gray-600">Maliyet Faktörü</label>
                    <select
                      value={row.maliyet_faktoru}
                      onChange={(e) => {
                        const updated = patch(q.id, { maliyet_faktoru: e.target.value });
                        save(q.id, updated);
                      }}
                      className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                    >
                      <option value="">Seçiniz</option>
                      {MALIYET_FAKTORU_SECENEKLERI.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="mb-1 block text-xs text-gray-600">Eylem Faktörü</label>
                    <select
                      value={row.eylem_faktoru}
                      onChange={(e) => {
                        const updated = patch(q.id, { eylem_faktoru: e.target.value });
                        save(q.id, updated);
                      }}
                      className="w-full rounded-md border border-gray-300 px-2 py-1.5 text-xs"
                    >
                      <option value="">Seçiniz</option>
                      {EYLEM_FAKTORU_SECENEKLERI.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <textarea
                  placeholder="Öneri / düzeltici aksiyon (opsiyonel)"
                  value={row.oneri}
                  onChange={(e) => patch(q.id, { oneri: e.target.value })}
                  onBlur={() => blurField(q.id)}
                  className="w-full rounded-md border border-gray-300 px-3 py-2 text-xs focus:border-brand-500 focus:outline-none"
                  rows={2}
                />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

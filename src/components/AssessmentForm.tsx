"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  KAPSAM_SECENEKLERI,
  OLASILIK_SECENEKLERI,
  RISK_ACIGI_BILGI,
  SONUC_SECENEKLERI,
  UYUM_DUZEYI_SECENEKLERI,
  baglayicilikBilgi,
  referansAciklamasi,
  referansBelirle,
  riskAcigiHesapla,
} from "@/lib/emm";

type Question = {
  id: string;
  text: string;
  guide_note: string | null;
  beklenen_kanit: string | null;
  citation: string | null;
  degerlendirme_tipi: string | null;
  referans_sonuc: string | null;
  referans_olasilik: string | null;
  tehlike_sonuc: string | null;
  gereklilik_etkisi: string | null;
  azaltilmis_sonuc: string | null;
  referans_gerekce: string | null;
  standart_baglayiciligi: string | null;
  needsReview?: boolean;
  yeni?: boolean;
};

type Answer = "evet" | "hayir" | "kapsam_disi";

type ExistingResponse = {
  question_id: string;
  answer: Answer;
  note: string | null;
  oneri: string | null;
  sonuc: string | null;
  olasilik: string | null;
  kapsam: string | null;
  uyum_duzeyi: string | null;
};

type RowState = {
  answer?: Answer;
  note: string;
  oneri: string;
  sonuc: string;
  olasilik: string;
  kapsam: string;
  uyum_duzeyi: string;
};

const ANSWER_LABELS: Record<Answer, string> = {
  evet: "Evet",
  hayir: "Hayır",
  kapsam_disi: "Kapsam Dışı",
};

function emptyRow(): RowState {
  return { note: "", oneri: "", sonuc: "", olasilik: "", kapsam: "", uyum_duzeyi: "" };
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
        sonuc: r.sonuc ?? "",
        olasilik: r.olasilik ?? "",
        kapsam: r.kapsam ?? "",
        uyum_duzeyi: r.uyum_duzeyi ?? "",
      },
    ])
  );

  const [state, setState] = useState<Map<string, RowState>>(initial);
  const [savingId, setSavingId] = useState<string | null>(null);
  const [savedId, setSavedId] = useState<string | null>(null);
  const [errorId, setErrorId] = useState<string | null>(null);

  async function save(question: Question, row: RowState) {
    if (!row.answer) return;
    const hayir = row.answer === "hayir";
    const risk = hayir && question.degerlendirme_tipi === "risk";
    const idari = hayir && question.degerlendirme_tipi === "idari";
    setSavingId(question.id);
    setErrorId(null);
    const { data: auth } = await supabase.auth.getUser();
    const { error } = await supabase.from("responses").upsert(
      {
        company_id: companyId,
        question_id: question.id,
        answer: row.answer,
        note: row.note || null,
        oneri: hayir ? row.oneri || null : null,
        sonuc: risk ? row.sonuc || null : null,
        olasilik: risk ? row.olasilik || null : null,
        kapsam: risk ? row.kapsam || null : null,
        uyum_duzeyi: idari ? row.uyum_duzeyi || null : null,
        updated_by: auth.user?.id,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "company_id,question_id" }
    );
    setSavingId(null);
    if (error) {
      setErrorId(question.id);
      return;
    }
    setSavedId(question.id);
    setTimeout(() => setSavedId(null), 1500);
    router.refresh();
  }

  function patch(questionId: string, patch: Partial<RowState>) {
    const current = state.get(questionId) ?? emptyRow();
    const next = new Map(state);
    const updated = { ...current, ...patch };
    next.set(questionId, updated);
    setState(next);
    return updated;
  }

  function patchAndSave(question: Question, p: Partial<RowState>) {
    const updated = patch(question.id, p);
    save(question, updated);
  }

  function blurField(question: Question) {
    const current = state.get(question.id);
    if (current?.answer) save(question, current);
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
                {q.yeni && !row.answer && (
                  <span className="ml-2 inline-block rounded-full bg-blue-100 px-2 py-0.5 text-xs font-medium text-blue-700">
                    Yeni soru
                  </span>
                )}
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
              {errorId === q.id && (
                <span className="shrink-0 text-xs text-red-600">kaydedilemedi</span>
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
                  onClick={() => patchAndSave(q, { answer: a })}
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
              onBlur={() => blurField(q)}
              className="mt-3 w-full rounded-md border border-gray-200 px-3 py-2 text-sm focus:border-brand-500 focus:outline-none"
              rows={2}
            />

            {isHayir && (
              <div className="mt-3 space-y-3 rounded-md bg-red-50 p-3">
                {q.degerlendirme_tipi === "risk" ? (
                  <RiskDegerlendirmesi
                    question={q}
                    row={row}
                    onChange={(p) => patchAndSave(q, p)}
                  />
                ) : q.degerlendirme_tipi === "idari" ? (
                  <IdariDegerlendirme
                    question={q}
                    row={row}
                    onChange={(p) => patchAndSave(q, p)}
                  />
                ) : (
                  <p className="text-xs text-gray-500">
                    Bu soru için değerlendirme tipi henüz tanımlanmadı.
                  </p>
                )}

                <textarea
                  placeholder="Öneri / düzeltici faaliyet (opsiyonel)"
                  value={row.oneri}
                  onChange={(e) => patch(q.id, { oneri: e.target.value })}
                  onBlur={() => blurField(q)}
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

function Secim({
  etiket,
  deger,
  secenekler,
  onChange,
}: {
  etiket: string;
  deger: string;
  secenekler: { deger: string; etiket: string; aciklama: string }[];
  onChange: (v: string) => void;
}) {
  const secili = secenekler.find((s) => s.deger === deger);
  return (
    <div>
      <label className="mb-1 block text-xs text-gray-600">{etiket}</label>
      <select
        value={deger}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-md border border-gray-300 bg-white px-2 py-1.5 text-xs"
      >
        <option value="">Seçiniz</option>
        {secenekler.map((s) => (
          <option key={s.deger} value={s.deger} title={s.aciklama}>
            {s.etiket}
          </option>
        ))}
      </select>
      {secili && <p className="mt-1 text-[11px] leading-snug text-gray-500">{secili.aciklama}</p>}
    </div>
  );
}

function RiskDegerlendirmesi({
  question,
  row,
  onChange,
}: {
  question: Question;
  row: RowState;
  onChange: (p: Partial<RowState>) => void;
}) {
  const referans = referansAciklamasi(question);
  const ref = referansBelirle(question, row.olasilik);
  const acik = riskAcigiHesapla({
    sonuc: row.sonuc,
    olasilik: row.olasilik,
    kapsam: row.kapsam,
    referansSonuc: ref?.sonuc,
    referansOlasilik: ref?.olasilik,
  });

  return (
    <>
      <p className="text-xs font-medium text-red-700">
        Risk temelli değerlendirme — mevcut risk
      </p>
      <div className="grid gap-3 sm:grid-cols-3">
        <Secim
          etiket="Sonuç"
          deger={row.sonuc}
          secenekler={SONUC_SECENEKLERI}
          onChange={(v) => onChange({ sonuc: v })}
        />
        <Secim
          etiket="Olasılık"
          deger={row.olasilik}
          secenekler={OLASILIK_SECENEKLERI}
          onChange={(v) => onChange({ olasilik: v })}
        />
        <Secim
          etiket="Kapsam"
          deger={row.kapsam}
          secenekler={KAPSAM_SECENEKLERI}
          onChange={(v) => onChange({ kapsam: v })}
        />
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-gray-600">
        <span>
          Referans risk: <strong>{referans ?? "tanımlanmadı"}</strong>
        </span>
        <span className="flex items-center gap-1">
          Risk açığı:
          {acik ? (
            <span
              className={`rounded-full px-2 py-0.5 font-medium ${RISK_ACIGI_BILGI[acik].sinif}`}
              title={`EMM: ${RISK_ACIGI_BILGI[acik].emm}`}
            >
              {RISK_ACIGI_BILGI[acik].etiket}
            </span>
          ) : (
            <span className="text-gray-400">
              {referans ? "seçimleri tamamlayın" : "referans risk tanımlanmadığı için hesaplanamıyor"}
            </span>
          )}
        </span>
        <BaglayicilikSatiri deger={question.standart_baglayiciligi} />
      </div>
      {question.referans_gerekce && (
        <p className="text-[11px] leading-snug text-gray-500">
          Referans gerekçesi: {question.referans_gerekce}
        </p>
      )}
    </>
  );
}

function BaglayicilikSatiri({ deger }: { deger: string | null }) {
  const b = baglayicilikBilgi(deger);
  return (
    <span title={b.aciklama}>
      Standart bağlayıcılığı: <strong>{b.etiket}</strong>
      {b.varsayilan && <span className="text-gray-400"> (varsayılan)</span>}
    </span>
  );
}

function IdariDegerlendirme({
  question,
  row,
  onChange,
}: {
  question: Question;
  row: RowState;
  onChange: (p: Partial<RowState>) => void;
}) {
  return (
    <>
      <p className="text-xs font-medium text-red-700">Uyum ve idari düzenleme bulguları</p>
      <div className="sm:w-1/2">
        <Secim
          etiket="Uyum düzeyi"
          deger={row.uyum_duzeyi}
          secenekler={UYUM_DUZEYI_SECENEKLERI}
          onChange={(v) => onChange({ uyum_duzeyi: v })}
        />
      </div>
      <p className="text-xs text-gray-600">
        <BaglayicilikSatiri deger={question.standart_baglayiciligi} />
      </p>
    </>
  );
}

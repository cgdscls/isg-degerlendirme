"use client";

import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

type CategoryStat = {
  id: string;
  name: string;
  total: number;
  answered: number;
  evet: number;
  hayir: number;
  kapsamDisi: number;
  uyum: number | null;
};

type FactorDatum = { name: string; value: number };

export default function ReportCharts({
  categoryStats,
  sistemData,
  maliyetData,
  eylemData,
}: {
  categoryStats: CategoryStat[];
  sistemData: FactorDatum[];
  maliyetData: FactorDatum[];
  eylemData: FactorDatum[];
}) {
  const radarData = categoryStats.map((c) => ({
    name: c.name,
    uyum: c.uyum ?? 0,
  }));

  const hasAnyHayir = categoryStats.reduce((a, c) => a + c.hayir, 0) > 0;

  return (
    <div className="mt-6 space-y-8">
      {/* Kategori tablosu */}
      <div className="overflow-x-auto rounded-lg border border-gray-200 bg-white">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50 text-left text-xs uppercase text-gray-500">
              <th className="px-3 py-2">Kategori</th>
              <th className="px-3 py-2 text-right">Soru</th>
              <th className="px-3 py-2 text-right">Cevaplanan</th>
              <th className="px-3 py-2 text-right">Evet</th>
              <th className="px-3 py-2 text-right">Hayır</th>
              <th className="px-3 py-2 text-right">Kapsam Dışı</th>
              <th className="px-3 py-2 text-right">Uyum</th>
            </tr>
          </thead>
          <tbody>
            {categoryStats.map((c) => (
              <tr key={c.id} className="border-b border-gray-100 last:border-0">
                <td className="px-3 py-2 font-medium text-gray-900">{c.name}</td>
                <td className="px-3 py-2 text-right text-gray-600">{c.total}</td>
                <td className="px-3 py-2 text-right text-gray-600">{c.answered}</td>
                <td className="px-3 py-2 text-right text-green-700">{c.evet}</td>
                <td className="px-3 py-2 text-right text-red-700">{c.hayir}</td>
                <td className="px-3 py-2 text-right text-gray-500">{c.kapsamDisi}</td>
                <td className="px-3 py-2 text-right font-medium">
                  {c.uyum !== null ? `%${c.uyum}` : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Compliance Factor radar */}
      <div className="rounded-lg border border-gray-200 bg-white p-4">
        <h2 className="mb-2 text-center text-sm font-semibold text-gray-700">
          Uyum Faktörü (kategori bazlı %)
        </h2>
        <ResponsiveContainer width="100%" height={360}>
          <RadarChart data={radarData} outerRadius="75%">
            <PolarGrid />
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 11 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} />
            <Radar
              name="Uyum %"
              dataKey="uyum"
              stroke="#2563eb"
              fill="#2563eb"
              fillOpacity={0.35}
            />
            <Tooltip formatter={(v: number) => `%${v}`} />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Faktör dağılımları */}
      {hasAnyHayir ? (
        <div className="grid gap-6 sm:grid-cols-1">
          <FactorBarChart title="Sistem Faktörü Dağılımı" data={sistemData} color="#dc2626" />
          <FactorBarChart title="Maliyet Faktörü Dağılımı" data={maliyetData} color="#d97706" />
          <FactorBarChart title="Eylem Faktörü Dağılımı" data={eylemData} color="#7c3aed" />
        </div>
      ) : (
        <p className="text-center text-sm text-gray-500">
          Henüz "Hayır" cevabı olmadığı için faktör dağılımı gösterilecek veri yok.
        </p>
      )}
    </div>
  );
}

function FactorBarChart({
  title,
  data,
  color,
}: {
  title: string;
  data: FactorDatum[];
  color: string;
}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4">
      <h2 className="mb-2 text-sm font-semibold text-gray-700">{title}</h2>
      <ResponsiveContainer width="100%" height={Math.max(160, data.length * 48)}>
        <BarChart data={data} layout="vertical" margin={{ left: 20, right: 20 }}>
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />
          <XAxis type="number" allowDecimals={false} />
          <YAxis
            type="category"
            dataKey="name"
            width={220}
            tick={{ fontSize: 11 }}
          />
          <Tooltip />
          <Bar dataKey="value" fill={color} radius={[0, 4, 4, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

import { SectionLabel } from "./About";

const certs = [
  { name: "Analis Program", year: "Jul 2025", by: "BNSP" },
  { name: "Game Development", year: "Des 2024", by: "Infinite Learning Indonesia" },
  { name: "MSIB Batch 7 Graduate", year: "Des 2024", by: "Kemendikbud" },
];

export default function Certifications() {
  return (
    <div className="cell">
      <SectionLabel>Lisensi & Sertifikasi</SectionLabel>
      <div className="flex flex-col">
        {certs.map((c) => (
          <div key={c.name} className="flex justify-between items-center py-[13px] border-b border-white/5 last:border-none">
            <span className="text-[0.82rem] text-white/60">{c.name}</span>
            <div className="flex flex-col items-end gap-[2px]">
              <span className="text-[0.68rem] text-white/20 tracking-[0.06em]">{c.year}</span>
              <span className="text-[0.65rem] text-lime/45 tracking-[0.05em]">{c.by}</span>
            </div>
          </div>
        ))}
        <div className="text-[0.75rem] text-white/20 pt-[14px]">+ 4 sertifikasi lainnya</div>
      </div>
    </div>
  );
}

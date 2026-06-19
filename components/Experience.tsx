import { SectionLabel } from "./About";

const experiences = [
  {
    date: "Agu – Des 2025 · 5 bulan\nOn-site · Gambir, Jakarta",
    company: "Kementerian Luar Negeri RI",
    title: "IT Planning and Governance · Internship",
    desc: "Riset infrastruktur jaringan IT internasional Kemenlu. Analisis & pemetaan tata kelola jaringan dari HQ ke perwakilan RI di luar negeri. Penyusunan laporan perencanaan IT sebagai referensi internal divisi. Koordinasi teknis dan logistik event IT division.",
    pill: "Enterprise IT",
  },
  {
    date: "Sep – Des 2024 · 4 bulan\nRemote · MSIB Batch 7",
    company: "Infinite Learning Indonesia",
    title: "Game Programmer · Internship",
    desc: 'Core programmer di proyek game 2D "Verdant Chronicles" menggunakan Unity & C#. Developed gameplay systems, integrasi audio/visual assets, kolaborasi lintas tim (artist, designer, UI/UX). Presentasi final project ke mentor dan peserta program.',
    pill: "Game Dev",
  },
  {
    date: "Sep 2023 · 1 bulan\nKaliabang",
    company: "Universitas Bina Sarana Informatika",
    title: "Volunteer PKKMB — Divisi Perlengkapan",
    desc: "Pengelolaan dan pencatatan inventaris selama orientasi mahasiswa baru. Koordinasi distribusi perlengkapan dan akurasi data logistik.",
    pill: "Volunteer",
  },
];

export default function Experience() {
  return (
    <div className="cell col-span-full" id="exp">
      <SectionLabel>Pengalaman</SectionLabel>
      <div className="flex flex-col">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-4 md:gap-7 items-start py-[22px] border-b border-white/5 last:border-none"
          >
            <div className="text-[0.7rem] text-white/20 tracking-[0.04em] leading-relaxed whitespace-pre-line">
              {exp.date}
            </div>
            <div>
              <div className="font-syne font-bold text-[1rem] text-paper mb-[5px]">{exp.company}</div>
              <div className="text-[0.78rem] text-lime/65 mb-2 tracking-[0.02em]">{exp.title}</div>
              <div className="text-[0.8rem] text-white/38 leading-[1.75]">{exp.desc}</div>
            </div>
            <div className="text-[0.62rem] tracking-[0.1em] uppercase px-[11px] py-[5px] bg-lime/7 text-lime/70 border border-lime/15 rounded-[2px] whitespace-nowrap w-fit mt-[3px]">
              {exp.pill}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

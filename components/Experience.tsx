const experiences = [
  {
    icon: "🏛️",
    iconBg: "bg-[rgba(79,163,227,0.1)] text-[var(--blue)]",
    badge: "Enterprise IT",
    badgeStyle:
      "bg-[rgba(79,163,227,0.1)] border-[rgba(79,163,227,0.3)] text-[var(--blue)]",
    title: "IT Planning & Governance — Intern",
    org: "Kementerian Luar Negeri RI",
    period: "Agu – Des 2025 · 5 bulan · Gambir, Jakarta",
    desc: "Riset infrastruktur jaringan IT internasional Kemenlu. Analisis & pemetaan tata kelola jaringan dari HQ ke perwakilan RI di luar negeri. Penyusunan laporan perencanaan IT sebagai referensi internal divisi. Koordinasi teknis dan logistik event IT division.",
  },
  {
    icon: "🎮",
    iconBg: "bg-[rgba(255,122,51,0.1)] text-[var(--signal)]",
    badge: "Game Dev · MSIB Batch 7",
    badgeStyle:
      "bg-[rgba(255,122,51,0.08)] border-[rgba(255,122,51,0.3)] text-[var(--signal)]",
    title: "Game Programmer — Intern",
    org: "Infinite Learning Indonesia",
    period: "Sep – Des 2024 · 4 bulan · Remote",
    desc: 'Core programmer game 2D "Verdant Chronicles" dengan Unity & C#. Developed gameplay systems, integrasi audio/visual assets, kolaborasi lintas tim (artist, designer, UI/UX). Presentasi final project ke mentor dan peserta program.',
  },
  {
    icon: "🎓",
    iconBg: "bg-[rgba(236,235,226,0.06)] text-[var(--mute)]",
    badge: "Volunteer",
    badgeStyle:
      "bg-[rgba(236,235,226,0.05)] border-[var(--line)] text-[var(--mute)]",
    title: "Volunteer PKKMB — Divisi Perlengkapan",
    org: "Universitas Bina Sarana Informatika",
    period: "Sep 2023 · 1 bulan · Kaliabang",
    desc: "Pengelolaan dan pencatatan inventaris selama orientasi mahasiswa baru. Koordinasi distribusi perlengkapan dan akurasi data logistik.",
  },
];

export default function Experience() {
  return (
    <section id="karir" className="relative z-10 px-6 md:px-11 py-16 section-divider">
      <div className="flex items-center gap-[10px] mb-[10px] font-mono">
        <span className="text-[11px] text-[var(--mute)]">FIG.02</span>
        <div className="h-px w-10 bg-[var(--line)]" />
        <span className="text-[11px] text-[var(--blue)] tracking-[1.5px] uppercase">
          Pengalaman
        </span>
      </div>
      <h2 className="font-grotesk text-[36px] md:text-[42px] tracking-[-0.5px] font-semibold leading-none mb-9 text-[var(--paper)]">
        Perjalanan Karir
      </h2>

      <div className="flex flex-col gap-3">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="bg-[var(--ink2)] border border-[var(--line)] rounded-[6px] p-6 grid grid-cols-[48px_1fr] gap-[18px] items-start card-hover"
          >
            <div
              className={`w-12 h-12 rounded-[4px] flex items-center justify-center text-xl flex-shrink-0 ${exp.iconBg}`}
            >
              {exp.icon}
            </div>
            <div>
              <div
                className={`inline-flex items-center gap-[5px] font-mono text-[10px] font-medium px-[10px] py-[3px] rounded-[3px] border tracking-wide mb-2 ${exp.badgeStyle}`}
              >
                {exp.badge}
              </div>
              <div className="font-grotesk text-[15px] font-semibold text-[var(--paper)] mb-[3px]">
                {exp.title}
              </div>
              <div className="font-mono text-[11px] text-[var(--mute)] mb-[10px] flex items-center gap-[6px]">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {exp.org} · {exp.period}
              </div>
              <div className="text-[13px] text-[var(--mute)] leading-[1.7]">
                {exp.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

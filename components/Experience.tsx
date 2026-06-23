const experiences = [
  {
    icon: "🏛️",
    iconBg: "bg-[rgba(124,111,247,0.1)] text-[var(--violet)]",
    badge: "Enterprise IT",
    badgeStyle:
      "bg-[rgba(124,111,247,0.1)] border-[rgba(124,111,247,0.25)] text-[#b0aaff]",
    title: "IT Planning & Governance — Intern",
    org: "Kementerian Luar Negeri RI",
    period: "Agu – Des 2025 · 5 bulan · Gambir, Jakarta",
    desc: "Riset infrastruktur jaringan IT internasional Kemenlu. Analisis & pemetaan tata kelola jaringan dari HQ ke perwakilan RI di luar negeri. Penyusunan laporan perencanaan IT sebagai referensi internal divisi. Koordinasi teknis dan logistik event IT division.",
  },
  {
    icon: "🎮",
    iconBg: "bg-[rgba(200,240,96,0.1)] text-[var(--lime)]",
    badge: "Game Dev · MSIB Batch 7",
    badgeStyle:
      "bg-[rgba(200,240,96,0.08)] border-[rgba(200,240,96,0.2)] text-[var(--lime)]",
    title: "Game Programmer — Intern",
    org: "Infinite Learning Indonesia",
    period: "Sep – Des 2024 · 4 bulan · Remote",
    desc: 'Core programmer game 2D "Verdant Chronicles" dengan Unity & C#. Developed gameplay systems, integrasi audio/visual assets, kolaborasi lintas tim (artist, designer, UI/UX). Presentasi final project ke mentor dan peserta program.',
  },
  {
    icon: "🎓",
    iconBg: "bg-[rgba(255,255,255,0.05)] text-[var(--muted2)]",
    badge: "Volunteer",
    badgeStyle:
      "bg-[rgba(255,255,255,0.05)] border-[rgba(255,255,255,0.1)] text-[var(--muted2)]",
    title: "Volunteer PKKMB — Divisi Perlengkapan",
    org: "Universitas Bina Sarana Informatika",
    period: "Sep 2023 · 1 bulan · Kaliabang",
    desc: "Pengelolaan dan pencatatan inventaris selama orientasi mahasiswa baru. Koordinasi distribusi perlengkapan dan akurasi data logistik.",
  },
];

export default function Experience() {
  return (
    <section id="karir" className="relative z-10 px-11 py-16 section-divider">
      <div className="flex items-center gap-[10px] mb-[10px]">
        <span className="text-[11px] text-[var(--muted)] font-bold">01</span>
        <div className="h-px w-10 bg-[var(--border)]" />
        <span className="text-[11px] text-[var(--violet)] font-bold tracking-[1.5px] uppercase">
          Pengalaman
        </span>
      </div>
      <h2 className="font-serif-display text-[42px] tracking-[-0.5px] font-normal leading-none mb-9">
        Perjalanan
        <br />
        <em className="italic text-[var(--muted2)]">Karir</em>
      </h2>

      <div className="flex flex-col gap-3">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-6 grid grid-cols-[48px_1fr] gap-[18px] items-start card-hover"
          >
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${exp.iconBg}`}
            >
              {exp.icon}
            </div>
            <div>
              <div
                className={`inline-flex items-center gap-[5px] text-[10px] font-bold px-[10px] py-[3px] rounded-[20px] border tracking-wide mb-2 ${exp.badgeStyle}`}
              >
                {exp.badge}
              </div>
              <div className="text-[15px] font-bold text-[var(--text)] mb-[3px]">
                {exp.title}
              </div>
              <div className="text-xs text-[var(--muted2)] mb-[10px] flex items-center gap-[6px]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                {exp.org} · {exp.period}
              </div>
              <div className="text-xs text-[var(--muted)] leading-[1.7]">
                {exp.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

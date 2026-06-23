const projects = [
  {
    num: "01",
    numColor: "text-[rgba(124,111,247,0.2)]",
    accent: "from-[var(--violet2)] to-[var(--violet)]",
    title: "Caterify — E-Catering Platform",
    desc: "Platform e-catering full-stack end-to-end — requirements analysis, UI/UX, development, QA, hingga deployment production. Dilengkapi payment gateway Midtrans, Google OAuth 2.0, dan admin dashboard.",
    tags: [
      "PHP Laravel",
      "Midtrans API",
      "MySQL",
      "Tailwind CSS",
      "Google OAuth 2.0",
      "JavaScript",
    ],
    link: {
      label: "Source code",
      href: "https://github.com/Syaharani21/caterify",
    },
    wide: false,
    thesis: false,
  },
  {
    num: "02",
    numColor: "text-[rgba(200,240,96,0.15)]",
    accent: "from-[#7aaa20] to-[var(--lime)]",
    title: "Verdant Chronicles — 2D Platformer",
    desc: "Game 2D platformer narrative-driven tentang Elara, botanist yang mengungkap misteri di lanskap magis. Dikembangkan dalam MSIB Batch 7 bersama tim lintas disiplin.",
    tags: [
      "Unity",
      "C#",
      "Game Logic",
      "Physics",
      "QA Testing",
      "2D Platformer",
    ],
    link: { label: "Main gamenya ↗", href: "https://itch.io/embed/3117865" },
    wide: false,
    thesis: false,
  },
  {
    num: "Skripsi",
    numColor: "text-[rgba(124,111,247,0.2)]",
    accent: "from-[var(--violet2)] via-[var(--violet)] to-[var(--lime)]",
    title: "Adaptive FSM AI System untuk 2D Platformer",
    desc: "Sistem AI berbasis Adaptive Finite State Machine menggunakan C# dan Unity untuk musuh di game 2D platformer. NPC beradaptasi dinamis terhadap perilaku pemain — menggabungkan keahlian game programming dari MSIB dengan penelitian akademis formal.",
    tags: [
      "C#",
      "Unity",
      "FSM AI",
      "Adaptive Systems",
      "2D Platformer",
      "Academic Research",
    ],
    link: null,
    wide: true,
    thesis: true,
  },
];

export default function Projects() {
  return (
    <section id="proyek" className="relative z-10 px-11 py-16 section-divider">
      <div className="flex items-center gap-[10px] mb-[10px]">
        <span className="text-[11px] text-[var(--muted)] font-bold">02</span>
        <div className="h-px w-10 bg-[var(--border)]" />
        <span className="text-[11px] text-[var(--violet)] font-bold tracking-[1.5px] uppercase">
          Proyek
        </span>
      </div>
      <h2 className="font-serif-display text-[42px] tracking-[-0.5px] font-normal leading-none mb-9">
        Karya
        <br />
        <em className="italic text-[var(--muted2)]">Terpilih</em>
      </h2>

      <div className="grid grid-cols-2 gap-3">
        {projects.map((p) => (
          <div
            key={p.title}
            className={`bg-[var(--bg2)] border border-[var(--border)] rounded-2xl p-7 relative overflow-hidden card-hover ${
              p.wide ? "col-span-2 bg-[var(--bg3)]" : ""
            }`}
          >
            {/* Accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.accent}`}
            />

            {/* Num */}
            <div
              className={`font-serif-display italic text-[48px] leading-none mb-[10px] ${p.numColor} ${p.wide ? "text-[36px]" : ""}`}
            >
              {p.num}
            </div>

            {p.thesis && (
              <div className="absolute top-5 right-5 text-[10px] bg-[rgba(124,111,247,0.15)] border border-[var(--borderl)] text-[#b0aaff] px-3 py-1 rounded-[20px] font-bold tracking-wide">
                In Progress
              </div>
            )}

            <div className="text-base font-bold mb-2">{p.title}</div>
            <div className="text-xs text-[var(--muted2)] leading-[1.7] mb-4">
              {p.desc}
            </div>

            <div className="flex flex-wrap gap-[5px] mb-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="text-[10px] bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded px-[10px] py-[3px] text-[var(--muted)] font-medium tracking-wide"
                >
                  {t}
                </span>
              ))}
            </div>

            {p.link && (
              <a
                href={p.link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 text-[11px] font-bold tracking-wide no-underline transition-colors ${
                  p.num === "01"
                    ? "text-[var(--violet)] hover:text-[#b0aaff]"
                    : "text-[var(--lime)] hover:text-[var(--lime2)]"
                }`}
              >
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                {p.link.label}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

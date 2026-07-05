import Image from "next/image";

const projects = [
  {
    num: "01",
    numColor: "text-[rgba(79,163,227,0.22)]",
    accent: "from-[var(--blue-dim)] to-[var(--blue)]",
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
    linkColor: "text-[var(--blue)] hover:text-[#7abcee]",
    image: "/images/caterify.png",
  },
  {
    num: "02",
    numColor: "text-[rgba(255,122,51,0.2)]",
    accent: "from-[#c25c1f] to-[var(--signal)]",
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
    link: {
      label: "Main gamenya ↗",
      href: "https://greenhouse5.itch.io/verdant-chronicles",
    },
    wide: false,
    thesis: false,
    linkColor: "text-[var(--signal)] hover:text-[#ff9a5e]",
    image: "/images/Verdant.png",
  },
  {
    num: "Skripsi",
    numColor: "text-[rgba(79,163,227,0.22)]",
    accent: "from-[var(--blue-dim)] via-[var(--blue)] to-[var(--signal)]",
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
    linkColor: "",
  },
];

export default async function Projects() {
  // resolve external images for projects (e.g., itch.io) on the server
  const projectsWithImages = await Promise.all(
    projects.map(async (p) => {
      if (p.image) return p;
      if (p.link && p.link.href && p.link.href.includes("itch.io")) {
        try {
          const res = await fetch(p.link.href, { cache: "no-store" });
          const html = await res.text();
          const ogMatch = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i);
          const twMatch = html.match(/<meta[^>]+name=["']twitter:image["'][^>]+content=["']([^"']+)["']/i);
          const img = (ogMatch && ogMatch[1]) || (twMatch && twMatch[1]) || null;
          return { ...p, image: img };
        } 
        catch {
          return { ...p, image: p.image };
        }
      }
      return p;
    }),
  );

  return (
    <section id="proyek" className="relative z-10 px-6 md:px-11 py-16 section-divider">
      <div className="flex items-center gap-[10px] mb-[10px] font-mono">
        <span className="text-[11px] text-[var(--mute)]">FIG.03</span>
        <div className="h-px w-10 bg-[var(--line)]" />
        <span className="text-[11px] text-[var(--blue)] tracking-[1.5px] uppercase">
          Proyek
        </span>
      </div>
      <h2 className="font-grotesk text-[36px] md:text-[42px] tracking-[-0.5px] font-semibold leading-none mb-9 text-[var(--paper)]">
        Karya Terpilih
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {projectsWithImages.map((p) => (
          <div
            key={p.title}
            className={`bg-[var(--ink2)] border border-[var(--line)] rounded-[6px] p-7 relative overflow-hidden card-hover ${
              p.wide ? "md:col-span-2 bg-[var(--ink3)] corner-brackets" : ""
            }`}
          >
            {/* Accent bar */}
            <div
              className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${p.accent}`}
            />

            {/* Num */}
            <div
              className={`font-mono italic text-[40px] leading-none mb-[10px] ${p.numColor} ${p.wide ? "text-[30px]" : ""}`}
            >
              {p.num}
            </div>

            {p.thesis && (
              <div className="absolute top-5 right-5 font-mono text-[10px] bg-[rgba(255,122,51,0.14)] border border-[rgba(255,122,51,0.4)] text-[var(--signal)] px-3 py-1 rounded-[3px] font-medium tracking-wide">
                IN PROGRESS
              </div>
            )}

            {p.image && (
              <div className="mb-4 rounded overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  width={1200}
                  height={600}
                  className="w-full h-40 object-cover rounded"
                />
              </div>
            )}

            <div className="font-grotesk text-base font-semibold mb-2 text-[var(--paper)]">{p.title}</div>
            <div className="text-[13px] text-[var(--mute)] leading-[1.7] mb-4 max-w-2xl">
              {p.desc}
            </div>

            <div className="flex flex-wrap gap-[5px] mb-3">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[10px] bg-[rgba(236,235,226,0.04)] border border-[var(--line-soft)] rounded-[2px] px-[10px] py-[3px] text-[var(--mute)] tracking-wide"
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
                className={`inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-wide no-underline transition-colors ${p.linkColor}`}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
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

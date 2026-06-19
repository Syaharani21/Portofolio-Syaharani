import { SectionLabel } from "./About";

const projects = [
  {
    num: "01",
    accentColor: "from-lime",
    title: "Caterify — E-Catering Platform",
    desc: "Aplikasi web full-stack untuk manajemen pemesanan katering, dibangun end-to-end: requirements analysis → UI/UX → development → QA → deployment.",
    features: [
      { icon: "💳", text: "Midtrans Payment Gateway — transaksi aman, tracking status, webhook real-time" },
      { icon: "🔐", text: "Google OAuth 2.0 — autentikasi seamless dan aman" },
      { icon: "📊", text: "Admin dashboard — manajemen menu & order" },
      { icon: "🗄️", text: "Relational DB — users, menus, orders, transactions" },
    ],
    tags: ["PHP Laravel", "JavaScript", "MySQL", "Midtrans API", "Google OAuth", "Tailwind CSS", "HTML/CSS"],
    link: "https://github.com/Syaharani21/caterify",
    linkLabel: "Source code ↗",
  },
  {
    num: "02",
    accentColor: "from-purple-500/70",
    title: "Verdant Chronicles — 2D Platformer",
    desc: "Game 2D platformer narrative-driven melalui lanskap magis. Pemain memerankan Elara, botanist yang berpetualang mengungkap misteri dan melindungi ekosistem ajaib dunianya.",
    features: [
      { icon: "⌨️", text: "Core gameplay systems dengan C# scripting di Unity" },
      { icon: "👥", text: "Kolaborasi lintas tim: artist, game designer, UI/UX" },
      { icon: "🎵", text: "Integrasi audio & visual assets secara efektif" },
      { icon: "🧪", text: "QA fungsionalitas & presentasi final ke mentor" },
    ],
    tags: ["C#", "Unity", "2D Game Dev", "Game Logic", "Physics", "QA Testing"],
    link: "https://itch.io/embed/3117865",
    linkLabel: "Main gamenya ↗",
  },
];

export default function Projects() {
  return (
    <>
      {projects.map((p) => (
        <div key={p.num} className="cell" id={p.num === "01" ? "projects" : undefined}>
          <div className="font-syne font-extrabold text-[4rem] leading-none tracking-[-0.05em] text-white/[0.04] mb-[-14px]">
            {p.num}
          </div>
          <div className={`h-[2px] mb-5 rounded-[1px] bg-gradient-to-r ${p.accentColor} to-transparent`} />
          <div className="font-syne font-bold text-[1.2rem] text-paper mb-[10px] leading-snug">
            {p.title}
          </div>
          <p className="text-[0.82rem] text-white/42 leading-[1.75] mb-[18px]">{p.desc}</p>
          <div className="flex flex-col gap-2 mb-[18px]">
            {p.features.map((f) => (
              <div key={f.text} className="flex items-start gap-[10px] text-[0.78rem] text-white/38">
                <span className="shrink-0 mt-[2px] text-[12px]">{f.icon}</span>
                {f.text}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-[6px] mb-[22px]">
            {p.tags.map((t) => (
              <span key={t} className="text-[0.67rem] tracking-[0.05em] px-[10px] py-[3px] bg-white/3 border border-white/7 rounded-[2px] text-white/32">
                {t}
              </span>
            ))}
          </div>
          <a href={p.link} className="text-[0.73rem] text-lime tracking-[0.08em] uppercase inline-flex items-center gap-[7px] hover:gap-3 transition-all">
            {p.linkLabel}
          </a>
        </div>
      ))}
    </>
  );
}

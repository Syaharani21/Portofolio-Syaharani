import { SectionLabel } from "./About";

const links = [
  {
    icon: "✉️",
    href: "mailto:syaharani2102@email.com",
    label: "syaharani2102@email.com",
  },
  {
    icon: "💼",
    href: "https://linkedin.com/in/syaharani-nurulita",
    label: "linkedin/syaharani-nurulita",
  },
  {
    icon: "🐙",
    href: "https://github.com/syaharani21",
    label: "github/syaharani21",
  },
];

export default function Contact() {
  return (
    <div className="cell flex flex-col justify-between" id="contact">
      <div>
        <SectionLabel>Kontak</SectionLabel>
        <div className="font-syne font-extrabold text-[2rem] leading-[1.1] text-paper mb-6 tracking-[-0.02em]">
          Yuk,
          <br />
          <em
            className="not-italic text-lime italic"
            style={{ fontStyle: "italic" }}
          >
            ngobrol
          </em>
          <br />
          bareng.
        </div>
      </div>
      <div className="flex flex-col gap-3">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="text-[0.77rem] tracking-[0.08em] uppercase text-white/32 flex items-center gap-[10px] hover:text-lime transition-colors group"
          >
            <span className="text-lime/40 group-hover:text-lime transition-colors text-[15px]">
              {l.icon}
            </span>
            {l.label}
          </a>
        ))}
      </div>
    </div>
  );
}

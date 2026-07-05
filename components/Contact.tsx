const links = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16v16H4z" opacity="0" />
        <path d="M22 6l-10 7L2 6" />
        <path d="M2 6h20v12H2z" />
      </svg>
    ),
    href: "mailto:syaharani2102@email.com",
    label: "syaharani2102@email.com",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: "https://linkedin.com/in/syaharani-nurulita",
    label: "linkedin/syaharani-nurulita",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
      </svg>
    ),
    href: "https://github.com/syaharani21",
    label: "github/syaharani21",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 px-6 md:px-11 py-20 section-divider">
      <div className="flex items-center gap-[10px] mb-[10px] font-mono">
        <span className="text-[11px] text-[var(--mute)]">FIG.05</span>
        <div className="h-px w-10 bg-[var(--line)]" />
        <span className="text-[11px] text-[var(--blue)] tracking-[1.5px] uppercase">
          Kontak
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-end">
        <h2 className="font-grotesk text-[36px] md:text-[52px] tracking-[-1px] font-semibold leading-[1.05] text-[var(--paper)]">
          Yuk, <span className="text-[var(--blue)]">ngobrol</span>
          <br />
          bareng<span className="text-[var(--signal)]">.</span>
        </h2>

        <div className="flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-[13px] text-[var(--mute)] border border-[var(--line)] rounded-[4px] px-4 py-3 no-underline transition-all hover:border-[var(--blue)] hover:text-[var(--paper)] hover:bg-[var(--ink2)]"
            >
              <span className="text-[var(--blue)] flex-shrink-0">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

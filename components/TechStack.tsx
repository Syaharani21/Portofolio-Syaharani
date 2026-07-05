const stack = [
  { name: "PHP (Laravel)", core: true },
  { name: "JavaScript ES6+", core: true },
  { name: "C# (Unity)", core: true },
  { name: "MySQL / SQL", core: true },
  { name: "Tailwind CSS", core: true },
  { name: "HTML & CSS" },
  { name: "Bootstrap" },
  { name: "Midtrans API" },
  { name: "Google OAuth 2.0" },
  { name: "Unity Engine" },
  { name: "Git" },
  { name: "System Design" },
  { name: "FSM AI Design" },
  { name: "QA Testing" },
  { name: "IT Governance" },
  { name: "Project Management" },
  { name: "Microsoft Office" },
];

export default function TechStack() {
  return (
    <section
      className="relative z-10 px-6 md:px-11 py-16 section-divider"
      id="skills"
    >
      <div className="flex items-center gap-[10px] mb-[10px] font-mono">
        <span className="text-[11px] text-[var(--mute)]">FIG.04</span>
        <div className="h-px w-10 bg-[var(--line)]" />
        <span className="text-[11px] text-[var(--blue)] tracking-[1.5px] uppercase">
          Tech Stack
        </span>
      </div>
      <h2 className="font-grotesk text-[36px] md:text-[42px] tracking-[-0.5px] font-semibold leading-none mb-9 text-[var(--paper)]">
        Skills
      </h2>

      <div className="flex flex-wrap gap-2">
        {stack.map((t) => (
          <span
            key={t.name}
            className={`font-mono text-[12px] px-4 py-2 border rounded-[3px] tracking-wide transition-all cursor-default ${
              t.core
                ? "border-[rgba(255,122,51,0.3)] text-[var(--signal)] hover:bg-[rgba(255,122,51,0.08)]"
                : "border-[var(--line)] text-[var(--mute)] hover:border-[var(--blue)] hover:text-[var(--paper)]"
            }`}
          >
            {t.name}
          </span>
        ))}
      </div>
    </section>
  );
}

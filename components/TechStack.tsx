import { SectionLabel } from "./About";

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
    <div className="cell col-span-full" id="skills">
      <SectionLabel>Tech Stack · 29 skills</SectionLabel>
      <div className="flex flex-wrap gap-2">
        {stack.map((t) => (
          <span
            key={t.name}
            className={`text-[0.77rem] px-4 py-2 border rounded-[3px] tracking-[0.02em] transition-all cursor-default hover:border-lime/30 hover:text-lime/85 ${
              t.core
                ? "border-lime/18 text-lime/72"
                : "border-white/7 text-white/42"
            }`}
          >
            {t.name}
          </span>
        ))}
      </div>
    </div>
  );
}

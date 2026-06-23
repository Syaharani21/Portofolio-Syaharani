const skills = [
  "PHP Laravel",
  "Unity & C#",
  "JavaScript ES6+",
  "MySQL",
  "Tailwind CSS",
  "IT Governance",
  "FSM AI Design",
  "Google OAuth 2.0",
  "QA Testing",
  "Midtrans API",
  "System Analysis",
  "Game Dev",
  "Graphic Design",
  "Bootstrap",
];

export default function Marquee() {
  const doubled = [...skills, ...skills];

  return (
    <div className="border-y border-[var(--border)] bg-[var(--bg2)] py-3 overflow-hidden">
      <div className="animate-marquee">
        {doubled.map((skill, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-[10px] px-7 text-xs text-[var(--muted2)] font-medium tracking-wide"
          >
            <span className="w-1 h-1 rounded-full bg-[var(--violet)] flex-shrink-0" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

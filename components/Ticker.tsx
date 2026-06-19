"use client";
const items = [
  { text: "PHP Laravel", on: true },
  { text: "·" },
  { text: "JavaScript ES6+" },
  { text: "·" },
  { text: "Unity · C#", on: true },
  { text: "·" },
  { text: "MySQL" },
  { text: "·" },
  { text: "Midtrans API" },
  { text: "·" },
  { text: "Tailwind CSS", on: true },
  { text: "·" },
  { text: "Google OAuth 2.0" },
  { text: "·" },
  { text: "FSM AI Design" },
  { text: "·" },
  { text: "System Analysis", on: true },
  { text: "·" },
  { text: "IT Governance" },
  { text: "·" },
  { text: "QA Testing" },
  { text: "·" },
];
const doubled = [...items, ...items];

export default function Ticker() {
  return (
    <div className="border-t border-b border-white/[0.06] py-[13px] overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`text-[0.7rem] tracking-[0.15em] uppercase px-7 ${
              item.on ? "text-lime/55" : "text-white/16"
            }`}
          >
            {item.text}
          </span>
        ))}
      </div>
    </div>
  );
}

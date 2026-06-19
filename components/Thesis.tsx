import { SectionLabel } from "./About";

export default function Thesis() {
  const tags = ["C#", "Unity", "FSM AI", "Adaptive Systems", "2D Platformer"];
  return (
    <div className="col-span-full bg-lime/[0.03] border border-lime/[0.08] px-10 py-9">
      <SectionLabel>Skripsi — In Progress</SectionLabel>
      <div className="inline-block text-[0.62rem] tracking-[0.14em] uppercase px-[10px] py-1 bg-lime/8 text-lime/70 border border-lime/15 rounded-[2px] mb-4">
        🎓 Final Year Project
      </div>
      <div className="font-syne font-bold text-[1.05rem] text-paper mb-[10px] leading-snug max-w-2xl">
        Adaptive Finite State Machine (FSM) AI System untuk 2D Platformer Game
      </div>
      <p className="text-[0.82rem] text-white/42 leading-[1.75] max-w-2xl mb-4">
        Mengembangkan sistem AI berbasis Adaptive FSM menggunakan C# dan Unity untuk musuh di game 2D platformer.
        Sistem ini memungkinkan NPC beradaptasi secara dinamis terhadap perilaku pemain — menggabungkan keahlian
        game programming dari MSIB dengan penelitian akademis formal.
      </p>
      <div className="flex flex-wrap gap-[6px]">
        {tags.map((t) => (
          <span key={t} className="text-[0.67rem] tracking-[0.05em] px-[10px] py-[3px] bg-white/3 border border-white/7 rounded-[2px] text-white/32">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

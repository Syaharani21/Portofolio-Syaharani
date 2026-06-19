"use client";
export default function Nav() {
  return (
    <nav className="flex justify-between items-center px-10 py-5 border-b border-white/[0.06] sticky top-0 bg-ink/90 backdrop-blur-xl z-50">
      <div className="font-syne font-extrabold text-[1.1rem] tracking-tight text-lime">SN—</div>
      <ul className="hidden md:flex gap-7 list-none">
        {["Profil","Pengalaman","Proyek","Skills","Kontak"].map((item, i) => {
          const hrefs = ["#about","#exp","#projects","#skills","#contact"];
          return (
            <li key={item}>
              <a href={hrefs[i]} className="text-[0.72rem] tracking-[0.1em] uppercase text-white/35 hover:text-lime transition-colors">
                {item}
              </a>
            </li>
          );
        })}
      </ul>
      <div className="flex items-center gap-2 text-[0.68rem] tracking-[0.12em] uppercase text-white/30">
        <span className="w-[6px] h-[6px] rounded-full bg-lime animate-pulse" />
        Open to work
      </div>
    </nav>
  );
}

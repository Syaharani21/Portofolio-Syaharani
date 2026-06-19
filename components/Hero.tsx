export default function Hero() {
  return (
    <div className="px-10 pt-[72px] pb-16 border-b border-white/[0.06] max-w-[1100px] mx-auto">
      <div className="flex justify-between items-start mb-11 flex-wrap gap-3">
        <div className="text-[0.7rem] tracking-[0.14em] uppercase text-white/30 border border-white/10 px-4 py-[7px] rounded-[2px]">
          Final-Year IT Student · Software Engineer Intern
        </div>
        <div className="flex items-center gap-[6px] text-[0.7rem] text-white/20 tracking-[0.06em]">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-lime"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
          Jakarta Metropolitan Area
        </div>
      </div>

      <div className="font-syne font-extrabold leading-[0.87] tracking-[-0.03em] mb-9">
        <span className="block text-[clamp(4.5rem,10vw,8rem)] text-paper">
          SYAHA<span className="text-lime">RANI</span>
        </span>
        <span
          className="block text-[clamp(4.5rem,10vw,8rem)]"
          style={{ WebkitTextStroke: "1.5px rgba(247,245,240,0.18)", color: "transparent" }}
        >
          NURULITA
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 items-end">
        <p className="text-[0.95rem] text-white/50 max-w-[480px] leading-[1.8]">
          Mahasiswa TI semester akhir (GPA{" "}
          <strong className="text-paper font-medium">3.68/4.00</strong>) yang menggabungkan{" "}
          <strong className="text-paper font-medium">IT governance enterprise</strong> dari Kemenlu RI
          dengan kemampuan full-stack web & game development. Certified Program Analyst (BNSP).
        </p>
        <div className="flex flex-col items-start md:items-end gap-3">
          <a
            href="https://wa.me/62881010188415?text=Halo%20Syaharani,%20saya%20tertarik%20dengan%20portfolio%20Anda"
            target="_blank"
            className="bg-lime text-ink font-syne font-bold text-[0.82rem] tracking-[0.04em] px-7 py-3 rounded-[2px] hover:opacity-85 transition-opacity whitespace-nowrap"
          >
            Hire me →
          </a>
          <a
            href="https://linkedin.com/in/syaharani-nurulita"
            className="text-[0.73rem] text-white/28 tracking-[0.08em] hover:text-lime transition-colors"
          >
            linkedin/syaharani-nurulita ↗
          </a>
        </div>
      </div>
    </div>
  );
}

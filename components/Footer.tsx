export default function Footer() {
  return (
    <footer className="border-t border-[var(--line-soft)] px-6 md:px-11 py-6 flex flex-col sm:flex-row gap-3 justify-between items-center relative z-10">
      <span className="font-mono text-[12px] text-[var(--mute)] tracking-wide">
        syaharani<span className="text-[var(--blue)]">.dev</span>
      </span>
      <div className="flex items-center font-mono text-[11px] text-[var(--mute)] tracking-wide">
        Jakarta, ID
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--signal)] mx-[8px]" />
        UBSI · TI
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--signal)] mx-[8px]" />
        2026
      </div>
    </footer>
  );
}

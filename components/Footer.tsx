export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] px-11 py-5 flex justify-between items-center relative z-10">
      <span className="font-serif-display italic text-[13px] text-[var(--muted)]">
        Syaharani Nurulita
      </span>
      <div className="flex items-center text-[11px] text-[var(--muted)] font-medium tracking-wide">
        Jakarta, ID
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--lime)] mx-[6px]" />
        UBSI · TI
        <span className="inline-block w-1 h-1 rounded-full bg-[var(--lime)] mx-[6px]" />
        2026
      </div>
    </footer>
  );
}

"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Profil", href: "#about" },
    { label: "Karir", href: "#karir" },
    { label: "Proyek", href: "#proyek" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-6 md:px-11 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--ink)]/92 backdrop-blur-md border-b border-[var(--line)]"
          : "border-b border-[var(--line-soft)]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <div className="w-7 h-7 rounded-[3px] bg-[var(--blue)] flex items-center justify-center flex-shrink-0">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <circle cx="3" cy="3" r="1.6" fill="#0a1420" />
            <circle cx="11" cy="3" r="1.6" fill="#0a1420" />
            <circle cx="7" cy="11" r="1.6" fill="#0a1420" />
            <path d="M3 3L7 11L11 3" stroke="#0a1420" strokeWidth="1.3" strokeLinecap="round" />
          </svg>
        </div>
        <span className="font-mono text-xs font-medium tracking-wide hidden sm:inline">
          syaharani<span className="text-[var(--blue)]">.dev</span>
        </span>
      </div>

      {/* Nav links */}
      <div className="hidden md:flex gap-1 bg-[var(--ink2)] border border-[var(--line)] rounded-[4px] p-1">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="font-mono text-[11px] text-[var(--mute)] no-underline px-[14px] py-[6px] rounded-[2px] tracking-wide transition-all duration-200 hover:text-[var(--paper)] hover:bg-[rgba(79,163,227,0.12)]"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Badge */}
      <div className="flex items-center gap-[6px] bg-[rgba(255,122,51,0.1)] border border-[rgba(255,122,51,0.35)] text-[var(--signal)] font-mono text-[10px] font-medium px-[10px] py-[6px] rounded-[3px] tracking-wide">
        <span className="w-[5px] h-[5px] rounded-full bg-[var(--signal)] animate-pulse-dot" />
        OPEN TO WORK
      </div>
    </nav>
  );
}

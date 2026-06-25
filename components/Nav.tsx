"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // label = teks yang ditampilkan, href = section id yang dituju
  const navLinks = [
    { label: "Profil", href: "#profil" },
    { label: "Karir", href: "#karir" },
    { label: "Proyek", href: "#proyek" },
    { label: "Desain", href: "#graphic-design" },
    { label: "Kontak", href: "#contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 flex justify-between items-center px-11 py-[22px] transition-all duration-300 ${
        scrolled
          ? "bg-[#07080f]/90 backdrop-blur-md border-b border-[var(--border)]"
          : "border-b border-[var(--border)]"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-[10px]">
        <div className="w-7 h-7 rounded-[6px] bg-[var(--violet)] flex items-center justify-center flex-shrink-0">
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="2,10 5,4 7,8 9,6 12,10" />
          </svg>
        </div>
        <span className="text-sm font-bold tracking-wide">
          Syaharani Nurulita
        </span>
      </div>

      {/* Nav links */}
      <div className="flex gap-1 bg-[var(--bg2)] border border-[var(--border)] rounded-3xl p-1">
        {navLinks.map(({ label, href }) => (
          <a
            key={href}
            href={href}
            className="text-xs text-[var(--muted)] no-underline px-[14px] py-[5px] rounded-[20px] tracking-wide transition-all duration-200 hover:text-[var(--text)] hover:bg-[rgba(124,111,247,0.15)]"
          >
            {label}
          </a>
        ))}
      </div>

      {/* Badge */}
      <div className="bg-[var(--lime)] text-[#0a0a00] text-[11px] font-bold px-3 py-[5px] rounded-[20px] tracking-wide">
        Open to work
      </div>
    </nav>
  );
}

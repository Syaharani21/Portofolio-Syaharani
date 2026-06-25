"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const roles = [
  "Web Developer",
  "Game Programmer",
  "Graphic Designer",
  "IT Enthusiast",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const target = roles[roleIdx];
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          60,
        );
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIdx((i) => (i + 1) % roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section
      id="profil"
      className="relative z-10 px-11 pt-[72px] pb-14 grid grid-cols-[1fr_300px] md:grid-cols-[1fr_300px] grid-cols-1 gap-12 items-start"
    >
      {/* Left */}
      <div>
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="w-[6px] h-[6px] rounded-full bg-[var(--lime)] animate-pulse-dot" />
          <span className="text-[11px] text-[var(--muted2)] tracking-[1.2px] uppercase font-medium">
            Available · Jakarta, ID · She/Her
          </span>
        </div>

        {/* Name */}
        <h1 className="font-serif-display text-[66px] leading-[0.97] tracking-[-1.5px] mb-2 font-normal">
          Syaharani
          <span
            className="block italic"
            style={{
              color: "transparent",
              WebkitTextStroke: "1.5px var(--violet)",
            }}
          >
            Nurulita
          </span>
          <span className="block text-[var(--lime)]">.</span>
        </h1>

        {/* Typewriter */}
        <div className="flex items-center gap-1 my-5 h-8">
          <span className="text-lg font-semibold text-[var(--violet)]">
            {displayed}
          </span>
          <span className="w-[2px] h-5 bg-[var(--violet)] animate-blink" />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--muted2)] leading-[1.75] max-w-[400px] mb-9 font-normal">
          Final-year IT student dengan trifecta langka —{" "}
          <strong className="text-[var(--text)] font-semibold">
            enterprise IT governance
          </strong>{" "}
          di Kemenlu RI,{" "}
          <strong className="text-[var(--text)] font-semibold">
            game programming
          </strong>{" "}
          Unity/C#, dan{" "}
          <strong className="text-[var(--text)] font-semibold">
            full-stack web
          </strong>
          . GPA 3.68 · BNSP Certified.
        </p>

        {/* CTA */}
        <div className="flex gap-[10px] items-center flex-wrap">
          <a
            href="#proyek"
            className="bg-[var(--lime)] text-[#0a0a00] px-6 py-[11px] rounded-[6px] text-[13px] font-bold tracking-wide no-underline transition-colors hover:bg-[var(--lime2)] active:scale-[0.97]"
          >
            Lihat proyek →
          </a>
          <a
            href="/cv-syaharani.pdf"
            className="flex items-center gap-[6px] text-[var(--muted2)] px-6 py-[11px] rounded-[6px] text-[13px] font-medium border border-[var(--borderl)] no-underline transition-all hover:text-[var(--text)] hover:border-[var(--violet)]"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Unduh CV
          </a>
        </div>
      </div>

      {/* Right — ID Card */}
      <div>
        <div className="bg-[var(--bg2)] border border-[var(--borderl)] rounded-[20px] p-6 relative overflow-hidden">
          {/* Shine */}
          <div className="absolute top-0 left-0 right-0 h-px shine-bar" />

          {/* Avatar — FIX: parent harus relative+overflow-hidden, hapus teks "SN" */}
          <div
            className="relative w-16 h-16 rounded-[14px] overflow-hidden mb-[14px]"
            style={{
              background:
                "linear-gradient(135deg, var(--violet2), var(--violet))",
            }}
          >
            <Image
              src="/foto-profil.jpg"
              alt="Foto Syaharani Nurulita"
              fill
              className="object-cover"
            />
          </div>

          <div className="text-base font-bold mb-[2px]">Syaharani Nurulita</div>
          <div className="text-xs text-[var(--muted2)] mb-4 leading-[1.5]">
            IT Student · Web Dev · Game Programmer
            <br />
            Graphic Designer
          </div>

          <div className="h-px bg-[var(--border)] mb-4" />

          {[
            { k: "Universitas", v: "UBSI", color: "" },
            { k: "IPK", v: "3.68 / 4.00", color: "text-[var(--lime)]" },
            { k: "Status", v: "Semester Akhir", color: "text-[var(--lime)]" },
            { k: "Sertifikasi", v: "BNSP Certified", color: "" },
          ].map(({ k, v, color }) => (
            <div
              key={k}
              className="flex justify-between items-center mb-2 last:mb-0"
            >
              <span className="text-[11px] text-[var(--muted)] uppercase tracking-wide font-bold">
                {k}
              </span>
              <span
                className={`text-xs font-semibold ${color || "text-[var(--text)]"}`}
              >
                {v}
              </span>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 border border-[var(--borderl)] rounded-xl overflow-hidden mt-3">
          {[
            { n: "3.68", l: "IPK" },
            { n: "7+", l: "Sertifikat" },
            { n: "29", l: "Skills" },
          ].map(({ n, l }, i) => (
            <div
              key={l}
              className={`py-[14px] px-3 text-center ${i < 2 ? "border-r border-[var(--border)]" : ""}`}
            >
              <div className="font-serif-display text-[26px] text-[var(--violet)] leading-none">
                {n}
              </div>
              <div className="text-[10px] text-[var(--muted)] mt-[3px] uppercase tracking-wide">
                {l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

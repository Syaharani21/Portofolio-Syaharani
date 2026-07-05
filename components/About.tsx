"use client";

import { useEffect, useState } from "react";
import PixelCard from "./PixelCard";
import Image from "next/image";

export default function About() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const chips = [
    { label: "Jakarta, ID" },
    { label: "Open to Work", highlight: true },
  ];

  return (
    <section
      id="about"
      className="relative z-10 px-6 md:px-11 py-16 section-divider"
    >
      <div className="flex items-center gap-[10px] mb-[10px] font-mono">
        <span className="text-[11px] text-[var(--mute)]">FIG.01</span>
        <div className="h-px w-10 bg-[var(--line)]" />
        <span className="text-[11px] text-[var(--blue)] tracking-[1.5px] uppercase">
          About Me
        </span>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-[35%] flex items-center justify-center md:order-2">
          <div
            className={`transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="relative z-20">
              <PixelCard
                className="w-[220px] h-[280px] md:w-[280px] md:h-[360px] relative overflow-visible group"
                gap={0}
                speed={0}
                colors={[]}
                noFocus
              >
                <Image
                  src="/profile.png"
                  alt="Foto Syaharani Nurulita"
                  fill
                  priority
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {mounted && (
                  <div
                    className="absolute left-0 right-0 h-10 pointer-events-none animate-scan-sweep"
                    style={{
                      background:
                        "linear-gradient(180deg, transparent, rgba(79,163,227,0.55), transparent)",
                    }}
                  />
                )}

                <div className="absolute bottom-3 right-3 bg-[var(--signal)] text-[#1a0900] font-mono text-[10px] font-bold px-[10px] py-[4px] rounded-[3px] tracking-wide z-10 shadow-lg shadow-[var(--signal)]/20">
                  SN · VERIFIED
                </div>
              </PixelCard>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[65%] md:order-1">
          <h2 className="font-grotesk text-[36px] md:text-[42px] tracking-[-0.5px] font-semibold leading-none mb-9 text-[var(--paper)]">
            Profil
          </h2>

          <p className="text-[0.95rem] text-white/65 leading-[1.85] mb-6 text-justify">
            I am a final-year Information Technology student (GPA 3.68/4.00)
            passionate about bridging logical problem-solving with scalable
            digital solutions. My background uniquely combines structural IT
            governance, gained during my tenure as an IT Planning & Governance
            Intern at the Ministry of Foreign Affairs of Indonesia, with
            hands-on software engineering capabilities. As a certified Program
            Analyst (LSP-BNSP), I have a strong foundation in system analysis,
            allowing me to translate complex requirements into robust technical
            architectures. Technically, I have a proven track record in both
            full-stack web development and game programming. I successfully
            architected E-Catering a production-ready web platform built with
            PHP (Laravel) and MySQL, fully integrated with Midtrans Payment
            Gateway and Google OAuth 2.0. Furthermore, as an MSIB Batch 7 Game
            Development graduate, I am currently finalizing my academic thesis
            by developing an Adaptive Finite State Machine (FSM) AI system using
            C# and Unity for a 2D platformer game.  {" "}
          </p>

          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <span
                key={c.label}
                className={`text-[0.75rem] px-[13px] py-[6px] border rounded-full tracking-[0.02em] ${
                  c.highlight
                    ? "border-lime/28 text-lime/75"
                    : "border-white/9 text-white/38"
                }`}
              >
                {c.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-[10px] text-[0.63rem] tracking-[0.22em] uppercase text-white/25 mb-[22px]">
      <span className="w-[18px] h-px bg-white/15" />
      {children}
    </div>
  );
}

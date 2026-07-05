"use client";

import { useEffect, useMemo, useState } from "react";
import LiquidEther from "./LiquidEther";
import Image from "next/image";

const roles = ["Software Engineer", "Game Programmer", "IT Enthusiast"];

type TypingPhase = "typing" | "deleting";

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [phase, setPhase] = useState<TypingPhase>("typing");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Defer first state update to avoid sync render in effect.
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const currentRole = useMemo(() => roles[roleIdx] ?? "", [roleIdx]);

  useEffect(() => {
    if (!currentRole) return;

    if (phase === "typing") {
      if (displayed.length < currentRole.length) {
        const t = window.setTimeout(() => {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        }, 60);
        return () => window.clearTimeout(t);
      }
      // Fully typed: pause before starting to delete.
      const t = window.setTimeout(() => setPhase("deleting"), 1800);
      return () => window.clearTimeout(t);
    }

    // deleting
    if (displayed.length > 0) {
      const t = window.setTimeout(() => {
        setDisplayed(displayed.slice(0, -1));
      }, 35);
      return () => window.clearTimeout(t);
    }

    const t = window.setTimeout(() => {
      setRoleIdx((i) => (i + 1) % roles.length);
      setPhase("typing");
    }, 0);
    return () => window.clearTimeout(t);
  }, [displayed, phase, currentRole]);

  return (
    <section
      id="profil"
      className="relative z-10 px-6 md:px-11 pt-24 pb-14 flex items-center overflow-hidden"
    >
      {/* Background: liquid ether layer — subtle, themed, non-interactive */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.28]">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B497CF"]}
          mouseForce={14}
          cursorSize={90}
          isViscous={false}
          resolution={0.5}
          isBounce={false}
          autoDemo
          autoSpeed={0.35}
          autoIntensity={1.4}
          takeoverDuration={0.25}
          autoResumeDelay={2500}
          autoRampDuration={0.6}
        />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12 lg:gap-16">
        {/* Profile image: appears from below on mount without the lanyard effect. */}
        <div className="flex w-full md:w-[35%] items-end justify-center order-first md:order-none">
          <div
            className={`relative w-full max-w-[260px] md:max-w-[360px] aspect-[4/5] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              mounted
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-16 opacity-0 scale-[0.96]"
            }`}
            style={{ transitionDelay: mounted ? "180ms" : "0ms" }}
          >
            <Image
              src="/profile.png"
              alt="Syaharani Nurulita"
              fill
              sizes="(max-width: 768px) 260px, 360px"
              className="object-cover rounded-[24px] shadow-[0_24px_80px_rgba(0,0,0,0.22)]"
            />
          </div>
        </div>

        {/* RIGHT: text & content */}
        <div className="w-full md:w-[65%] flex flex-col items-center md:items-start text-center md:text-left">
          <div className="inline-flex items-center gap-2 mb-6 font-mono">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--signal)] animate-pulse-dot" />
            <span className="text-[11px] text-[var(--mute)] tracking-[1px] uppercase">
              AVAILABLE • JAKARTA, ID • SOFTWARE ENGINEER
            </span>
          </div>

          <h1 className="font-grotesk text-[44px] md:text-[56px] lg:text-[64px] leading-[1.1] tracking-[-1.5px] mb-2 font-semibold text-[var(--paper)]">
            Syaharani Nurulita
            <span className="text-[var(--signal)]">.</span>
          </h1>

          <div className="flex items-center justify-center md:justify-start gap-2 my-4 h-8 font-mono">
            <span className="text-[var(--mute)] text-sm">{">"}</span>
            <span className="text-[15px] font-medium text-[var(--blue)]">
              {displayed}
            </span>
            <span className="w-[7px] h-4 bg-[var(--blue)] animate-blink" />
          </div>

          <p className="text-[15px] text-[var(--mute)] leading-[1.75] max-w-[540px] mb-8">
            Final-year Information Technology student passionate about backend
            development and software engineering.
          </p>

          <div className="grid grid-cols-3 border border-[var(--line)] rounded-[6px] overflow-hidden bg-[var(--ink2)] h-fit self-start mb-8 ">
            {[
              { n: "3.68", l: "IPK" },
              { n: "7+", l: "Sertifikat" },
              { n: "19", l: "Skills" },
            ].map(({ n, l }, i) => (
              <div
                key={l}
                className={`py-[16px] px-2 text-center ${
                  i < 2 ? "border-r border-[var(--line)]" : ""
                }`}
              >
                <div className="font-grotesk text-[24px] text-[var(--blue)] leading-none font-semibold">
                  {n}
                </div>
                <div className="font-mono text-[9px] text-[var(--mute)] mt-1 uppercase tracking-wide">
                  {l}
                </div>
              </div>
            ))}
          </div>
          <div className="flex gap-3 items-center flex-wrap justify-center md:justify-start mb-12">
            <a
              href="#proyek"
              className="bg-[var(--signal)] text-[#1a0900] px-6 py-[12px] rounded-[3px] text-[13px] font-mono font-semibold tracking-wide no-underline transition-all hover:brightness-110 active:scale-[0.97]"
            >
              lihat_proyek() →
            </a>
            <a
              href="/cv-syaharani.pdf"
              className="flex items-center gap-[6px] text-[var(--mute)] px-6 py-[12px] rounded-[3px] text-[13px] font-mono font-medium border border-[var(--line)] no-underline transition-all hover:text-[var(--paper)] hover:border-[var(--blue)]"
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
              unduh_cv.pdf
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

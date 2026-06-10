"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function DynamicPortfolio() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Efek kursor dinamis (Glow mengikuti mouse)
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Varian Animasi Framer Motion
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-cyan-500 selection:text-white overflow-hidden relative flex flex-col">
      {/* Background Dinamis yang Mengikuti Kursor */}
      <motion.div
        className="fixed top-0 left-0 w-[600px] h-[600px] bg-cyan-600/10 rounded-full mix-blend-screen filter blur-[150px] pointer-events-none z-0"
        animate={{
          x: mousePosition.x - 300,
          y: mousePosition.y - 300,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
      <div className="fixed top-[20%] right-[-10%] w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full mix-blend-screen filter blur-[120px] pointer-events-none z-0"></div>

      {/* NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full p-6 md:px-12 flex justify-between items-center backdrop-blur-md bg-[#050505]/50 sticky top-0 z-50 border-b border-white/5"
      >
        <div className="font-bold text-xl tracking-tighter text-white flex items-center gap-2">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="w-4 h-4 rounded-full border-2 border-cyan-400 border-t-transparent"
          />
          SYAHARANI<span className="text-cyan-400">.</span>NURULITA
        </div>

        <div className="flex gap-6 text-sm font-medium">
          <a
            href="https://github.com/syaharani21"
            className="hover:text-cyan-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/syaharani-nurulita"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:syaharani2102@email.com"
            className="hover:text-cyan-400 transition-colors"
          >
            Email
          </a>
        </div>
      </motion.nav>

      <div className="max-w-5xl mx-auto px-6 pt-20 pb-20 relative z-10 flex-grow">
        {/* HERO SECTION DENGAN GAMBAR PROFIL */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-32 mt-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12"
        >
          {/* Teks Hero */}
          <div className="flex-1">
            <motion.div
              variants={fadeIn}
              className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6 backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2 inline-block mr-2 -translate-y-[1px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Available for Hire
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6"
            >
              Building Digital <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500">
                Experiences.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mb-8 leading-relaxed"
            >
              Saya Syaharani, seorang{" "}
              <strong className="text-white font-semibold">
                Software Engineer Intern & Full-Stack Developer
              </strong>
              . Menggabungkan logika komputasi dengan antarmuka yang dinamis dan
              interaktif.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="flex flex-wrap gap-4 font-mono text-sm"
            >
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md flex items-center gap-2">
                <span className="text-cyan-400">📍</span> Jakarta, ID
              </div>
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-md flex items-center gap-2">
                <span className="text-fuchsia-400">🎓</span> IPK: 3.68/4.00
              </div>
            </motion.div>
          </div>

          {/* Gambar Profil */}
          <motion.div
            variants={fadeIn}
            className="relative w-56 h-56 md:w-72 md:h-72 shrink-0 group"
          >
            {/* Efek Glow di belakang gambar */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-fuchsia-500 rounded-full blur-[40px] opacity-40 group-hover:opacity-70 transition-opacity duration-500"></div>

            <div className="relative w-full h-full rounded-full p-1 bg-gradient-to-tr from-cyan-500 to-fuchsia-500">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#111] border-4 border-[#050505]">
                <img
                  src="/foto-profil.jpg"
                  alt="Syaharani Nurulita"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* PROFILE & EXPERIENCE (Bento Grid Dinamis) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"
        >
          {/* Tentang Saya */}
          <motion.div
            variants={fadeIn}
            whileHover={{ scale: 1.02 }}
            className="bg-[#111] border border-white/10 p-8 rounded-3xl hover:border-cyan-500/50 transition-colors group flex flex-col justify-center"
          >
            <h2 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
              Profil Profesional
            </h2>
            <p className="text-slate-400 leading-relaxed text-justify">
              Mahasiswa semester 8 Teknologi Informasi dengan ketertarikan kuat
              dalam rekayasa perangkat lunak dan pengembangan sistem interaktif.
              Berpengalaman membangun aplikasi web *full-stack* dengan integrasi
              *payment gateway* (Midtrans) serta merancang logika komputasi
              kompleks untuk *game development*. Siap berkontribusi mendukung
              pengembangan solusi digital perusahaan.
            </p>
          </motion.div>

          {/* Pengalaman */}
          <motion.div
            variants={fadeIn}
            className="bg-[#111] border border-white/10 p-8 rounded-3xl space-y-6"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Experience</h2>

            {/* Exp 1 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="relative pl-6 border-l-2 border-cyan-500/50 transition-transform cursor-default"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#111] border-2 border-cyan-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-white">
                Pusdatin Kemenlu RI
              </h3>
              <p className="text-cyan-400 text-sm font-mono mb-2">
                Sept – Des 2025
              </p>
              <p className="text-slate-400 text-sm">
                Internship – Rencana & Tata Kelola TI. Mendokumentasikan &
                mengadministrasi sistem TI skala enterprise.
              </p>
            </motion.div>

            {/* Exp 2 */}
            <motion.div
              whileHover={{ x: 10 }}
              className="relative pl-6 border-l-2 border-fuchsia-500/50 transition-transform cursor-default"
            >
              <div className="absolute -left-[9px] top-1 w-4 h-4 bg-[#111] border-2 border-fuchsia-500 rounded-full"></div>
              <h3 className="text-lg font-bold text-white">MSIB Batch 7</h3>
              <p className="text-fuchsia-400 text-sm font-mono mb-2">
                Sept – Des 2024
              </p>
              <p className="text-slate-400 text-sm">
                Game Development Track. Merancang logika sistem, QA
                fungsionalitas, dan kolaborasi dalam siklus pengembangan
                *game/software*.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* SHOWCASE GAME 2D */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-6"
        >
          <div className="bg-[#111] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            {/* Ambient Game Light */}
            <div className="absolute -top-32 -left-32 w-96 h-96 bg-fuchsia-600/20 rounded-full blur-[100px] group-hover:bg-fuchsia-500/30 transition-all duration-700 pointer-events-none"></div>

            <div className="flex flex-col md:flex-row gap-10 items-center relative z-10">
              {/* Game Info */}
              <div className="w-full md:w-1/3">
                <span className="px-3 py-1 bg-fuchsia-500/20 text-fuchsia-400 text-xs font-bold uppercase rounded-full tracking-wider mb-4 inline-block">
                  🎮 Playable Project
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  2D <span className="text-fuchsia-400">Game</span> Project
                </h2>
                <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                  Sebuah proyek interaktif yang menguji computational thinking
                  dan perancangan logika sistem. Dikembangkan selama mengikuti
                  program <strong>MSIB Batch 7 (Game Development Track)</strong>
                  . Menampilkan implementasi *physics*, *collision detection*,
                  dan pengujian fungsionalitas (QA) secara profesional.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {["Logic Design", "QA Testing", "Game Mechanics"].map(
                    (tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 text-xs rounded-md font-mono"
                      >
                        {tag}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {/* Game Container (Iframe) */}
              <div className="w-full md:w-2/3">
                <div className="relative w-full aspect-video rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-[0_0_30px_rgba(217,70,239,0.15)] overflow-hidden flex items-center justify-center group-hover:border-fuchsia-500/50 transition-colors">
                  <iframe
                    src="https://itch.io/embed/3117865?color=050505"
                    title="Verdant Chronicles 2D Game Project"
                    className="absolute inset-0 w-full h-full border-0 z-10"
                    allowFullScreen
                    allow="autoplay; fullscreen; keyboard-control"
                  ></iframe>
                </div>

                {/* Console Buttons Decoration */}
                <div className="flex justify-center gap-4 mt-4">
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-700"></div>
                  <div className="w-3 h-3 rounded-full bg-fuchsia-500 shadow-[0_0_10px_#d946ef]"></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* PROYEK WEB (E-CATERING) */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mb-6"
        >
          <div className="bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-white/10 p-8 md:p-12 rounded-3xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] group-hover:bg-cyan-500/20 transition-all duration-500"></div>

            <div className="relative z-10">
              <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs font-bold uppercase rounded-full tracking-wider mb-4 inline-block">
                Featured Web App
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                E-Catering Platform<span className="text-cyan-500">.</span>
              </h2>
              <p className="text-slate-400 mb-8 max-w-2xl text-lg">
                Membangun aplikasi web e-commerce catering end-to-end dengan
                fitur pemesanan, manajemen menu, dan dashboard admin menggunakan
                PHP (Laravel), JavaScript, HTML, CSS, dan MySQL.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-xl">
                    💳
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    Payment Integration
                  </h3>
                  <p className="text-sm text-slate-400">
                    Mengintegrasikan Midtrans Payment Gateway untuk transaksi
                    online aman & webhook real-time.
                  </p>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-sm"
                >
                  <div className="w-10 h-10 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-4 text-xl">
                    🔐
                  </div>
                  <h3 className="text-white font-bold mb-2">
                    Secure Authentication
                  </h3>
                  <p className="text-sm text-slate-400">
                    Mengimplementasikan Google OAuth untuk login yang efisien
                    dan UX yang signifikan.
                  </p>
                </motion.div>
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/Syaharani21/caterify"
                className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-bold hover:bg-cyan-400 transition-colors"
              >
                Inspect Source Code ➔
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* SKILLS MARQUEE / STAGGERED PILLS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="bg-[#111] border border-white/10 p-8 rounded-3xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Tech Stack & Certifications
          </h2>
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "PHP (Laravel)",
              "JavaScript (ES6+)",
              "SQL",
              "HTML/CSS",
              "Tailwind CSS",
              "Midtrans API",
              "Git",
              "System Design",
              "Game Logic",
            ].map((skill, i) => (
              <motion.span
                key={skill}
                variants={fadeIn}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "rgba(6, 182, 212, 0.2)",
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  color: "#22d3ee",
                }}
                className="px-4 py-2 bg-white/5 border border-white/10 text-slate-300 rounded-full text-sm font-medium transition-colors cursor-pointer"
              >
                {skill}
              </motion.span>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-white/10">
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-xs text-cyan-400 font-mono mb-1">Juli 2025</p>
              <p className="text-sm text-white font-bold">
                LSP / BNSP – Analis Program
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-xs text-cyan-400 font-mono mb-1">Des 2024</p>
              <p className="text-sm text-white font-bold">
                MSIB Batch 7 Graduate
              </p>
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/5">
              <p className="text-xs text-cyan-400 font-mono mb-1">Juni 2024</p>
              <p className="text-sm text-white font-bold">
                Bootcamp Software Dev
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* FOOTER - CUSTOM BUATAN SENDIRI */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full border-t border-white/10 py-10 bg-[#050505]/80 backdrop-blur-sm relative z-10"
      >
        <div className="max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center gap-3">
          <p className="text-slate-400 font-medium text-sm md:text-base">
            Designed & Built with{" "}
            <span className="text-fuchsia-500 animate-pulse inline-block mx-1"></span>{" "}
            by{" "}
            <span className="text-cyan-400 font-bold hover:text-fuchsia-400 transition-colors cursor-pointer">
              Syaharani Nurulita
            </span>
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs font-mono text-slate-600">
            <span>© 2026</span>
            <span className="hidden md:inline">•</span>
            <span>Next.js</span>
            <span className="hidden md:inline">•</span>
            <span>Tailwind CSS</span>
            <span className="hidden md:inline">•</span>
            <span>Framer Motion</span>
          </div>
        </div>
      </motion.footer>
    </main>
  );
}

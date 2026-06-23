import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Thesis from "@/components/Thesis";
import GraphicDesign from '@/components/GraphicDesign';
import TechStack from "@/components/TechStack";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SectionLabel } from "@/components/About";

const stats = [
  { n: "3.68", sup: "/4", label: "Indeks Prestasi Kumulatif" },
  { n: "7", sup: "+", label: "Lisensi & Sertifikasi" },
  { n: "2", sup: "×", label: "Program MSIB / Internship" },
  { n: "29", sup: "", label: "Skills Terverifikasi LinkedIn" },
];

function Stats() {
  return (
    <div className="cell flex flex-col justify-between">
      <SectionLabel>Angka</SectionLabel>
      {stats.map((s) => (
        <div key={s.label} className="py-[18px] border-b border-white/[0.06] last:border-none">
          <div className="font-syne font-extrabold text-[2.8rem] leading-none tracking-tighter text-paper">
            {s.n}
            <span className="text-lime text-[1.5rem]">{s.sup}</span>
          </div>
          <div className="text-[0.68rem] tracking-[0.1em] uppercase text-white/20 mt-1">{s.label}</div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen" style={{ background: "var(--ink)", color: "var(--paper)", fontFamily: "'Space Grotesk', sans-serif" }}>
      <Nav />
      <Hero />
      <Ticker />
      <div className="bento-grid">
        <About />
        <Stats />
        <Experience />
        <Projects />
        <Thesis />
        <GraphicDesign/>
        <TechStack />
        <Certifications />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}

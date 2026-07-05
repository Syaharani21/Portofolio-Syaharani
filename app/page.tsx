import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Syaharani Nurulita — Portfolio",
  description:
    "Final-Year IT Student | Software Engineer | Game Developer | Ex-IT Intern @ Kemenlu RI | MSIB Batch 7 Graduate",
};

export default function Home() {
  return (
    <main className="bg-[var(--ink)] text-[var(--paper)] font-inter overflow-x-hidden">
      {/* Corner registration marks — blueprint dossier detail */}
      <div className="fixed inset-4 pointer-events-none z-0 hidden md:block">
        <div className="absolute top-0 left-0 w-3 h-3 border-l border-t border-[var(--line)]" />
        <div className="absolute top-0 right-0 w-3 h-3 border-r border-t border-[var(--line)]" />
        <div className="absolute bottom-0 left-0 w-3 h-3 border-l border-b border-[var(--line)]" />
        <div className="absolute bottom-0 right-0 w-3 h-3 border-r border-b border-[var(--line)]" />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

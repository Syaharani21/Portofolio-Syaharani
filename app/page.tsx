import Navbar from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import GraphicDesign from "@/components/GraphicDesign";
import Skills from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Syaharani Nurulita — Portfolio",
  description:
    "Final-Year IT Student | Software Engineer | Game Developer | Ex-ItT Intern @ Kemenlu RI | MSIB Batch 7 Graduate",
};

export default function Home() {
  return (
    <main className="bg-[#07080f] text-[#eeeef8] font-syne overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0">
        <div
          className="absolute w-[500px] h-[500px] rounded-full top-[-150px] left-[-100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(124,111,247,0.10) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full top-[200px] right-[-80px]"
          style={{
            background:
              "radial-gradient(circle, rgba(200,240,96,0.06) 0%, transparent 65%)",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full bottom-[200px] left-[20%]"
          style={{
            background:
              "radial-gradient(circle, rgba(240,112,176,0.06) 0%, transparent 65%)",
          }}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Marquee />
        <Experience />
        <Projects />
        <GraphicDesign />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

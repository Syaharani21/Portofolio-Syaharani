export default function About() {
  const chips = [
    { label: "GPA 3.68 / 4.00", highlight: true },
    { label: "BNSP Certified", highlight: true },
    { label: "Semester Akhir" },
    { label: "Jakarta, ID" },
    { label: "She/Her" },
    { label: "Open to Work", highlight: true },
  ];
  return (
    <div className="cell" id="about">
      <SectionLabel>Profil</SectionLabel>
      <p className="text-[0.88rem] text-white/55 leading-[1.85] mb-6">
        Mahasiswa Teknologi Informasi semester akhir dengan ketertarikan kuat di rekayasa perangkat lunak
        dan sistem interaktif. Background unik yang menggabungkan{" "}
        <em className="not-italic text-paper font-medium">IT governance enterprise</em> (Kemenlu RI)
        dengan <em className="not-italic text-paper font-medium">full-stack web development</em> dan{" "}
        <em className="not-italic text-paper font-medium">game programming</em>. Certified Program
        Analyst oleh BNSP — terbiasa menerjemahkan kebutuhan kompleks menjadi arsitektur teknis yang
        solid.
      </p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c.label}
            className={`text-[0.7rem] px-[13px] py-[5px] border rounded-full tracking-[0.02em] ${
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

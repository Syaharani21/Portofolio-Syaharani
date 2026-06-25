import Image from "next/image";

const designProjects = [
  {
    title: "Pahlawan Lingkungan Art Exhibition",
    role: "Graphic Designer & Promotion Coordinator",
    description:
      "Mengembangkan identitas visual, kampanye poster, infografis, dan naskah video promosi untuk pameran seni daur ulang.",
    tools: "Canva",
    image: "/images/pahlawan-lingkungan.png", // Sesuaikan nama gambar di folder public
  },
  {
    title: "Digital Media & Content Creation",
    role: "Graphic Designer",
    description:
      "Merancang aset visual profesional untuk presentasi, elemen antarmuka pengguna (UI), dan dokumentasi acara.",
    tools: "Canva",
    image: "/images/VB Knowledge Sharing.png", // Sesuaikan nama gambar di folder public
  },
];

export default function GraphicDesign() {
  return (
    <section className="py-20 px-8 max-w-6xl mx-auto" id="graphic-design">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          🎨 Graphic Design
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Beberapa karya desain visual dan media promosi digital yang pernah
          saya buat.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {designProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 group"
          >
            {/* Gambar Desain */}
            <div className="relative h-64 md:h-72 w-full bg-gray-100 dark:bg-gray-700 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Detail Desain */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {project.title}
              </h3>
              <p className="text-sm text-teal-600 dark:text-teal-400 font-semibold mb-3">
                Role: {project.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="inline-block px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-semibold rounded-md">
                Tools: {project.tools}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

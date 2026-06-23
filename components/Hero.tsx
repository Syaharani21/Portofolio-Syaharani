import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between py-16 px-8 max-w-6xl mx-auto min-h-[80vh]">
      {/* Bagian Teks */}
      <div className="md:w-1/2 text-center md:text-left mt-10 md:mt-0">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">
          Hi, I&apos;m{" "}
          <span className="text-teal-600 dark:text-teal-400">
            Syaharani Nurulita
          </span>{" "}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 font-medium mb-6">
          IT Enthusiast | Game Developer | Web Developer | Graphic Designer
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-teal-600 text-white rounded-full font-semibold hover:bg-teal-700 transition"
          >
            Lihat Portfolio
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Hubungi Saya
          </a>
        </div>
      </div>

      {/* Bagian Foto Hero Tanpa Background */}
      <div className="md:w-1/2 flex justify-center">
        {/* Lingkaran background estetis di belakang foto */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-tr from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 flex items-center justify-center shadow-2xl">
          <Image
            src="/foto-profil.jpg" // Pastikan file ini ada di folder public/
            alt="Syaharani Nurulita"
            fill
            className="object-contain drop-shadow-xl p-2"
            priority
          />
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";

const apps = [
  {
    name: "Netflix",
    logo: "/apps/Netflix.png",
  },
  {
    name: "Spotify",
    logo: "/apps/Spotify_icon.svg",
  },
  {
    name: "Disney+",
    logo: "/apps/Disney+.png",
  },
  {
    name: "CapCut",
    logo: "/apps/Capcut.png",
  },
  {
    name: "Canva",
    logo: "/apps/Canva.svg",
  },
  {
    name: "YouTube",
    logo: "/apps/YouTube.png",
  },
  
  {
    name: "ChatGPT",
    logo: "/apps/ChatGPT.svg",
  },

  {
    name: "Iqiyi",
    logo: "/apps/iQIYI.svg",
  }
];

export default function Apps() {
  return (
    <section className="py-24 px-6 bg-gray-50" id="apps">
      <h2 className="text-4xl font-bold text-center mb-14">
        Available Apps
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {apps.map((app, index) => (
          <div
            key={index}
            className="
                bg-white
                p-8
                rounded-2xl
                text-center
                border
                border-gray-200
                shadow-sm
                hover:border-blue-500
                hover:-translate-y-2
                hover:shadow-xl
                transition
                duration-300
                hover:-translate-y-2
                transition
                duration-300
            "
          >
            <Image
            src={app.logo}
            alt={app.name}
            width={64}
            height={64}
            priority // Menambahkan prioritas load
            className="w-16 h-16 object-contain mx-auto mb-4"
            // Tambahkan unoptimized jika kamu pakai format SVG yang kompleks di Vercel
            unoptimized={app.logo.endsWith('.svg')} 
            />
            <h3 className="text-xl font-bold">{app.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
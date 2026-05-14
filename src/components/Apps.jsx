const apps = [
  {
    name: "Netflix",
    emoji: "🎬",
  },
  {
    name: "Spotify",
    emoji: "🎵",
  },
  {
    name: "Disney+",
    emoji: "⭐",
  },
  {
    name: "CapCut",
    emoji: "✂️",
  },
  {
    name: "Canva",
    emoji: "🎨",
  },
  {
    name: "YouTube",
    emoji: "▶️",
  },
  {
    name: "Wink",
    emoji: "🔥",
  },
  {
    name: "Wibuku",
    emoji: "📚",
  },
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
            <div className="text-4xl mb-4">{app.emoji}</div>
            <h3 className="text-xl font-bold">{app.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
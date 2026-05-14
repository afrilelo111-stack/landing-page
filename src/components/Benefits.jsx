import {
  ShieldCheck,
  BadgeCheck,
  MessageCircle,
  Zap,
} from "lucide-react";

const benefits = [
  {
    title: "Full Garansi",
    icon: <ShieldCheck size={40} />,
  },
  {
    title: "100% Aman",
    icon: <BadgeCheck size={40} />,
  },
  {
    title: "Fast Response",
    icon: <Zap size={40} />,
  },
  {
    title: "Bisa Tanya Dulu",
    icon: <MessageCircle size={40} />,
  },
];

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <h2 className="text-4xl font-bold text-center mb-14">
        Kenapa Pilih Kami?
      </h2>

      <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {benefits.map((item, index) => (
          <div
            key={index}
            className="
              bg-blue-50
              border
              border-blue-200
              rounded-2xl
              p-8
              text-center
              hover:-translate-y-2
              hover:shadow-xl
              transition
              duration-300
            "
          >
            <div className="flex justify-center text-blue-600 mb-5">
              {item.icon}
            </div>

            <p className="text-lg font-semibold">
              {item.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
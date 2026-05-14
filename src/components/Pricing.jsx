import { Check } from "lucide-react";


const pricingList = [
  {
    name: "Netflix 1U1P",
    price: "35K",
    desc: "1 Bulan Full Garansi",
  },
  {
    name: "YouTube Premium",
    price: "15K - 25K",
    desc: "Family / Individual",
  },
  {
    name: "CapCut Pro",
    price: "18K",
    desc: "Premium Access",
  },
];

export default function Pricing() {
  return (
    <section className="py-24 px-6" id="pricing">
        <div className="mt-6 flex items-center gap-2 text-blue-600">
            <Check size={18} />
            <span>Trusted Premium Access</span>
        </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {pricingList.map((item, index) => (
          <div
            key={index}
            className="bg-blue-500/10 border border-blue-500 rounded-2xl p-8 hover:border-blue-400 transition"
          >
            <h3 className="text-2xl font-bold mb-4">
              {item.name}
            </h3>

            <p className="text-4xl font-bold text-blue-600 mb-4">
              {item.price}
            </p>

            <p className="text-blue-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
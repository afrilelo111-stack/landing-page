"use client";


export default function Hero() {
  return (
    <section className="relative overflow-hidden text-center py-32 px-6">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full"></div>

      <div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >

        <p className="text-blue-600 font-semibold mb-4">
          PREMIUM APPS STORE
        </p>

        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          Sell Premium
          <span className="text-blue-600"> Apps</span>
        </h1>

        <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
          Open order aplikasi premium murah,
          aman, full garansi, dan fast respon.
        </p>

        <div className="flex justify-center gap-4 mt-10 flex-wrap">

          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-xl font-semibold text-white">
            Order Sekarang
          </button>

          <button className="border border-gray-300 hover:border-blue-500 transition px-8 py-4 rounded-xl">
            Lihat Pricelist
          </button>

        </div>

      </div>
    </section>
  );
}
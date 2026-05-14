export default function CTA() {
  return (
    <section className="py-28 px-6 text-center">

      <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/20 to-blue-700/20 border border-blue-500 rounded-3xl p-12">

        <h2 className="text-4xl md:text-5xl font-black mb-6">
          Siap Order?
        </h2>

        <p className="text-black-300 mb-8 text-lg">
          Chat sekarang untuk order aplikasi premium favoritmu.
        </p>

        <a
            href="https://wa.me/6281234567890"
            target="_blank"
            className="
                inline-block
                bg-blue-600
                hover:bg-blue-700
                transition
                px-8
                py-4
                rounded-xl
                font-bold
                text-white
            "
            >
            Chat WhatsApp
        </a>

      </div>
    </section>
  );
}
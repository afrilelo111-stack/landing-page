import { MessageCircle } from "lucide-react"; // Opsional: jika pakai lucide-react

export default function CTA() {
  return (
    <section className="py-28 px-6" id="contact">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-white border border-blue-100 shadow-xl shadow-blue-500/10 rounded-[2rem] p-8 md:p-16 text-center">
        
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Siap Order <span className="text-blue-600 underline decoration-blue-200">Sekarang?</span>
        </h2>

        <p className="text-slate-600 mb-10 text-lg max-w-lg mx-auto leading-relaxed">
          Dapatkan aplikasi premium favoritmu dengan proses cepat. Hubungi admin kami di bawah ini:
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Tombol Admin 1 */}
          <a
            href="https://wa.me/6281111111111"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 px-10 py-4 rounded-2xl font-bold text-white shadow-lg shadow-blue-200"
          >
            <span>Chat Leon</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          {/* Tombol Admin 2 */}
          <a
            href="https://wa.me/6282222222222"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 w-full sm:w-auto bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 hover:scale-105 active:scale-95 transition-all duration-300 px-10 py-4 rounded-2xl font-bold"
          >
            <span>Chat Shiro</span>
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">👋</span>
          </a>
        </div>

        <p className="mt-8 text-sm text-slate-400 italic">
          *Admin online 24/7 siap melayani kebutuhanmu.
        </p>
      </div>
    </section>
  );
}
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col">
      <Header />
      <section className="flex-1 flex items-center">
        <div className="mx-auto max-w-[1280px] w-full px-5 sm:px-6 md:px-8 py-16">
          <div className="border border-stroke bg-surface p-8 sm:p-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Error / 404
              </span>
              <span className="h-px w-10 sm:w-16 bg-stroke" aria-hidden="true" />
            </div>
            <h1 className="font-sans text-[48px] sm:text-[72px] md:text-[96px] font-extrabold leading-[0.9] tracking-tightish text-ink">
              4<span className="text-primary">0</span>4
            </h1>
            <p className="mt-4 max-w-[480px] text-[13px] leading-relaxed text-muted">
              Halaman yang kamu cari tidak ada di direktori. Kembali ke beranda
              untuk melihat semua situs streaming.
            </p>
            <a
              href="/"
              className="mt-6 inline-flex items-center gap-2 bg-primary text-background px-5 py-3 font-semibold text-[12px] uppercase tracking-[0.12em] transition-transform duration-snappy hover:-translate-y-[1px]"
            >
              ← Kembali ke Beranda
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

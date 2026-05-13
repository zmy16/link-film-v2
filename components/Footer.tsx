export default function Footer() {
  return (
    <footer className="border-t border-stroke bg-background">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            © 2026 Golden Movie Hub
          </div>
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
            Streaming Directory / v1.0
          </div>
        </div>
      </div>
    </footer>
  );
}

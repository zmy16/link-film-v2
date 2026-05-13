import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-stroke bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 sm:px-6 md:px-8 py-4">
        <a
          href="/"
          className="flex items-center gap-3 min-w-0"
          aria-label="Golden Movie Hub — Home"
        >
          <Logo size={36} />
          <div className="flex flex-col leading-tight min-w-0">
            <span className="truncate text-[15px] sm:text-[18px] font-extrabold tracking-tightish text-primary">
              Golden Movie Hub
            </span>
            <span className="hidden sm:block truncate font-mono text-[9px] uppercase tracking-[0.22em] text-muted">
              Streaming Directory / v1.0
            </span>
          </div>
        </a>
      </div>
    </header>
  );
}

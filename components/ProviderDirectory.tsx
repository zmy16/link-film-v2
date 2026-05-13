import Image, { type StaticImageData } from "next/image";
import { IconPlay, IconDot, IconServer, IconExternal } from "./Icons";
import rebahinLogo from "@/public/logos/rebahin.png";
import kitanontonLogo from "@/public/logos/kitanonton.png";
import ngefilm21Logo from "@/public/logos/ngefilm21.png";
import layarkaca21Logo from "@/public/logos/layarkaca21.png";
import idlixLogo from "@/public/logos/idlix.png";

type Provider = {
  name: string;
  tagline: string;
  quality: "HD" | "Full HD" | "4K";
  url: string;
  glyph: "clap" | "play" | "cam" | "monitor" | "plus";
  logo?: StaticImageData;
};

type Group = {
  code: string;
  flag: string;
  title: string;
  tag: string;
  items: Provider[];
};

const GROUPS: Group[] = [
  {
    code: "ID",
    flag: "🇮🇩",
    title: "Film Indonesia",
    tag: "ID INDO",
    items: [
      { name: "Rebahin",     tagline: "Film & series Indonesia dan luar negeri dengan subtitle.", quality: "HD", url: "https://rebahinxxi3.online/", glyph: "clap", logo: rebahinLogo },
      { name: "Kita Nonton",  tagline: "Film & series Indonesia terlengkap dan gratis.",          quality: "HD", url: "https://kitanonton2.today/",   glyph: "play", logo: kitanontonLogo },
      { name: "NgeFilm21",    tagline: "Film & series Indonesia berkualitas tinggi.",             quality: "HD", url: "https://ngefilm21.pw/",        glyph: "cam",  logo: ngefilm21Logo },
    ],
  },
  {
    code: "INT",
    flag: "🌐",
    title: "Film Luar Negeri",
    tag: "INT LUAR NEGERI",
    items: [
      { name: "Layar Kaca 21", tagline: "Film & series luar negeri subtitle Bahasa Indonesia.", quality: "HD", url: "https://lk21.de/",        glyph: "monitor", logo: layarkaca21Logo },
      { name: "IDLIX",         tagline: "Film & series luar negeri terlengkap dengan sub Indo.", quality: "HD", url: "https://idlixian.com/",  glyph: "plus", logo: idlixLogo },
    ],
  },
];

function Glyph({ type }: { type: Provider["glyph"] }) {
  const common = {
    width: 22,
    height: 22,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (type) {
    case "clap":
      return (
        <svg {...common}>
          <path d="M3 9l18-3v12H3z" />
          <path d="M3 9l2-4 4-0.7M9 8l2-4 4-0.7M15 6l2-4 4-0.7" />
        </svg>
      );
    case "play":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M10 8l6 4-6 4V8z" />
        </svg>
      );
    case "cam":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="13" height="10" />
          <path d="M16 10l5-3v10l-5-3" />
        </svg>
      );
    case "monitor":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="12" />
          <path d="M8 20h8M12 16v4" />
        </svg>
      );
    case "plus":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      );
  }
}

function ProviderCard({ p, index }: { p: Provider; index: number }) {
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${p.name} — ${p.tagline}`}
      className="group relative flex flex-col bg-surface border border-stroke transition-colors duration-snappy ease-snappy hover:border-primary focus-visible:border-primary"
    >
      <div className="flex items-center justify-between border-b border-stroke px-4 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
          NODE.{String(index + 1).padStart(2, "0")}
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-primary">
          <span className="h-1.5 w-1.5 bg-primary bar-pulse" aria-hidden="true" />
          ONLINE
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex items-start justify-between">
          <div className="relative shrink-0">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden border border-stroke bg-background text-ink">
              {p.logo ? (
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={48}
                  height={48}
                  sizes="48px"
                  quality={85}
                  placeholder="blur"
                  className="h-full w-full object-contain"
                />
              ) : (
                <Glyph type={p.glyph} />
              )}
            </div>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap bg-primary text-background px-1.5 py-[1px] font-mono text-[9px] font-bold uppercase tracking-[0.1em] z-10">
              {p.quality}
            </span>
          </div>
          <IconExternal size={14} aria-hidden="true" />
        </div>

        <div className="flex-1">
          <h3 className="font-sans text-[18px] sm:text-[20px] font-extrabold leading-tight tracking-tightish text-ink break-words">
            {p.name}
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            {p.tagline}
          </p>
        </div>

        <div className="flex items-center justify-between gap-3 bg-primary text-background px-4 py-3 transition-transform duration-snappy group-hover:-translate-y-[1px] group-focus-visible:-translate-y-[1px]">
          <span className="flex items-center gap-2 font-semibold text-[12px] uppercase tracking-[0.12em]">
            <IconPlay size={14} aria-hidden="true" />
            Nonton Sekarang
          </span>
          <span aria-hidden="true" className="font-mono text-[12px] font-semibold">
            →
          </span>
        </div>
      </div>
    </a>
  );
}

function GroupHeader({ group }: { group: Group }) {
  return (
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          {group.code}
        </span>
        <span className="h-4 w-px bg-stroke" aria-hidden="true" />
        <h2 className="font-sans text-[18px] sm:text-[20px] font-extrabold tracking-tightish text-ink">
          {group.title}
        </h2>
        <span className="inline-flex items-center gap-1.5 border border-stroke bg-surface px-2 py-[3px] font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
          <IconDot size={8} aria-hidden="true" /> {group.items.length} situs
        </span>
      </div>
      <div className="hidden md:flex items-center gap-3">
        <span className="h-px w-24 bg-stroke" aria-hidden="true" />
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
          {group.tag}
        </span>
      </div>
    </div>
  );
}

export default function ProviderDirectory() {
  const total = GROUPS.reduce((s, g) => s + g.items.length, 0);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6 border-b border-stroke pb-6">
          <div className="min-w-0">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                Directory / Streaming Providers
              </span>
              <span className="h-px w-10 sm:w-16 bg-stroke" aria-hidden="true" />
            </div>
            <h1 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] font-extrabold leading-[0.95] tracking-tightish text-ink">
              Golden <span className="text-primary">Movie Hub</span>
            </h1>
            <p className="mt-3 max-w-[560px] text-[13px] leading-relaxed text-muted">
              Kumpulan situs streaming film & series Indonesia maupun luar
              negeri dengan subtitle Bahasa Indonesia.
            </p>
          </div>

          <div className="grid grid-cols-3 border border-stroke bg-surface shrink-0 w-full md:w-auto">
            <div className="p-3 border-r border-stroke">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Total
              </div>
              <div className="mt-1 font-sans font-extrabold text-[22px] leading-none tracking-tightish text-primary">
                {String(total).padStart(2, "0")}
              </div>
            </div>
            <div className="p-3 border-r border-stroke">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Regions
              </div>
              <div className="mt-1 font-sans font-extrabold text-[22px] leading-none tracking-tightish text-ink">
                {String(GROUPS.length).padStart(2, "0")}
              </div>
            </div>
            <div className="p-3">
              <div className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
                Status
              </div>
              <div className="mt-1 flex items-center gap-2">
                <IconServer size={12} aria-hidden="true" />
                <span className="font-mono text-[11px] font-semibold text-ink">
                  LIVE
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:gap-12">
          {GROUPS.map((g) => (
            <div key={g.code}>
              <GroupHeader group={g} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((p, i) => (
                  <ProviderCard key={p.name} p={p} index={i} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

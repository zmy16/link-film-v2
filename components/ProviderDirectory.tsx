"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import {
  IconPlay,
  IconDot,
  IconExternal,
  IconSearch,
} from "./Icons";
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
  accent: string;
  accentBg: string;
  items: Provider[];
};

const GROUPS: Group[] = [
  {
    code: "ID",
    flag: "\u{1F1EE}\u{1F1E9}",
    title: "Film Indonesia",
    tag: "ID INDO",
    accent: "text-primary",
    accentBg: "bg-primary",
    items: [
      {
        name: "Rebahin",
        tagline: "Film & series Indonesia dan luar negeri dengan subtitle.",
        quality: "HD",
        url: "https://rebahinxxi3.online/",
        glyph: "clap",
        logo: rebahinLogo,
      },
      {
        name: "Kita Nonton",
        tagline: "Film & series Indonesia terlengkap dan gratis.",
        quality: "HD",
        url: "https://kitanonton2.today/",
        glyph: "play",
        logo: kitanontonLogo,
      },
      {
        name: "NgeFilm21",
        tagline: "Film & series Indonesia berkualitas tinggi.",
        quality: "HD",
        url: "https://ngefilm.live/",
        glyph: "cam",
        logo: ngefilm21Logo,
      },
    ],
  },
  {
    code: "INT",
    flag: "\u{1F310}",
    title: "Film Luar Negeri",
    tag: "INT LUAR NEGERI",
    accent: "text-sky-400",
    accentBg: "bg-sky-400",
    items: [
      {
        name: "Layar Kaca 21",
        tagline:
          "Film & series luar negeri subtitle Bahasa Indonesia.",
        quality: "HD",
        url: "https://lk21.de/",
        glyph: "monitor",
        logo: layarkaca21Logo,
      },
      {
        name: "IDLIX",
        tagline:
          "Film & series luar negeri terlengkap dengan sub Indo.",
        quality: "HD",
        url: "https://idlixian.com/",
        glyph: "plus",
        logo: idlixLogo,
      },
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

function ProviderCard({
  p,
  index,
  accent,
  accentBg,
}: {
  p: Provider;
  index: number;
  accent: string;
  accentBg: string;
}) {
  const [imgError, setImgError] = useState(false);

  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Buka ${p.name} \u2014 ${p.tagline}`}
      className="card-enter group relative flex flex-col bg-surface border border-stroke transition-all duration-snappy ease-snappy hover:border-primary hover:shadow-[0_0_20px_rgba(255,215,0,0.06)] focus-visible:border-primary"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-center justify-between border-b border-stroke px-4 py-2">
        <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted">
          NODE.{String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.18em] ${accent}`}
        >
          <span
            className={`h-1.5 w-1.5 ${accentBg} bar-pulse`}
            aria-hidden="true"
          />
          ONLINE
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-4 px-5 py-5">
        <div className="flex items-start justify-between">
          <div className="relative shrink-0">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden border border-stroke bg-background text-ink">
              {p.logo && !imgError ? (
                <Image
                  src={p.logo}
                  alt={`${p.name} logo`}
                  width={48}
                  height={48}
                  sizes="48px"
                  quality={85}
                  placeholder="blur"
                  className="h-full w-full object-contain"
                  onError={() => setImgError(true)}
                />
              ) : (
                <Glyph type={p.glyph} />
              )}
            </div>
            <span
              className={`absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap ${accentBg} text-background px-1.5 py-[1px] font-mono text-[9px] font-bold uppercase tracking-[0.1em] z-10`}
            >
              {p.quality}
            </span>
          </div>
          <IconExternal
            size={14}
            aria-hidden="true"
            className="text-muted transition-colors duration-snappy group-hover:text-primary"
          />
        </div>

        <div className="flex-1">
          <h3 className="font-sans text-[18px] sm:text-[20px] font-extrabold leading-tight tracking-tightish text-ink break-words">
            {p.name}
          </h3>
          <p className="mt-2 text-[12px] leading-relaxed text-muted">
            {p.tagline}
          </p>
        </div>

        <div
          className={`flex items-center justify-between gap-3 ${accentBg} text-background px-4 py-3 transition-all duration-snappy group-hover:brightness-110`}
        >
          <span className="flex items-center gap-2 font-semibold text-[12px] uppercase tracking-[0.12em]">
            <IconPlay size={14} aria-hidden="true" />
            Nonton Sekarang
          </span>
          <span
            aria-hidden="true"
            className="font-mono text-[12px] font-semibold transition-transform duration-snappy group-hover:translate-x-1"
          >
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
        <span
          className={`font-mono text-[10px] uppercase tracking-[0.2em] ${group.accent}`}
        >
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
  const [query, setQuery] = useState("");
  const total = GROUPS.reduce((s, g) => s + g.items.length, 0);

  const q = query.toLowerCase().trim();
  const filtered = GROUPS.map((g) => ({
    ...g,
    items: g.items.filter(
      (p) =>
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.tagline.toLowerCase().includes(q) ||
        g.title.toLowerCase().includes(q),
    ),
  })).filter((g) => g.items.length > 0);

  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 py-8 sm:py-10">
        <div className="mb-8 sm:mb-10 border-b border-stroke pb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
              Directory / Streaming Providers
            </span>
            <span className="h-px w-10 sm:w-16 bg-stroke" aria-hidden="true" />
          </div>
          <h1 className="font-sans text-[32px] sm:text-[40px] md:text-[52px] font-extrabold leading-[0.95] tracking-tightish text-ink">
            Golden <span className="text-primary">Movie Hub</span>
          </h1>
          <p className="mt-3 max-w-[65ch] text-[13px] leading-relaxed text-muted">
            5 situs streaming terkurasi untuk film &amp; series, dari produksi
            lokal Indonesia hingga box office internasional dengan subtitle
            Bahasa Indonesia. Pilih provider, langsung nonton.
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="font-sans text-[15px] font-extrabold text-primary normal-case tracking-tightish mr-1.5">
                {String(total).padStart(2, "0")}
              </span>
              provider
            </span>
            <span className="h-3 w-px bg-stroke" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="font-sans text-[15px] font-extrabold text-ink normal-case tracking-tightish mr-1.5">
                {String(GROUPS.length).padStart(2, "0")}
              </span>
              region
            </span>
            <span className="h-3 w-px bg-stroke" aria-hidden="true" />
            <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              <span className="h-1.5 w-1.5 bg-emerald-500 bar-pulse" aria-hidden="true" />
              live
            </span>
          </div>
        </div>

        <div className="mb-8 relative max-w-sm">
          <IconSearch
            size={16}
            aria-hidden="true"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari: Rebahin, IDLIX, film Indonesia..."
            aria-label="Cari provider streaming"
            className="w-full bg-surface border border-stroke pl-9 pr-4 py-2.5 font-sans text-[13px] text-ink placeholder:text-muted focus:border-primary focus:outline-none transition-colors duration-snappy"
          />
        </div>

        <div className="flex flex-col gap-10 sm:gap-12">
          {filtered.length === 0 && q && (
            <div className="py-12 text-center">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Tidak ada hasil untuk &quot;{query}&quot;
              </p>
            </div>
          )}
          {filtered.map((g) => (
            <div key={g.code}>
              <GroupHeader group={g} />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {g.items.map((p, i) => (
                  <ProviderCard
                    key={p.name}
                    p={p}
                    index={i}
                    accent={g.accent}
                    accentBg={g.accentBg}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

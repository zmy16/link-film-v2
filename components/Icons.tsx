import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement> & { size?: number };

const base = (props: IconProps) => ({
  width: props.size ?? 16,
  height: props.size ?? 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

export const IconFilm = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="3" width="18" height="18" rx="0" />
    <path d="M3 7h18M3 12h18M3 17h18M8 3v18M16 3v18" />
  </svg>
);

export const IconSeries = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="2.5" y="5" width="19" height="12" />
    <path d="M8 21l4-4 4 4" />
  </svg>
);

export const IconAnime = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l2.5 5.5L20 9.5l-4 4 1 6-5-3-5 3 1-6-4-4 5.5-1L12 3z" />
  </svg>
);

export const IconSearch = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="11" cy="11" r="6.5" />
    <path d="M20 20l-4-4" />
  </svg>
);

export const IconArrow = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
);

export const IconPlay = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M6 4l14 8-14 8V4z" />
  </svg>
);

export const IconExternal = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M14 4h6v6" />
    <path d="M10 14L20 4" />
    <path d="M20 14v6H4V4h6" />
  </svg>
);

export const IconServer = (p: IconProps) => (
  <svg {...base(p)}>
    <rect x="3" y="4" width="18" height="7" />
    <rect x="3" y="13" width="18" height="7" />
    <path d="M7 7.5h.01M7 16.5h.01" />
  </svg>
);

export const IconClock = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

export const IconStar = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M12 3l2.9 6 6.6.9-4.8 4.6 1.2 6.6L12 18l-5.9 3.1 1.2-6.6L2.5 9.9 9.1 9 12 3z" />
  </svg>
);

export const IconDot = (p: IconProps) => (
  <svg {...base(p)}>
    <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />
  </svg>
);

export const IconMenu = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M3 7h18M3 12h18M3 17h18" />
  </svg>
);

export const IconCorner = (p: IconProps) => (
  <svg {...base(p)}>
    <path d="M4 9V4h5" />
    <path d="M20 9V4h-5" />
    <path d="M4 15v5h5" />
    <path d="M20 15v5h-5" />
  </svg>
);

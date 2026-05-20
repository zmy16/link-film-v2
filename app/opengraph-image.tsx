import { ImageResponse } from "next/og";

export const alt = "Golden Movie Hub — Streaming Directory";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadGoogleFont(
  family: string,
  weight: number,
): Promise<ArrayBuffer | null> {
  try {
    const familyParam = family.replace(/ /g, "+");
    const url = `https://fonts.googleapis.com/css2?family=${familyParam}:wght@${weight}&display=swap`;
    const css = await fetch(url, {
      headers: { "User-Agent": "Mozilla/5.0" },
    }).then((r) => r.text());
    const match = css.match(/src:\s*url\((.+?)\)\s*format/);
    if (!match) return null;
    return await fetch(match[1]).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function OgImage() {
  const [interExtraBold, interMedium, jetbrains] = await Promise.all([
    loadGoogleFont("Inter", 800),
    loadGoogleFont("Inter", 500),
    loadGoogleFont("JetBrains Mono", 600),
  ]);

  const fonts = [
    interExtraBold && {
      name: "Inter",
      data: interExtraBold,
      weight: 800 as const,
      style: "normal" as const,
    },
    interMedium && {
      name: "Inter",
      data: interMedium,
      weight: 500 as const,
      style: "normal" as const,
    },
    jetbrains && {
      name: "JetBrains Mono",
      data: jetbrains,
      weight: 600 as const,
      style: "normal" as const,
    },
  ].filter(Boolean) as {
    name: string;
    data: ArrayBuffer;
    weight: 500 | 600 | 800;
    style: "normal";
  }[];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#0A0A0B",
          color: "#EDEDED",
          fontFamily: "Inter",
          position: "relative",
        }}
      >
        {/* Grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            backgroundImage:
              "linear-gradient(#26262A 1px, transparent 1px), linear-gradient(90deg, #26262A 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            opacity: 0.35,
          }}
        />

        {/* Soft gold glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            background:
              "radial-gradient(ellipse at 30% 40%, rgba(255,215,0,0.10), transparent 60%)",
          }}
        />

        {/* Corner brackets — gold */}
        <div
          style={{
            position: "absolute",
            top: 28,
            left: 28,
            display: "flex",
            width: 28,
            height: 28,
            borderTop: "2px solid #FFD700",
            borderLeft: "2px solid #FFD700",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 28,
            right: 28,
            display: "flex",
            width: 28,
            height: 28,
            borderTop: "2px solid #FFD700",
            borderRight: "2px solid #FFD700",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            left: 28,
            display: "flex",
            width: 28,
            height: 28,
            borderBottom: "2px solid #FFD700",
            borderLeft: "2px solid #FFD700",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 28,
            right: 28,
            display: "flex",
            width: 28,
            height: 28,
            borderBottom: "2px solid #FFD700",
            borderRight: "2px solid #FFD700",
          }}
        />

        {/* Top header bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "30px 64px",
            borderBottom: "1px solid #26262A",
            fontFamily: "JetBrains Mono",
            fontSize: 16,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#8A8A90",
          }}
        >
          <div style={{ display: "flex" }}>
            STREAMING DIRECTORY / V1.0
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#FFD700",
            }}
          >
            <div
              style={{
                width: 10,
                height: 10,
                background: "#FFD700",
                display: "flex",
                marginRight: 12,
              }}
            />
            ONLINE
          </div>
        </div>

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: "flex",
            padding: "44px 64px",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Logo + meta line */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <svg width={92} height={92} viewBox="0 0 48 48">
              <rect width="48" height="48" rx="10" fill="#FFD700" />
              <rect
                x="9"
                y="21"
                width="30"
                height="17"
                rx="1.5"
                fill="#0A0A0B"
              />
              <path
                d="M8 14.5 L39.5 10.5 L41 18 L9.5 22 Z"
                fill="#0A0A0B"
              />
              <path
                d="M15.5 13.6 L19 20 L24.5 19.3 L21 12.9 Z"
                fill="#FFD700"
              />
              <path
                d="M27 12.1 L30.5 18.5 L36 17.8 L32.5 11.4 Z"
                fill="#FFD700"
              />
            </svg>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: 14,
                  letterSpacing: "0.24em",
                  color: "#8A8A90",
                  textTransform: "uppercase",
                }}
              >
                Directory · 05 Sites · 02 Regions
              </div>
              <div
                style={{
                  display: "flex",
                  fontFamily: "JetBrains Mono",
                  fontSize: 14,
                  letterSpacing: "0.24em",
                  color: "#FFD700",
                  textTransform: "uppercase",
                  marginTop: 8,
                }}
              >
                &gt; ID — INDONESIA · INT — LUAR NEGERI
              </div>
            </div>
          </div>

          {/* Title */}
          <div
            style={{
              display: "flex",
              fontSize: 124,
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.035em",
            }}
          >
            <span style={{ color: "#EDEDED" }}>Golden</span>
            <span style={{ color: "#FFD700", marginLeft: 26 }}>
              Movie Hub
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#8A8A90",
              maxWidth: 940,
              lineHeight: 1.4,
              marginTop: 28,
            }}
          >
            Kumpulan situs streaming film &amp; series Indonesia maupun luar
            negeri dengan subtitle Bahasa Indonesia.
          </div>
        </div>

        {/* Bottom stats bar */}
        <div
          style={{
            display: "flex",
            borderTop: "1px solid #26262A",
            fontFamily: "JetBrains Mono",
            background: "#141416",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "22px 32px",
              borderRight: "1px solid #26262A",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 12,
                color: "#8A8A90",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                marginBottom: 10,
              }}
            >
              Total
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 30,
                fontWeight: 800,
                color: "#FFD700",
                letterSpacing: "-0.02em",
              }}
            >
              05
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "22px 32px",
              borderRight: "1px solid #26262A",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 12,
                color: "#8A8A90",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                marginBottom: 10,
              }}
            >
              Regions
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 30,
                fontWeight: 800,
                color: "#EDEDED",
                letterSpacing: "-0.02em",
              }}
            >
              02
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "22px 32px",
              borderRight: "1px solid #26262A",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 12,
                color: "#8A8A90",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                marginBottom: 10,
              }}
            >
              Quality
            </div>
            <div
              style={{
                display: "flex",
                fontFamily: "Inter",
                fontSize: 30,
                fontWeight: 800,
                color: "#EDEDED",
                letterSpacing: "-0.02em",
              }}
            >
              HD
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "22px 32px",
              flex: 1,
            }}
          >
            <div
              style={{
                display: "flex",
                fontSize: 12,
                color: "#8A8A90",
                textTransform: "uppercase",
                letterSpacing: "0.24em",
                marginBottom: 10,
              }}
            >
              Status
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  width: 10,
                  height: 10,
                  background: "#FFD700",
                  marginRight: 10,
                }}
              />
              <div
                style={{
                  display: "flex",
                  fontSize: 22,
                  fontWeight: 600,
                  color: "#EDEDED",
                  letterSpacing: "0.05em",
                }}
              >
                LIVE
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length ? fonts : undefined,
    },
  );
}
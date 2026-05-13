import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://goldenmoviehub.local"),
  title: "Golden Movie Hub",
  description:
    "Kumpulan situs streaming film & series Indonesia maupun luar negeri dengan subtitle Bahasa Indonesia.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Golden Movie Hub",
    description:
      "Kumpulan situs streaming film & series Indonesia maupun luar negeri dengan subtitle Bahasa Indonesia.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0A0A0B",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen bg-background text-ink font-sans antialiased">
        {children}
      </body>
    </html>
  );
}

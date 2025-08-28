import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import Dither from "@/components/dither";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Freelancer Web — EmanuelPulido.dev",
    template: "%s | EmanuelPulido.dev",
  },
  description: "Sitios web para negocios: landing pages, sitios corporativos y e‑commerce.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "/",
    siteName: "EmanuelPulido.dev",
    title: "Freelancer Web — EmanuelPulido.dev",
    description: "Sitios web para negocios: landing pages, sitios corporativos y e‑commerce.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelancer Web — EmanuelPulido.dev",
    description: "Sitios web para negocios: landing pages, sitios corporativos y e‑commerce.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased min-h-screen grid grid-rows-[auto_1fr_auto] relative`}>
        <div className="fixed inset-0 z-0">
          <Dither
            waveColor={[0.8, 0.8, 0.8]}
            disableAnimation={false}
            enableMouseInteraction={true}
            mouseRadius={0.3}
            colorNum={4}
            waveAmplitude={0.3}
            waveFrequency={3}
            waveSpeed={0.05}
          />
        </div>
        <div className="relative z-10">
          <SiteHeader />
          <main className="mx-auto w-full max-w-5xl px-4 py-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}



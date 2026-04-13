import type { Metadata } from "next";
import { Archivo_Black } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/header";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Footer from "@/components/footer/footer";
import Script from "next/script";
import Preloader from "@/components/preloader";
import { config } from "@/data/config";
import SocketContextProvider from "@/contexts/socketio";
import ClientVisuals from "@/components/client-visuals";
import { LanguageProvider } from "@/contexts/language";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-matheu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: config.title,
  description: config.description.long,
  keywords: config.keywords,
  authors: [{ name: config.author }],
  openGraph: {
    title: config.title,
    description: config.description.short,
    url: SITE_URL,
    images: [
      {
        url: config.ogImg,
        width: 800,
        height: 600,
        alt: "Portfolio preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: config.title,
    description: config.description.short,
    images: [config.ogImg],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const archivoBlack = Archivo_Black({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const shouldLoadUmami = Boolean(
    process.env.UMAMI_DOMAIN && process.env.UMAMI_SITE_ID
  );

  return (
    <html lang="es" className={[archivoBlack.className].join(" ")}>
      <head>
        {shouldLoadUmami && (
          <Script
            defer
            src={process.env.UMAMI_DOMAIN}
            data-website-id={process.env.UMAMI_SITE_ID}
          />
        )}
        {/* <Analytics /> */}
        {process.env.NODE_ENV === "development" && (
          <Script
            src="https://mcp.figma.com/mcp/html-to-design/capture.js"
            strategy="beforeInteractive"
          />
        )}
      </head>
      <body>
        <LanguageProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          <Preloader>
            <SocketContextProvider>
              <ClientVisuals />
              <TooltipProvider>
                <Header />
                {children}
                <Footer />
              </TooltipProvider>
            </SocketContextProvider>
            <Toaster />
          </Preloader>
        </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}

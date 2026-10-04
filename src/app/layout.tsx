import type { Metadata } from "next";
// Bebas Neue e Montserrat são as fontes oficiais da FAC ("Beba Sans" em documentos
// antigos é a mesma Bebas Neue). Graduate é substituta da College Block.
// TODO: trocar Graduate -> College Block (next/font/local) quando o arquivo existir.
import { Bebas_Neue, Graduate, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import { sharedOpenGraph, siteDescription, siteName } from "@/content/seo";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const graduate = Graduate({
  variable: "--font-graduate",
  subsets: ["latin"],
  weight: "400",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: { default: siteName, template: `%s | ${siteName}` },
  description: siteDescription,
  // Domínio oficial ainda não definido. Defina NEXT_PUBLIC_SITE_URL ao publicar; na
  // Vercel, sem a variável, o Next usa o endereço de produção do projeto.
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  openGraph: { ...sharedOpenGraph, title: siteName, description: siteDescription },
  twitter: { card: "summary_large_image", title: siteName, description: siteDescription },
  // Ícones e imagem de compartilhamento vêm de favicon.ico, icon.png, apple-icon.png,
  // opengraph-image.png e twitter-image.png em src/app.
};

export const viewport = {
  themeColor: "#001B2A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-scroll-behavior="smooth"
      className={`${bebasNeue.variable} ${graduate.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <a href="#conteudo" className="skip-link">
          Pular para o conteúdo
        </a>
        <MotionProvider>
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}

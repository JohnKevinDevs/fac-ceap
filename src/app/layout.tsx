import type { Metadata } from "next";
// Substitutos atuais das fontes oficiais da FAC (README §3).
// TODO: trocar Bebas_Neue -> Beba Sans e Graduate -> College Block quando os
// arquivos oficiais estiverem disponíveis (via next/font/local).
import { Bebas_Neue, Graduate, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  title: "FAC — Federação Atlética CEAP",
  description:
    "FAC — Federação Atlética CEAP. A entidade esportiva e cultural do CEAP. Uma escola. Grandes talentos. Um legado.",
  metadataBase: new URL("https://fac.ceap"),
  openGraph: {
    title: "FAC — Federação Atlética CEAP",
    description:
      "A entidade esportiva e cultural do CEAP. Uma escola. Grandes talentos. Um legado.",
    type: "website",
    images: ["/fac-logo.png"],
  },
  icons: {
    icon: "/fac-logo.png",
    apple: "/fac-logo.png",
  },
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
      className={`${bebasNeue.variable} ${graduate.variable} ${montserrat.variable} antialiased`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

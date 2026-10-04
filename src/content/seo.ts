import type { Metadata } from "next";

export const siteName = "FAC · Federação Atlética CEAP";

export const siteDescription =
  "A entidade esportiva e cultural do CEAP. Uma escola. Grandes talentos. Um legado.";

// O Next mescla `openGraph` de forma rasa: o objeto da página substitui o do layout
// inteiro. Toda página espalha esta base para não perder tipo, idioma, nome e imagem.
export const sharedOpenGraph = {
  type: "website" as const,
  locale: "pt_BR",
  siteName,
  images: [
    {
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: "FAC, Federação Atlética CEAP: Uma escola. Grandes talentos. Um legado.",
    },
  ],
};

/** Metadata de uma página interna: título, descrição, canonical e Open Graph próprios. */
export function pageMetadata(path: string, title: string, description: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { ...sharedOpenGraph, title: `${title} | ${siteName}`, description, url: path },
  };
}

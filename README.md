# Site Oficial da FAC — Federação Atlética CEAP

Site institucional (V1) da **FAC — Federação Atlética CEAP**, a entidade esportiva e
cultural do CEAP. Conceito: **"Legado em movimento"** — a tradição está sendo construída
agora.

**5 páginas + link externo:** Início · Sobre · Projetos · História · Equipe — e **BID ↗**
(produto irmão, destino externo).

> **Fronteira FAC × BID:** o Site FAC conta a organização (quem é a FAC, propósito, pessoas,
> história, projetos). O **BID** cuida do esporte (atletas, times, modalidades, resultados).
> Este site **não** duplica dados esportivos.

## Stack

- **Next.js 16** (App Router) + **TypeScript**
- **Tailwind CSS v4** — tokens de marca via `@theme` em `src/app/globals.css`
- **Framer Motion** — apenas reveal on scroll e o pulse da timeline (respeitando
  `prefers-reduced-motion`)

## Rodar

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # build de produção
npm run lint
```

## Estrutura

```
src/
├── app/                 # rotas (page.tsx por página) + layout + globals.css
├── components/          # Header, Footer, Reveal, ImageSlot, SectionLabel, Container
└── content/             # dados estruturados (editar aqui, sem tocar no layout)
    ├── site.ts          # links institucionais (bidUrl, instagramUrl, contactHref)
    ├── nav.ts
    ├── projetos.ts
    ├── marcos.ts
    └── equipe.ts
```

## Para gestões futuras — o que atualizar

Todo conteúdo repetível vem de `src/content/`. **Não é preciso mexer no layout** para:

- **Links institucionais** → `content/site.ts` (`bidUrl`, `instagramUrl`, `contactHref`).
  Hoje estão vazios (`''`) e caem em `#` — **preencher antes de publicar**.
- **Nomes da liderança** → `content/equipe.ts` (placeholders `[ Nome ]`).
- **Datas da história** → `content/marcos.ts` (placeholders `[DATA]`).
- **Projetos** → `content/projetos.ts` (novos entram só quando reais e aprovados).

### Fotos

Os slots (`ImageSlot`) são placeholders `4:5`/`3:4` com `object-fit: cover` (fundo
`#DCE3E7`). Basta passar `src` para inserir a foto real — o recorte é mantido, sem barras.

### Fontes — ⚠ substitutos temporários

O sistema oficial usa **College Block**, **Beba Sans** e **Montserrat**. Por licença, os
protótipos e este app usam substitutos do Google Fonts (**Graduate**, **Bebas Neue**,
Montserrat). Ver `TODO` em `src/app/layout.tsx` e `src/app/globals.css` para trocar pelos
arquivos oficiais (via `next/font/local`).

## Referência de design

O pacote de handoff original (protótipos, docs e standalone) está em `_reference/`
— referência visual apenas; o app foi recriado do zero.

# Site Oficial da FAC - Federação Atlética CEAP

Site institucional da **FAC - Federação Atlética CEAP**, criado para apresentar identidade, história, equipe, projetos e comunicação oficial da entidade esportiva e cultural do CEAP.

Conceito: **Legado em movimento** - a tradição está sendo construída agora.

## Live Demo

https://fac-ceap.vercel.app

## Capturas de tela

| Home | Projetos |
| --- | --- |
| ![FAC CEAP home screen](docs/assets/screenshots/home.png) | ![FAC CEAP projects screen](docs/assets/screenshots/projetos.png) |

| Equipe | História |
| --- | --- |
| ![FAC CEAP team screen](docs/assets/screenshots/equipe.png) | ![FAC CEAP history screen](docs/assets/screenshots/historia.png) |

## Overview

| Área | Description |
| --- | --- |
| Problem | Uma entidade estudantil precisa de comunicação clara, identidade própria e uma fonte oficial de informações. |
| Solution | Site institucional para explicar quem é a FAC, o que ela constrói, quem lidera e como os projetos se conectam. |
| Users | Alunos, liderança estudantil, professores, comunidade CEAP e parceiros. |
| Focus | Produto institucional, design system, conteúdo estruturado e evolução por gestões futuras. |

## Escopo

O site conta a organização e sua identidade:

- Início
- Sobre
- Projetos
- História
- Equipe
- Link externo para o BID

> Fronteira FAC x BID: o site FAC conta a organização, propósito, pessoas, história e projetos. O BID cuida dos dados esportivos, como atletas, times, modalidades e resultados.

## Stack

- Next.js 16 com App Router
- React
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Estrutura

```text
src/
  app/          rotas, layout e estilos globais
  components/   Header, Footer, Reveal, ImageSlot, SectionLabel, Container
  content/      dados editáveis sem mexer no layout
```

Conteúdos repetíveis ficam em `src/content/`:

```text
src/content/site.ts      links institucionais
src/content/nav.ts       navegação
src/content/projetos.ts  projetos
src/content/marcos.ts    linha do tempo
src/content/equipe.ts    liderança e equipe
```

## Como Rodar

```bash
npm install
npm run dev
```

Acesse:

```text
http://localhost:3000
```

Validar build e lint:

```bash
npm run build
npm run lint
```

## Para gestores futuros

Todo conteúdo repetível foi centralizado em `src/content/`. Isso permite atualizar nomes, links, projetos e marcos sem alterar a estrutura visual do site.

Atualizações comuns:

- Links institucionais em `src/content/site.ts`.
- Nomes da equipe em `src/content/equipe.ts`.
- Datas e eventos em `src/content/marcos.ts`.
- Projetos em `src/content/projetos.ts`.

## Notas de Design

- Os slots de imagem usam proporções estáveis para facilitar troca futura de fotos.
- A estrutura separa conteúdo e layout para reduzir risco de quebrar a interface.
- O projeto usa fontes substitutas abertas. Fontes oficiais podem ser adicionadas depois via `next/font/local`.

## Valor de portfólio

Este projeto demonstra construção de um produto institucional real: identidade, informação, navegação, conteúdo editável e preocupação com continuidade por futuras gestões.

Também reforça minha atuação na FAC, conectando liderança estudantil, comunicação, organização e desenvolvimento web.

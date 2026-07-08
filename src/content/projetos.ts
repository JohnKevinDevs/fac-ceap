// Projetos da FAC (README §6.3 / §9). Conteúdo oficial — não inventar métricas.
export type Projeto = {
  slug: string;
  titulo: string;
  status: "Concluído" | "Em andamento" | "Próximo";
  periodo?: string; // ex.: "Junho de 2026"
  contexto: string;
  objetivo?: string;
  destaque?: boolean;
  num: string; // numeração editorial ("01", "02"...)
};

/** Projeto em destaque — Copa CEAP. */
export const projetoDestaque: Projeto = {
  slug: "copa-ceap",
  titulo: "Copa CEAP",
  status: "Concluído",
  periodo: "Junho de 2026",
  num: "01",
  destaque: true,
  contexto:
    "A primeira grande atuação prática da FAC. Um campeonato interno que reuniu a comunidade do CEAP em torno do esporte — e provou que a organização consegue transformar ideia em ação.",
  objetivo:
    "Criar competição saudável, integração entre turmas e o primeiro grande registro da memória esportiva do CEAP sob a bandeira da FAC.",
};

/** Projetos em movimento agora. */
export const projetosEmAndamento: Projeto[] = [
  {
    slug: "bid",
    num: "02",
    status: "Em andamento",
    titulo: "BID — Banco de Informações Desportivas",
    contexto:
      "O produto esportivo da FAC. Atletas, times, modalidades, regulamentos, classificações e histórico esportivo vivem no BID — um produto irmão, com espaço próprio.",
  },
  {
    slug: "estruturacao-fac",
    num: "03",
    status: "Em andamento",
    titulo: "Estruturação da FAC",
    contexto:
      "A construção da própria organização: estrutura, núcleos, processos e um modelo que permita a futuras gestões continuar o trabalho sem recomeçar do zero.",
  },
  {
    slug: "identidade-comunicacao",
    num: "04",
    status: "Em andamento",
    titulo: "Identidade & Comunicação",
    contexto:
      "Marca, presença digital e a forma como a FAC fala com a comunidade — do escudo ao Instagram, do site ao dia de jogo.",
  },
];

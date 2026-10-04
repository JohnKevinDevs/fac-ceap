// Equipe da FAC (README §6.5 / §9). Liderança tem foto; diretorias não.
// Fonte: Equipe 2026 e Organograma 2026 (pasta 10 - GESTÃO E TRANSIÇÃO do Drive da FAC).
// Não inventar pessoas: nome novo só com fonte. Atualizar na troca de gestão.
export type Membro = {
  nome: string;
  funcao: string;
  slotId: string;
  slotLabel: string;
  grupo: "lideranca";
};

export type Diretoria = {
  num: string;
  titulo: string;
  descricao: string;
  responsavel?: string;
};

/** Liderança — com fotos (grade auto-fill). */
export const lideranca: Membro[] = [
  {
    nome: "Lucca Borro",
    funcao: "Conselho Estratégico · vínculo CEAP",
    slotId: "equipe-lid-conselho",
    slotLabel: "FOTO — Conselheiro Estratégico",
    grupo: "lideranca",
  },
  {
    nome: "Marcelo Henrique",
    funcao: "Conselho Estratégico",
    slotId: "equipe-lid-conselho-2",
    slotLabel: "FOTO — Conselheiro Estratégico",
    grupo: "lideranca",
  },
  {
    nome: "John Kevin Alves",
    funcao: "Presidente",
    slotId: "equipe-lid-pres",
    slotLabel: "FOTO — Presidente",
    grupo: "lideranca",
  },
  {
    nome: "Gabriel Lima",
    funcao: "Vice-presidente Administrativo",
    slotId: "equipe-lid-vpadm",
    slotLabel: "FOTO — Vice-presidente Administrativo",
    grupo: "lideranca",
  },
  {
    nome: "Guilherme Batista",
    funcao: "Vice-presidente Esportivo",
    slotId: "equipe-lid-vpesp",
    slotLabel: "FOTO — Vice-presidente Esportivo",
    grupo: "lideranca",
  },
  {
    nome: "Lucas Alves",
    funcao: "Direção Geral",
    slotId: "equipe-lid-geral",
    slotLabel: "FOTO — Direção Geral",
    grupo: "lideranca",
  },
];

/** Diretorias & Comissões — sem foto (lista 01–05). */
export const diretorias: Diretoria[] = [
  {
    num: "01",
    titulo: "Diretoria de Eventos",
    responsavel: "Lucas Alves",
    descricao:
      "Onde a FAC ganha vida — planeja e executa torneios, ativações e festas, da logística à montagem, coordenando equipes de apoio.",
  },
  {
    num: "02",
    titulo: "Diretoria de Marketing",
    responsavel: "Pedro Andrade",
    descricao:
      "A voz e o rosto público da FAC — redes sociais, conteúdo, cobertura de eventos e o tom de voz oficial em toda comunicação.",
  },
  {
    num: "03",
    titulo: "Diretoria de Esportes",
    responsavel: "João Davi",
    descricao:
      "O coração competitivo — define modalidades, regras e formato dos campeonatos, coordena capitães e mantém o calendário esportivo ativo.",
  },
  {
    num: "04",
    titulo: "Diretoria de Cultura e Engajamento",
    responsavel: "Cauã Martins",
    descricao:
      "O DNA emocional da FAC — identidade dos clubes, tradições, recepção de calouros e a cultura sentida em cada ponto de contato.",
  },
  {
    num: "05",
    titulo: "Diretoria de Administração e Operações",
    responsavel: "Pierry Gomes",
    descricao:
      "A coluna vertebral — documentação, atas, cadastro de membros e organização dos arquivos que sustentam a federação.",
  },
];

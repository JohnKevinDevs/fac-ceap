// Marcos históricos (README §6.4 / §9). Datas [DATA] são placeholders a confirmar.
export type Marco = {
  quando: string; // "[DATA]" | "HOJE · 2026"
  titulo: string;
  descricao: string;
  slotId?: string; // se houver foto/documento associado
  slotLabel?: string;
  legenda?: string;
  agora?: boolean; // aplica o estilo/pulse do marco atual
};

/** Capítulos da linha do tempo — página História. */
export const capitulos: Marco[] = [
  {
    quando: "[DATA]",
    titulo: "A origem",
    descricao:
      "A ideia de uma entidade esportiva e cultural para o CEAP ganha forma: canalizar a energia dos alunos em algo organizado, contínuo e com identidade própria.",
    slotId: "hist-origem",
    slotLabel: "FOTO / DOCUMENTO — registro da origem da FAC",
    legenda: "[ Legenda e crédito do registro ]",
  },
  {
    quando: "[DATA]",
    titulo: "A estruturação",
    descricao:
      "Primeiras decisões: nome, escudo, identidade, estrutura e as pessoas que toparam construir. A FAC deixa de ser ideia e vira organização.",
  },
  {
    quando: "[DATA]",
    titulo: "Copa CEAP — a primeira prova",
    descricao:
      "A primeira grande atuação prática. Organização, jogos, torcida e bastidores: foi aqui que a FAC transformou ideia em ação diante de toda a comunidade.",
    slotId: "hist-copa",
    slotLabel: "FOTO — momento marcante da Copa CEAP",
    legenda: "[ Legenda e crédito do registro ]",
  },
  {
    quando: "[DATA]",
    titulo: "BID — o esporte ganha casa",
    descricao:
      "Nasce o Banco de Informações Desportivas: o espaço próprio para atletas, times, modalidades e resultados. A memória esportiva do CEAP passa a ser registrada.",
  },
];

/** Marco atual — "HOJE · 2026" (ponto pulsante). */
export const marcoAgora: Marco = {
  quando: "HOJE · 2026",
  titulo: "Registrando o início",
  descricao:
    "É aqui que estamos agora: a FAC em movimento, construindo estrutura, identidade e o esporte do CEAP — e registrando cada passo enquanto ele acontece. O que fizermos deste ponto em diante vira o próximo capítulo.",
  agora: true,
};

/** Mini-marcos exibidos na Home (capítulo 07). */
export type MiniMarco = {
  quando: string;
  titulo: string;
  descricao: string;
  destaque?: boolean; // usa cor mudada (próximo capítulo)
};

export const homeMarcos: MiniMarco[] = [
  {
    quando: "[DATA]",
    titulo: "Origem",
    descricao:
      "A ideia de uma entidade esportiva e cultural para o CEAP ganha forma.",
  },
  {
    quando: "[DATA]",
    titulo: "Estruturação",
    descricao: "Primeiras decisões, identidade e organização da FAC.",
  },
  {
    quando: "[DATA]",
    titulo: "Copa CEAP",
    descricao: "A primeira grande atuação prática: ideia vira ação.",
  },
  {
    quando: "Próximo capítulo",
    titulo: "Em construção",
    descricao: "O que acontece agora vira história depois.",
    destaque: true,
  },
];

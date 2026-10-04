// Links institucionais centralizados (README §5 / §9).
// TODO: preencher com as URLs reais antes de publicar.
export const site = {
  bidUrl: "https://bid-interclasse.vercel.app/", // BID (Banco de Informações Desportivas)
  instagramUrl: "", // TODO: URL do Instagram oficial da FAC
  contactHref: "", // TODO: mailto: ou link de formulário de contato
} as const;

/**
 * Resolve um href institucional para uso em <a>/<Link>.
 * Enquanto o link não estiver configurado, cai em "#" para não quebrar a navegação.
 */
export function href(value: string): string {
  return value.trim() === "" ? "#" : value;
}

/** Só links http(s) abrem em nova aba; mailto: e rotas internas não. */
export function isExternal(value: string): boolean {
  return /^https?:\/\//i.test(value.trim());
}

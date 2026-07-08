// Itens de navegação principal (README §5.1).
export type NavItem = {
  key: string;
  label: string;
  href: string;
};

export const navItems: NavItem[] = [
  { key: "inicio", label: "Início", href: "/" },
  { key: "sobre", label: "Sobre", href: "/sobre" },
  { key: "projetos", label: "Projetos", href: "/projetos" },
  { key: "historia", label: "História", href: "/historia" },
  { key: "equipe", label: "Equipe", href: "/equipe" },
];

/** Deriva a chave ativa a partir do pathname atual. */
export function activeKey(pathname: string): string {
  if (pathname === "/") return "inicio";
  const seg = pathname.split("/")[1] ?? "";
  return seg || "inicio";
}

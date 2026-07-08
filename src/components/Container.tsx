import type { CSSProperties, ElementType, ReactNode } from "react";

// Container padrão da FAC (README §4.4): max-width 1240px + padding lateral clamp.
export default function Container({
  as: Tag = "div",
  className = "",
  style,
  children,
}: {
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  return (
    <Tag className={`container-fac ${className}`.trim()} style={style}>
      {children}
    </Tag>
  );
}

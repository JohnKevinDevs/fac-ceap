// Slot de foto placeholder (README §4.4 / §10).
// Proporção retrato 4:5 (ou 3:4 em destaque), object-fit: cover, fundo #DCE3E7.
// Pronto para receber a foto real: passe `src` que o slot renderiza a imagem
// no lugar do placeholder, mantendo o recorte.
export default function ImageSlot({
  label,
  ratio = "4/5",
  src,
  alt,
  className = "",
  spanTwo = false,
}: {
  label: string;
  ratio?: "4/5" | "3/4";
  src?: string;
  alt?: string;
  className?: string;
  spanTwo?: boolean;
}) {
  return (
    <div
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        aspectRatio: ratio.replace("/", " / "),
        background: "var(--color-placeholder)",
        gridColumn: spanTwo ? "span 2" : undefined,
      }}
    >
      {src ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt ?? ""}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span
          className="absolute inset-0 flex items-center justify-center p-4 text-center"
          style={{
            fontSize: "11px",
            letterSpacing: "1.6px",
            textTransform: "uppercase",
            color: "var(--color-on-navy-mute)",
            fontWeight: 600,
          }}
          aria-hidden="true"
        >
          {label}
        </span>
      )}
    </div>
  );
}

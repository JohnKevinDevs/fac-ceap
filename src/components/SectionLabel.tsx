// Marcador de seção (README §6): número Graduate + traço + label uppercase.
// Duas formas: com `num` (número + linha 1px, usado nos capítulos) ou sem
// (barra 2px azul, usada nas aberturas de página).
type Tone = "onLight" | "onNavy" | "onBlue";

const TONES: Record<
  Tone,
  { num: string; line: string; label: string; bar: string }
> = {
  onLight: {
    num: "#0066FF",
    line: "#C0C0C0",
    label: "#6B7A85",
    bar: "#0066FF",
  },
  onNavy: {
    num: "#0066FF",
    line: "rgba(192,192,192,0.4)",
    label: "#8CA0AC",
    bar: "#0066FF",
  },
  onBlue: {
    num: "#fff",
    line: "rgba(255,255,255,0.5)",
    label: "rgba(255,255,255,0.8)",
    bar: "#fff",
  },
};

export default function SectionLabel({
  num,
  label,
  tone = "onLight",
  className = "",
}: {
  num?: string;
  label: string;
  tone?: Tone;
  className?: string;
}) {
  const c = TONES[tone];
  return (
    <div
      className={`flex items-center gap-[14px] ${className}`.trim()}
      style={{ marginBottom: 28 }}
    >
      {num ? (
        <>
          <span
            className="t-graduate"
            style={{ fontSize: 12, letterSpacing: "3px", color: c.num }}
          >
            {num}
          </span>
          <span
            aria-hidden="true"
            style={{ width: 42, height: 1, background: c.line, display: "block" }}
          />
        </>
      ) : (
        <span
          aria-hidden="true"
          style={{ width: 42, height: 2, background: c.bar, display: "block" }}
        />
      )}
      <span className="t-label" style={{ color: c.label }}>
        {label}
      </span>
    </div>
  );
}

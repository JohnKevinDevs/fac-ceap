import Link from "next/link";
import Container from "@/components/Container";

// Página 404 em português (a padrão do Next é em inglês).
export default function NotFound() {
  return (
    <section style={{ background: "var(--color-navy)", padding: "clamp(96px, 18vh, 200px) 0" }}>
      <Container>
        <p
          className="t-graduate"
          style={{ margin: "0 0 16px", fontSize: 14, letterSpacing: "2px", color: "#2DA8FF" }}
        >
          404
        </p>
        <h1
          className="t-bebas"
          style={{ margin: "0 0 20px", color: "#fff", fontSize: "clamp(44px, 7vw, 96px)", lineHeight: 0.95 }}
        >
          Página não encontrada.
        </h1>
        <p
          style={{
            margin: "0 0 36px",
            fontSize: "clamp(15px, 1.4vw, 18px)",
            lineHeight: 1.7,
            color: "var(--color-on-navy)",
            maxWidth: "48ch",
          }}
        >
          O endereço pode ter mudado ou não existir. Volte para o início e siga pela navegação.
        </p>
        <Link href="/" className="btn-solid">
          Voltar ao início
        </Link>
      </Container>
    </section>
  );
}

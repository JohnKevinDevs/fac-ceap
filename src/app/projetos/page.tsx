import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import { site, href, isExternal } from "@/content/site";
import { projetoDestaque, projetosEmAndamento } from "@/content/projetos";

export const metadata: Metadata = {
  title: "Projetos — FAC · Federação Atlética CEAP",
  description:
    "O que a FAC constrói: iniciativas reais como a Copa CEAP e o BID.",
};

export default function Projetos() {
  const bid = href(site.bidUrl);
  const bidProps = isExternal(site.bidUrl)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      {/* ===== ABERTURA ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(40px, 7vh, 84px) 0 clamp(64px, 10vh, 120px)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span aria-hidden="true" style={{ width: 42, height: 2, background: "#0066FF", display: "block" }} />
            <span className="t-label" style={{ color: "var(--color-on-navy-mute)" }}>Projetos</span>
          </div>
          <h1 className="t-h1-page" style={{ margin: "0 0 24px", color: "#fff", maxWidth: "14ch" }}>
            O que a FAC realmente constrói.
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "60ch" }}>
            Poucos projetos, bem narrados. Cada iniciativa aqui é real — com
            contexto, objetivo, status e registros. Nada entra para preencher
            layout.
          </p>
        </Container>
      </section>

      {/* ===== DESTAQUE — COPA CEAP ===== */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal style={{ display: "flex", alignItems: "baseline", gap: 18, flexWrap: "wrap", marginBottom: 24 }}>
            <span className="t-graduate" style={{ fontSize: 13, letterSpacing: "2px", color: "#0066FF" }}>PROJETO {projetoDestaque.num}</span>
            <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#fff", background: "var(--color-navy)", padding: "6px 12px" }}>{projetoDestaque.status}</span>
            {projetoDestaque.periodo && (
              <span style={{ fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--color-text-3)" }}>{projetoDestaque.periodo}</span>
            )}
          </Reveal>
          <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 24px", color: "var(--color-text-strong)", fontSize: "clamp(52px, 9vw, 140px)", lineHeight: 0.9 }}>
            {projetoDestaque.titulo}
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(28px, 5vw, 72px)", marginBottom: 48 }}>
            <Reveal>
              <h3 style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, letterSpacing: "2.4px", textTransform: "uppercase", color: "#0066FF" }}>Contexto</h3>
              <p style={{ margin: "0 0 28px", fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)" }}>{projetoDestaque.contexto}</p>
              <h3 style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, letterSpacing: "2.4px", textTransform: "uppercase", color: "#0066FF" }}>Objetivo</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)" }}>{projetoDestaque.objetivo}</p>
            </Reveal>
            <Reveal>
              <h3 style={{ margin: "0 0 10px", fontSize: 11, fontWeight: 700, letterSpacing: "2.4px", textTransform: "uppercase", color: "#0066FF" }}>Onde vive o esporte</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)" }}>
                Tabelas, resultados e atletas da Copa pertencem ao{" "}
                <a href={bid} {...bidProps} style={{ color: "#0066FF", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #0066FF" }}>BID ↗</a>. Aqui fica a história.
              </p>
            </Reveal>
          </div>
          <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14 }}>
            <ImageSlot label="FOTO — jogo decisivo" ratio="3/4" spanTwo />
            <ImageSlot label="FOTO — premiação / comemoração" ratio="4/5" />
          </Reveal>
        </Container>
      </section>

      {/* ===== EM MOVIMENTO AGORA ===== */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container>
          <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 48px", color: "var(--color-text-strong)", fontSize: "clamp(38px, 5vw, 72px)", lineHeight: 0.95 }}>
            Em movimento agora
          </Reveal>
          <div style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "2px solid var(--color-text-strong)" }}>
            {projetosEmAndamento.map((p) => (
              <Reveal
                key={p.slug}
                as="article"
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(90px, 140px) 1fr",
                  gap: "clamp(16px, 4vw, 60px)",
                  padding: "clamp(28px, 4vh, 44px) 0",
                  borderBottom: "1px solid var(--color-border-mid)",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <span className="t-graduate" style={{ fontSize: 13, letterSpacing: "2px", color: "var(--color-silver)" }}>{p.num}</span>
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "1.8px", textTransform: "uppercase", color: "#0066FF" }}>{p.status}</span>
                </div>
                <div>
                  <h3 className="t-bebas" style={{ margin: "0 0 10px", fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 0.98, color: "var(--color-text-strong)" }}>{p.titulo}</h3>
                  <p style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "68ch" }}>{p.contexto}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal style={{ marginTop: 48, borderLeft: "3px solid #0066FF", padding: "20px clamp(20px, 3vw, 36px)", background: "var(--color-ice)" }}>
            <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "70ch" }}>
              <strong style={{ color: "var(--color-text-strong)" }}>Próximos movimentos.</strong>{" "}
              Novos projetos entram nesta página quando forem reais e aprovados —
              com contexto, objetivo e registros. É assim que a FAC constrói: uma
              coisa de cada vez, bem feita.
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

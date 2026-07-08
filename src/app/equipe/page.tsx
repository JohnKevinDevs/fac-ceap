import type { Metadata } from "next";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import { site, href, isExternal } from "@/content/site";
import { lideranca, diretorias } from "@/content/equipe";

export const metadata: Metadata = {
  title: "Equipe — FAC · Federação Atlética CEAP",
  description:
    "Quem está construindo a FAC agora — estudantes reais que organizam e fazem acontecer.",
};

export default function Equipe() {
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
            <span className="t-label" style={{ color: "var(--color-on-navy-mute)" }}>Equipe</span>
          </div>
          <h1 className="t-h1-page" style={{ margin: "0 0 24px", color: "#fff", maxWidth: "14ch" }}>
            Quem está construindo a FAC agora.
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "60ch" }}>
            Estudantes reais que organizam, planejam e fazem acontecer. Atletas e
            times vivem no{" "}
            <a href={bid} {...bidProps} style={{ color: "#fff", fontWeight: 600, textDecoration: "none", borderBottom: "1px solid #0066FF" }}>BID ↗</a>{" "}
            — aqui está quem constrói a organização.
          </p>
        </Container>
      </section>

      {/* ===== LIDERANÇA (com fotos) ===== */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <span aria-hidden="true" style={{ width: 42, height: 1, background: "var(--color-silver)", display: "block" }} />
              <span className="t-label" style={{ color: "var(--color-text-3)" }}>Liderança</span>
            </div>
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 40px", fontSize: 14, lineHeight: 1.7, color: "var(--color-text-2)", maxWidth: "60ch" }}>
            A Presidência, as Vice-presidências e a Direção Geral — apoiadas pelo
            Conselho Estratégico. Quem representa, decide e mantém a FAC em
            movimento.
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(190px, 1fr))", gap: "clamp(20px, 2.4vw, 32px)" }}>
            {lideranca.map((m) => (
              <Reveal key={m.slotId} as="figure" style={{ margin: 0 }}>
                <ImageSlot label={m.slotLabel} ratio="4/5" />
                <figcaption style={{ marginTop: 14 }}>
                  <span className="t-bebas" style={{ display: "block", fontSize: 26, lineHeight: 1, color: "var(--color-text-strong)" }}>{m.nome}</span>
                  <span style={{ display: "block", fontSize: 12, fontWeight: 600, letterSpacing: "1.6px", textTransform: "uppercase", color: "#0066FF", marginTop: 6 }}>{m.funcao}</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== DIRETORIAS (sem foto) ===== */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 12 }}>
              <span aria-hidden="true" style={{ width: 42, height: 1, background: "var(--color-silver)", display: "block" }} />
              <span className="t-label" style={{ color: "var(--color-text-3)" }}>Diretorias &amp; Comissões</span>
            </div>
          </Reveal>
          <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 16px", color: "var(--color-text-strong)", fontSize: "clamp(34px, 4.6vw, 64px)", lineHeight: 0.95 }}>
            Cinco áreas. Onde o trabalho real acontece.
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 48px", fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "62ch" }}>
            Cada diretoria tem um propósito claro e um dono. Mais que isso vira
            burocracia; menos sobrecarrega quem está dentro.
          </Reveal>
          <div style={{ borderTop: "2px solid var(--color-text-strong)" }}>
            {diretorias.map((d) => (
              <Reveal
                key={d.num}
                as="article"
                style={{ display: "grid", gridTemplateColumns: "minmax(52px, 92px) 1fr", gap: "clamp(16px, 4vw, 56px)", alignItems: "baseline", padding: "clamp(24px, 3.4vh, 38px) 0", borderBottom: "1px solid var(--color-border-mid)" }}
              >
                <span className="t-graduate" style={{ fontSize: "clamp(20px, 2.6vw, 32px)", color: "#0066FF" }}>{d.num}</span>
                <div>
                  <h3 className="t-bebas" style={{ margin: "0 0 8px", fontSize: "clamp(26px, 3.4vw, 44px)", lineHeight: 0.98, color: "var(--color-text-strong)" }}>{d.titulo}</h3>
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--color-text-2)", maxWidth: "70ch" }}>{d.descricao}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" style={{ margin: "40px 0 0", fontSize: 13, lineHeight: 1.7, color: "var(--color-on-navy-mute)", maxWidth: "68ch" }}>
            Apoiam a estrutura o{" "}
            <strong style={{ color: "var(--color-text-2)" }}>Conselho Estratégico</strong>{" "}
            (consultivo) e os{" "}
            <strong style={{ color: "var(--color-text-2)" }}>Representantes de Núcleo ECI / EPT</strong>, que articulam a federação com cursos e turmas.
          </Reveal>
        </Container>
      </section>

      {/* ===== COLETIVO ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(72px, 12vh, 130px) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
          <div>
            <Reveal as="h2" className="t-h2" style={{ margin: "0 0 16px", color: "#fff", lineHeight: 0.94 }}>
              Ninguém constrói legado sozinho.
            </Reveal>
            <Reveal as="p" style={{ margin: 0, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "52ch" }}>
              A FAC é feita de contribuição coletiva. Cada gestão passa; a
              organização fica. Este site foi pensado para que a próxima equipe
              continue exatamente daqui.
            </Reveal>
          </div>
          <Reveal as="figure" style={{ margin: 0 }}>
            <ImageSlot label="FOTO — equipe completa em contexto real (montagem, reunião, dia de jogo)" ratio="4/5" />
            <figcaption style={{ fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--color-on-navy-mute)", marginTop: 10 }}>
              A gestão atual — Junho de 2026
            </figcaption>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

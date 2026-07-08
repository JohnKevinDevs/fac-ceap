import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import ImageSlot from "@/components/ImageSlot";
import { capitulos } from "@/content/marcos";

export const metadata: Metadata = {
  title: "História — FAC · Federação Atlética CEAP",
  description:
    "A história da FAC — construindo tradição desde o começo, registrando o início enquanto ele acontece.",
};

const TRILHO = "clamp(24px, 5vw, 44px)";
const GAP = "clamp(32px, 6vw, 80px)";

export default function Historia() {
  return (
    <>
      {/* ===== ABERTURA ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(40px, 7vh, 84px) 0 clamp(64px, 10vh, 120px)", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          className="t-graduate"
          style={{ position: "absolute", bottom: -40, right: -30, fontSize: "clamp(140px, 22vw, 320px)", lineHeight: 1, color: "rgba(255,255,255,0.04)", pointerEvents: "none", userSelect: "none" }}
        >
          CAP
        </div>
        <Container style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span aria-hidden="true" style={{ width: 42, height: 2, background: "#0066FF", display: "block" }} />
            <span className="t-label" style={{ color: "var(--color-on-navy-mute)" }}>História</span>
          </div>
          <h1 className="t-h1-page" style={{ margin: "0 0 24px", color: "#fff", maxWidth: "15ch" }}>
            Construindo tradição desde o começo.
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "60ch" }}>
            A história da FAC é curta — e é isso que a torna especial. Estamos
            registrando o início enquanto ele acontece. Cada capítulo daqui vira
            memória para as próximas gerações do CEAP.
          </p>
        </Container>
      </section>

      {/* ===== LINHA DO TEMPO ===== */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <div className="container-fac" style={{ maxWidth: 1000 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {capitulos.map((c) => (
              <article key={c.titulo} style={{ display: "grid", gridTemplateColumns: `${TRILHO} 1fr`, gap: GAP }}>
                {/* trilho */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                  <span
                    aria-hidden="true"
                    style={{ width: 20, height: 20, borderRadius: "50%", background: "var(--color-ice)", border: "3px solid #0066FF", boxShadow: "0 0 0 5px rgba(0,102,255,0.10)", flexShrink: 0, marginTop: 4 }}
                  />
                  <span aria-hidden="true" style={{ width: 2, flex: 1, background: "linear-gradient(#0066FF, #C0C0C0)" }} />
                </div>
                {/* conteúdo */}
                <div style={{ paddingBottom: "clamp(56px, 9vh, 100px)" }}>
                  <Reveal as="span" style={{ display: "inline-block", fontFamily: "var(--font-graduate)", fontSize: 13, letterSpacing: "2.4px", color: "#fff", background: "#0066FF", padding: "6px 12px", marginBottom: 18 }}>
                    {c.quando}
                  </Reveal>
                  <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 14px", fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 0.95, color: "var(--color-text-strong)" }}>
                    {c.titulo}
                  </Reveal>
                  <Reveal as="p" style={{ margin: "0 0 24px", fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "62ch" }}>
                    {c.descricao}
                  </Reveal>
                  {c.slotId && c.slotLabel && (
                    <Reveal as="figure" style={{ margin: 0 }}>
                      <ImageSlot label={c.slotLabel} ratio="4/5" className="max-w-[480px]" />
                      <figcaption style={{ fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--color-on-navy-mute)", marginTop: 10 }}>
                        {c.legenda}
                      </figcaption>
                    </Reveal>
                  )}
                </div>
              </article>
            ))}

            {/* marco AGORA */}
            <article style={{ display: "grid", gridTemplateColumns: `${TRILHO} 1fr`, gap: GAP }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <span
                  aria-hidden="true"
                  className="fac-now-dot"
                  style={{ width: 22, height: 22, borderRadius: "50%", background: "#0066FF", border: "3px solid var(--color-ice)", boxShadow: "0 0 0 4px rgba(0,102,255,0.35)", flexShrink: 0, marginTop: 3, animation: "facPulse 2.2s ease-out infinite" }}
                />
              </div>
              <div style={{ paddingBottom: "clamp(40px, 6vh, 72px)" }}>
                <Reveal as="span" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-graduate)", fontSize: 13, letterSpacing: "2.4px", color: "#fff", background: "#0066FF", padding: "6px 12px", marginBottom: 18 }}>
                  HOJE · 2026{" "}
                  <span style={{ fontFamily: "var(--font-montserrat)", fontSize: 9, fontWeight: 700, letterSpacing: "1.6px", color: "#0066FF", background: "#fff", padding: "3px 7px" }}>AGORA</span>
                </Reveal>
                <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 14px", fontSize: "clamp(34px, 5vw, 62px)", lineHeight: 0.95, color: "var(--color-text-strong)" }}>
                  Registrando o início
                </Reveal>
                <Reveal as="p" style={{ margin: 0, fontSize: 15, lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "62ch" }}>
                  É aqui que estamos agora: a FAC em movimento, construindo
                  estrutura, identidade e o esporte do CEAP — e registrando cada
                  passo enquanto ele acontece. O que fizermos deste ponto em
                  diante vira o próximo capítulo.
                </Reveal>
              </div>
            </article>
          </div>

          <Reveal style={{ border: "1px dashed var(--color-silver)", padding: "clamp(28px, 4vh, 44px) clamp(20px, 3vw, 40px)", textAlign: "center" }}>
            <p className="t-bebas" style={{ margin: "0 0 8px", fontSize: "clamp(28px, 3.6vw, 44px)", lineHeight: 1, color: "var(--color-text-strong)" }}>
              O próximo capítulo é escrito agora.
            </p>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: "var(--color-text-2)" }}>
              Este espaço existe de propósito. O que a FAC fizer a seguir entra aqui.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ===== FECHO ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(72px, 12vh, 130px) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
          <div>
            <Reveal as="h2" className="t-h2" style={{ margin: "0 0 16px", color: "#fff", lineHeight: 0.94 }}>
              Não é nostalgia pronta. É tradição em construção.
            </Reveal>
            <Reveal as="p" style={{ margin: 0, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "52ch" }}>
              O que parece pequeno hoje é o começo do que as próximas gerações
              vão chamar de tradição.
            </Reveal>
          </div>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <Link href="/projetos" className="btn-solid">Ver o que estamos construindo</Link>
            <Link href="/equipe" className="link-arrow" style={{ color: "#fff" }}>
              Quem constrói <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

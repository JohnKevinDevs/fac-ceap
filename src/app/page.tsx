import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import ImageSlot from "@/components/ImageSlot";
import { site, href, isExternal } from "@/content/site";
import { homeMarcos } from "@/content/marcos";

// Home — narrativa em 9 capítulos (README §6.1).
const indice = [
  { num: "01", palavra: "Esporte", desc: "A quadra como ponto de encontro.", azul: false },
  { num: "02", palavra: "Encontros", desc: "Gente do CEAP inteiro no mesmo lugar.", azul: false },
  { num: "03", palavra: "Rivalidade saudável", desc: "Competir aproxima em vez de dividir.", azul: false },
  { num: "04", palavra: "Pertencimento", desc: "Sentir que se faz parte de algo maior.", azul: false },
  { num: "05", palavra: "Memória", desc: "Cada registro de hoje vira amanhã.", azul: true },
];

const pilares = [
  { num: "01", nome: "Esporte", azul: false },
  { num: "02", nome: "Cultura", azul: false },
  { num: "03", nome: "Pertencimento", azul: false },
  { num: "04", nome: "Memória", azul: false },
  { num: "05", nome: "Legado", azul: true },
];

const copaFotos = [
  { id: "home-copa-1", label: "FOTO — jogo da Copa CEAP", cap: "Em quadra" },
  { id: "home-copa-2", label: "FOTO — torcida / arquibancada", cap: "Torcida" },
  { id: "home-copa-3", label: "FOTO — bastidores / organização", cap: "Bastidores" },
];

const focusTitle = "BID — o esporte ganha casa";
const focusSummary =
  "O produto irmão que registra atletas, times, modalidades e resultados do CEAP.";

export default function Home() {
  const bid = href(site.bidUrl);
  const bidProps = isExternal(site.bidUrl)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <>
      {/* ============ CAP 01 — A FAC EXISTE (hero) ============ */}
      <section
        style={{
          position: "relative",
          minHeight: "min(72vh, 720px)",
          display: "flex",
          alignItems: "flex-end",
          background: "var(--color-navy)",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 90% at 15% 0%, #002A44 0%, #001B2A 60%)",
          }}
        />
        <Container
          style={{
            position: "relative",
            zIndex: 2,
            paddingTop: "clamp(72px, 12vh, 132px)",
            paddingBottom: "clamp(40px, 7vh, 72px)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 22 }}>
            <span aria-hidden="true" style={{ width: 42, height: 2, background: "#0066FF", display: "block" }} />
            <span className="t-graduate" style={{ fontSize: 12, letterSpacing: "3px", color: "var(--color-silver)" }}>
              FAC · CEAP
            </span>
          </div>
          <h1 className="t-h1" style={{ margin: 0, color: "#fff", maxWidth: "13ch" }}>
            Uma escola. Grandes talentos. Um legado.
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: 24, marginTop: 32, flexWrap: "wrap" }}>
            <Link href="/sobre" className="btn-solid">
              Conheça a FAC
            </Link>
            <span style={{ fontSize: 13, fontWeight: 500, color: "rgba(255,255,255,0.75)", letterSpacing: "0.4px" }}>
              A entidade esportiva e cultural do CEAP.
            </span>
          </div>
        </Container>
      </section>

      {/* ============ CAP 02 — O CEAP ALÉM DA SALA ============ */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(36px, 5vh, 64px) 0 clamp(72px, 12vh, 140px)" }}>
        <Container>
          <Reveal>
            <SectionLabel num="02" label="O CEAP acontece além da sala" />
          </Reveal>
          <Reveal
            as="h2"
            className="t-bebas"
            style={{ margin: "0 0 20px", color: "var(--color-text-strong)", maxWidth: "18ch", fontSize: "clamp(42px, 6.4vw, 92px)", lineHeight: 0.95, textWrap: "balance" }}
          >
            Existe uma energia que não cabe só na sala de aula.
          </Reveal>
          <Reveal
            as="p"
            style={{ margin: "0 0 56px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "62ch" }}
          >
            Esporte, encontros, rivalidade saudável, cultura e memória também
            fazem a vida estudantil. É nos corredores, nas quadras e na torcida
            que uma parte do CEAP acontece — e merece ser vivida e registrada.
          </Reveal>
          <Reveal style={{ borderTop: "2px solid var(--color-text-strong)" }}>
            {indice.map((it, i) => (
              <div
                key={it.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(56px, 88px) 1fr auto",
                  alignItems: "baseline",
                  gap: "12px clamp(20px, 4vw, 56px)",
                  padding: "clamp(16px, 2.6vh, 26px) 0",
                  borderBottom:
                    i === indice.length - 1
                      ? "2px solid var(--color-text-strong)"
                      : "1px solid var(--color-border-mid)",
                }}
              >
                <span className="t-graduate" style={{ fontSize: 13, letterSpacing: "1.5px", color: "#0066FF" }}>
                  {it.num}
                </span>
                <span className="t-bebas" style={{ fontSize: "clamp(30px, 4.6vw, 62px)", lineHeight: 0.9, color: it.azul ? "#0066FF" : "var(--color-text-strong)" }}>
                  {it.palavra}
                </span>
                <span style={{ fontSize: 12, lineHeight: 1.5, color: "var(--color-text-3)", textAlign: "right", maxWidth: "22ch", justifySelf: "end" }}>
                  {it.desc}
                </span>
              </div>
            ))}
          </Reveal>
          <Reveal
            as="p"
            style={{ margin: "26px 0 0", fontSize: 12, fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: "var(--color-text-3)" }}
          >
            Legado em movimento — cada registro de hoje é a memória de amanhã.
          </Reveal>
        </Container>
      </section>

      {/* ============ CAP 03 — A FAC NASCEU PARA ORGANIZAR ============ */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)" }}>
          <div>
            <Reveal>
              <SectionLabel num="03" label="A organização" />
            </Reveal>
            <Reveal as="h2" className="t-h2" style={{ margin: 0, color: "var(--color-text-strong)" }}>
              A FAC nasceu para organizar essa energia.
            </Reveal>
          </div>
          <div style={{ alignSelf: "end" }}>
            <Reveal as="p" style={{ margin: "0 0 18px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.75, color: "var(--color-text-body)" }}>
              A Federação Atlética CEAP é a entidade esportiva e cultural do
              CEAP. Ela existe para fortalecer a cultura estudantil, gerar
              pertencimento real, canalizar a energia coletiva em projetos e
              tradições, criar competição saudável e registrar memórias entre
              gerações.
            </Reveal>
            <Reveal as="p" style={{ margin: "0 0 28px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.75, color: "var(--color-text-body)", fontWeight: 600 }}>
              A FAC transforma movimento em pertencimento e memória.
            </Reveal>
            <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))", borderTop: "1px solid var(--color-border-light)" }}>
              {pilares.map((p, i) => (
                <div
                  key={p.num}
                  style={{
                    padding: i === 0 ? "20px 12px 0 0" : i === pilares.length - 1 ? "20px 0 0 12px" : "20px 12px 0",
                    borderLeft: i === 0 ? undefined : "1px solid var(--color-border-light)",
                  }}
                >
                  <span className="t-graduate" style={{ display: "block", fontSize: 11, letterSpacing: "1.5px", color: "#0066FF", marginBottom: 8 }}>
                    {p.num}
                  </span>
                  <span className="t-bebas" style={{ display: "block", fontSize: "clamp(17px, 1.9vw, 22px)", lineHeight: 1, color: p.azul ? "#0066FF" : "var(--color-text-strong)" }}>
                    {p.nome}
                  </span>
                </div>
              ))}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ CAP 04 — COPA CEAP ============ */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(72px, 12vh, 140px) 0", position: "relative", overflow: "hidden" }}>
        <div
          aria-hidden="true"
          className="t-graduate"
          style={{ position: "absolute", top: 0, right: -60, fontSize: "clamp(160px, 26vw, 380px)", lineHeight: 1, color: "rgba(255,255,255,0.04)", pointerEvents: "none", userSelect: "none" }}
        >
          01
        </div>
        <Container style={{ position: "relative" }}>
          <Reveal>
            <SectionLabel num="04" label="Copa CEAP" tone="onNavy" />
          </Reveal>
          <Reveal as="h2" className="t-h2-lg" style={{ margin: "0 0 20px", color: "#fff", maxWidth: "14ch" }}>
            Nosso primeiro grande capítulo.
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 48px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "60ch" }}>
            A Copa CEAP foi a primeira grande atuação prática da FAC — a primeira
            prova de que a organização consegue fazer acontecer. Foi ali que
            ideia virou ação: organização, bastidores, jogos, torcida e registro.
          </Reveal>
          <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 14, marginBottom: 40 }}>
            {copaFotos.map((f) => (
              <figure key={f.id} style={{ margin: 0 }}>
                <ImageSlot label={f.label} ratio="4/5" />
                <figcaption style={{ fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--color-on-navy-mute)", marginTop: 10 }}>
                  {f.cap}
                </figcaption>
              </figure>
            ))}
          </Reveal>
          <Reveal>
            <Link href="/projetos" className="link-arrow" style={{ color: "#fff" }}>
              Ver a Copa CEAP em Projetos <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ============ CAP 05 — O QUE ESTAMOS CONSTRUINDO AGORA ============ */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal>
            <SectionLabel num="05" label="Projetos" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "end" }}>
            <div>
              <Reveal as="h2" className="t-h2" style={{ margin: "0 0 20px", color: "var(--color-text-strong)" }}>
                O que estamos construindo agora.
              </Reveal>
              <Reveal as="p" style={{ margin: "0 0 28px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "50ch" }}>
                Isso não acabou quando a Copa terminou. A FAC segue em movimento —
                estruturando a organização, a identidade e o esporte para durar
                além de uma única gestão.
              </Reveal>
              <Reveal>
                <Link href="/projetos" className="link-arrow" style={{ color: "var(--color-text-strong)" }}>
                  Ver todos os projetos <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
            <Reveal style={{ borderLeft: "3px solid #0066FF", padding: "4px 0 4px clamp(20px, 3vw, 32px)" }}>
              <span style={{ display: "block", fontSize: 10, fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", color: "#0066FF", marginBottom: 12 }}>
                Em foco agora
              </span>
              <span className="t-bebas" style={{ display: "block", fontSize: "clamp(30px, 4vw, 52px)", lineHeight: 0.98, color: "var(--color-text-strong)", marginBottom: 10 }}>
                {focusTitle}
              </span>
              <span style={{ display: "block", fontSize: 14, lineHeight: 1.65, color: "var(--color-text-2)", maxWidth: "44ch" }}>
                {focusSummary}
              </span>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ CAP 06 — QUEM CONSTRÓI ============ */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container>
          <Reveal>
            <SectionLabel num="06" label="Equipe" />
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "end" }}>
            <div>
              <Reveal as="h2" className="t-h2" style={{ margin: "0 0 16px", color: "var(--color-text-strong)" }}>
                Feita por alunos. Para a comunidade do CEAP.
              </Reveal>
              <Reveal as="p" style={{ margin: "0 0 28px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "46ch" }}>
                A FAC é construída por estudantes reais — que organizam, planejam,
                erram, acertam e fazem acontecer.
              </Reveal>
              <Reveal>
                <Link href="/equipe" className="link-arrow" style={{ color: "var(--color-text-strong)" }}>
                  Conhecer a equipe <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
            <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
              <ImageSlot label="FOTO — equipe em ação" ratio="4/5" />
              <p style={{ margin: 0, fontSize: 11, letterSpacing: "1.6px", textTransform: "uppercase", color: "var(--color-on-navy-mute)" }}>
                Equipe FAC em contexto real — reunião, montagem ou bastidores
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* ============ CAP 07 — ISSO ESTÁ SÓ COMEÇANDO ============ */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal>
            <SectionLabel num="07" label="História" />
          </Reveal>
          <Reveal as="h2" className="t-h2" style={{ margin: "0 0 12px", color: "var(--color-text-strong)" }}>
            Isso está só começando.
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 48px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "56ch" }}>
            A história da FAC é recente — e isso é força, não fraqueza. O que
            acontece agora vira história depois. Estamos registrando o início
            enquanto ele acontece.
          </Reveal>
          <Reveal style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", borderTop: "2px solid var(--color-text-strong)" }}>
            {homeMarcos.map((m) => (
              <div key={m.titulo} style={{ padding: "24px clamp(12px, 2vw, 28px) 24px 0", borderRight: "1px solid var(--color-border-mid)" }}>
                <span className="t-graduate" style={{ display: "block", fontSize: 13, letterSpacing: "2px", color: m.destaque ? "var(--color-on-navy-mute)" : "#0066FF", marginBottom: 12 }}>
                  {m.quando}
                </span>
                <span className="t-bebas" style={{ display: "block", fontSize: 26, lineHeight: 1, color: "var(--color-text-strong)", marginBottom: 8 }}>
                  {m.titulo}
                </span>
                <span style={{ display: "block", fontSize: 12.5, lineHeight: 1.6, color: "var(--color-text-2)" }}>
                  {m.descricao}
                </span>
              </div>
            ))}
          </Reveal>
          <Reveal>
            <Link href="/historia" className="link-arrow" style={{ color: "var(--color-text-strong)", marginTop: 40 }}>
              Ler a história completa <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </Container>
      </section>

      {/* ============ CAP 08 — PONTE PARA O BID ============ */}
      <section style={{ background: "#0066FF", padding: "clamp(72px, 12vh, 130px) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)", alignItems: "center" }}>
          <div>
            <Reveal>
              <SectionLabel num="08" label="BID · Produto irmão" tone="onBlue" />
            </Reveal>
            <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 16px", color: "#fff", fontSize: "clamp(42px, 6vw, 88px)", lineHeight: 0.94, textWrap: "balance" }}>
              O esporte tem seu próprio espaço.
            </Reveal>
            <Reveal as="p" style={{ margin: 0, fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "rgba(255,255,255,0.88)", maxWidth: "50ch" }}>
              O Site FAC conta a organização. O BID — Banco de Informações
              Desportivas — registra o esporte: atletas, times, modalidades,
              regulamentos e resultados vivem lá.
            </Reveal>
          </div>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "flex-start" }}>
            <a
              href={bid}
              {...bidProps}
              className="bid-big"
              style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: "var(--font-bebas)", fontSize: "clamp(26px, 3vw, 38px)", color: "#0066FF", background: "#fff", textDecoration: "none", padding: "18px 34px", lineHeight: 1 }}
            >
              Acessar o BID <span aria-hidden="true" style={{ fontSize: "0.8em" }}>↗</span>
            </a>
            <span style={{ fontSize: 12, letterSpacing: "1.4px", textTransform: "uppercase", color: "rgba(255,255,255,0.7)" }}>
              Atletas · Times · Modalidades · Resultados
            </span>
          </Reveal>
        </Container>
      </section>

      {/* ============ CAP 09 — ENCERRAMENTO ============ */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(96px, 16vh, 180px) 0 clamp(72px, 10vh, 120px)", textAlign: "center" }}>
        <div className="container-fac" style={{ maxWidth: 1000 }}>
          <Reveal as="p" className="t-bebas" style={{ margin: "0 0 24px", color: "#fff", fontSize: "clamp(44px, 7vw, 100px)", lineHeight: 0.95, textWrap: "balance" }}>
            Uma escola. Grandes talentos. Um legado.
          </Reveal>
          <Reveal as="p" style={{ margin: 0, fontSize: 13, fontWeight: 600, letterSpacing: "2.6px", textTransform: "uppercase", color: "var(--color-silver)" }}>
            CEAP além da sala. FAC além do esporte.
          </Reveal>
        </div>
      </section>
    </>
  );
}

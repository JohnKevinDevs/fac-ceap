import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/Container";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Sobre — FAC · Federação Atlética CEAP",
  description:
    "Sobre a FAC — a entidade esportiva e cultural do CEAP: missão, visão, valores e como a organização se estrutura.",
};

const razoes = [
  { num: "01", title: "Fortalecer a cultura estudantil", desc: "Fortalecer a cultura estudantil interna do CEAP." },
  { num: "02", title: "Gerar pertencimento real", desc: "Fazer com que cada aluno sinta que faz parte de algo maior que a sala de aula." },
  { num: "03", title: "Canalizar a energia coletiva", desc: "Transformar energia em projetos, eventos e tradições." },
  { num: "04", title: "Criar competição saudável", desc: "Rivalidade positiva que aproxima em vez de dividir." },
  { num: "05", title: "Registrar memórias", desc: "Construir continuidade entre gerações — o que acontece agora vira história depois." },
];

const naoE = [
  "Não é uma comissão temporária da Copa CEAP.",
  "Não é apenas esporte.",
  "Não é uma fanpage ou perfil de divulgação.",
  "Não é uma empresa ou startup.",
];

const fundamentos = [
  { titulo: "Missão", texto: "Representar o esporte, a cultura e a identidade dos alunos do CEAP, criando um espaço de pertencimento, competição saudável e construção de legado." },
  { titulo: "Visão", texto: "Ser a referência de cultura estudantil dentro do CEAP — uma federação que cresce, evolui e deixa marca em cada geração de alunos." },
  { titulo: "Valores", texto: "União · Identidade · Competição saudável · Futuro · Legado · Profissionalismo · Orgulho." },
];

const camadas = [
  { tag: "02 · CONSULTIVO", titulo: "Conselho Estratégico", desc: "Grupo consultivo (3 a 5 pessoas) que orienta as grandes decisões — sem fazer parte da execução do dia a dia.", borderTop: "3px solid #C0C0C0", tagColor: "var(--color-on-navy-mute)" },
  { tag: "03 · EXECUÇÃO", titulo: "Diretorias & Comissões", desc: "Cinco áreas executam a FAC — Eventos, Marketing, Esportes, Cultura e Engajamento, Administração e Operações.", borderTop: "3px solid #0066FF", tagColor: "#0066FF" },
  { tag: "04 · CONEXÃO", titulo: "Representantes de Núcleo", desc: "A voz dos cursos (ECI / EPT) dentro da estrutura — articulam a federação com turmas e clubes.", borderTop: "3px solid #0066FF", tagColor: "#0066FF" },
];

export default function Sobre() {
  return (
    <>
      {/* ===== ABERTURA ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(40px, 7vh, 84px) 0 clamp(64px, 10vh, 120px)" }}>
        <Container>
          <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 28 }}>
            <span aria-hidden="true" style={{ width: 42, height: 2, background: "#0066FF", display: "block" }} />
            <span className="t-label" style={{ color: "var(--color-on-navy-mute)" }}>Sobre a FAC</span>
          </div>
          <h1 className="t-h1-page" style={{ margin: "0 0 24px", color: "#fff", maxWidth: "16ch" }}>
            A entidade esportiva e cultural do CEAP.
          </h1>
          <p style={{ margin: 0, fontSize: "clamp(16px, 1.5vw, 20px)", lineHeight: 1.7, color: "var(--color-on-navy)", maxWidth: "62ch" }}>
            A Federação Atlética CEAP existe para representar esporte, cultura
            estudantil, integração, competição saudável, identidade e construção
            de legado. Atua como marca-mãe, conectando cursos, turmas, projetos,
            eventos e tradições sob uma mesma bandeira.
          </p>
        </Container>
      </section>

      {/* ===== POR QUE A FAC EXISTE ===== */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 48px", color: "var(--color-text-strong)", fontSize: "clamp(38px, 5vw, 72px)", lineHeight: 0.95 }}>
            Por que a FAC existe
          </Reveal>
          <div style={{ borderTop: "2px solid var(--color-text-strong)" }}>
            {razoes.map((r) => (
              <Reveal
                key={r.num}
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(60px, 120px) 1fr",
                  gap: "clamp(16px, 4vw, 60px)",
                  alignItems: "baseline",
                  padding: "28px 0",
                  borderBottom: "1px solid var(--color-border-mid)",
                }}
              >
                <span className="t-graduate" style={{ fontSize: "clamp(18px, 2.4vw, 28px)", color: "#0066FF" }}>{r.num}</span>
                <div>
                  <span className="t-bebas" style={{ display: "block", fontSize: "clamp(24px, 3vw, 38px)", lineHeight: 1, color: "var(--color-text-strong)", marginBottom: 8 }}>{r.title}</span>
                  <span style={{ display: "block", fontSize: 14, lineHeight: 1.65, color: "var(--color-text-2)", maxWidth: "66ch" }}>{r.desc}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== MISSÃO / VISÃO / VALORES ===== */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container>
          <Reveal>
            <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 40 }}>
              <span aria-hidden="true" style={{ width: 42, height: 1, background: "var(--color-silver)", display: "block" }} />
              <span className="t-label" style={{ color: "var(--color-text-3)" }}>Fundamentos</span>
            </div>
          </Reveal>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "clamp(28px, 4vw, 56px)" }}>
            {fundamentos.map((f) => (
              <Reveal key={f.titulo}>
                <h2 className="t-bebas" style={{ margin: "0 0 14px", fontSize: "clamp(30px, 3.4vw, 46px)", lineHeight: 1, color: "var(--color-text-strong)" }}>{f.titulo}</h2>
                <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.7, color: "var(--color-text-2)", borderLeft: "2px solid #0066FF", paddingLeft: 18 }}>{f.texto}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== O QUE A FAC NÃO É ===== */}
      <section style={{ background: "var(--color-navy)", padding: "clamp(72px, 12vh, 130px) 0" }}>
        <Container style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(32px, 5vw, 80px)" }}>
          <Reveal as="h2" className="t-h2" style={{ margin: 0, color: "#fff" }}>
            O que a FAC não é.
          </Reveal>
          <Reveal style={{ display: "flex", flexDirection: "column", gap: 0, borderTop: "1px solid rgba(192,192,192,0.25)" }}>
            {naoE.map((n) => (
              <div key={n} style={{ display: "flex", alignItems: "baseline", gap: 18, padding: "18px 0", borderBottom: "1px solid rgba(192,192,192,0.18)" }}>
                <span aria-hidden="true" className="t-graduate" style={{ fontSize: 13, color: "#0066FF" }}>✕</span>
                <span style={{ fontSize: "clamp(14px, 1.4vw, 17px)", lineHeight: 1.6, color: "var(--color-on-navy)" }}>{n}</span>
              </div>
            ))}
            <p style={{ margin: "22px 0 0", fontSize: 14, lineHeight: 1.7, color: "var(--color-on-navy-mute)" }}>
              A FAC não substitui o CEAP. Ela amplia o orgulho e a vida
              estudantil dentro da instituição.
            </p>
          </Reveal>
        </Container>
      </section>

      {/* ===== COMO A FAC SE ORGANIZA ===== */}
      <section style={{ background: "var(--color-ice)", padding: "clamp(72px, 12vh, 140px) 0" }}>
        <Container>
          <Reveal as="h2" className="t-bebas" style={{ margin: "0 0 16px", color: "var(--color-text-strong)", fontSize: "clamp(38px, 5vw, 72px)", lineHeight: 0.95 }}>
            Como a FAC se organiza
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 48px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "62ch" }}>
            A FAC funciona como entidade-mãe: uma Presidência que representa e
            decide, Diretorias que executam e Representantes de Núcleo que
            conectam a federação aos cursos e turmas — com um Conselho
            Estratégico que orienta as grandes decisões. Enxuta para funcionar
            com poucos; estruturada para crescer.
          </Reveal>
          <Reveal style={{ maxWidth: 1000 }}>
            <div style={{ background: "var(--color-navy)", padding: "24px clamp(20px, 3vw, 40px)", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <span className="t-graduate" style={{ fontSize: 12, letterSpacing: "2px", color: "#0066FF", whiteSpace: "nowrap" }}>01 · PRESIDÊNCIA</span>
              <span className="t-bebas" style={{ fontSize: "clamp(24px, 2.6vw, 34px)", color: "#fff", lineHeight: 1 }}>Representação e decisão final</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 12 }}>
              {camadas.map((c) => (
                <div key={c.tag} style={{ display: "flex", flexDirection: "column", background: "#fff", border: "1px solid var(--color-border-mid)", borderTop: c.borderTop, padding: 24 }}>
                  <span className="t-graduate" style={{ fontSize: 11, letterSpacing: "2px", color: c.tagColor, marginBottom: 14 }}>{c.tag}</span>
                  <span className="t-bebas" style={{ fontSize: 24, color: "var(--color-text-strong)", lineHeight: 1, marginBottom: 10 }}>{c.titulo}</span>
                  <span style={{ fontSize: 13, lineHeight: 1.6, color: "var(--color-text-2)" }}>{c.desc}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* ===== FECHO ===== */}
      <section style={{ background: "#fff", padding: "clamp(72px, 12vh, 140px) 0", borderTop: "1px solid var(--color-border-light)" }}>
        <Container>
          <Reveal as="p" className="t-bebas" style={{ margin: "0 0 20px", color: "var(--color-text-strong)", fontSize: "clamp(36px, 5vw, 68px)", lineHeight: 0.97, maxWidth: "22ch", textWrap: "balance" }}>
            Tradição dos brasões esportivos. Modernidade tecnológica do CEAP.
          </Reveal>
          <Reveal as="p" style={{ margin: "0 0 36px", fontSize: "clamp(15px, 1.4vw, 18px)", lineHeight: 1.7, color: "var(--color-text-body)", maxWidth: "60ch" }}>
            A FAC é nova — e é exatamente por isso que cada capítulo importa. A
            tradição está sendo construída agora.
          </Reveal>
          <Reveal style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Link href="/historia" className="btn-navy">Nossa história</Link>
            <Link href="/projetos" className="btn-outline">O que construímos</Link>
          </Reveal>
        </Container>
      </section>
    </>
  );
}

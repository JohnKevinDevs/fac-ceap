import Link from "next/link";
import Image from "next/image";
import { site, href, isExternal } from "@/content/site";

// Bloco de Contato + Footer (README §5.2).
function externalProps(value: string) {
  return isExternal(value)
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};
}

export default function Footer() {
  const bid = href(site.bidUrl);
  const instagram = href(site.instagramUrl);
  const contact = href(site.contactHref);

  return (
    <>
      {/* ===== Bloco Contato ===== */}
      <section
        aria-label="Contato"
        style={{
          background: "var(--color-navy)",
          borderTop: "1px solid rgba(192,192,192,0.15)",
          padding: "clamp(64px, 11vh, 130px) 0",
        }}
      >
        <div
          className="container-fac"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "clamp(28px, 5vw, 72px)",
            alignItems: "end",
          }}
        >
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 14,
                marginBottom: 22,
              }}
            >
              <span
                aria-hidden="true"
                style={{
                  width: 42,
                  height: 2,
                  background: "#0066FF",
                  display: "block",
                }}
              />
              <span
                className="t-label"
                style={{ color: "var(--color-on-navy-mute)" }}
              >
                Contato
              </span>
            </div>
            <h2
              className="t-bebas"
              style={{
                margin: "0 0 16px",
                color: "#fff",
                fontSize: "clamp(38px, 5.4vw, 76px)",
                lineHeight: 0.95,
                textWrap: "balance",
              }}
            >
              Faça parte do que estamos construindo.
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: "clamp(15px, 1.4vw, 18px)",
                lineHeight: 1.7,
                color: "var(--color-on-navy)",
                maxWidth: "48ch",
              }}
            >
              Quer jogar, organizar, registrar ou apoiar? Fale com a FAC — a
              próxima página da nossa história pode ser sua.
            </p>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              alignItems: "center",
            }}
          >
            <a href={contact} {...externalProps(site.contactHref)} className="btn-solid">
              Falar com a FAC
            </a>
            <a
              href={instagram}
              {...externalProps(site.instagramUrl)}
              className="btn-ig-outline"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                padding: "15px 26px",
                border: "1px solid rgba(192,192,192,0.4)",
              }}
            >
              Instagram ↗
            </a>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer
        style={{
          background: "var(--color-navy-dark)",
          borderTop: "1px solid rgba(192,192,192,0.15)",
          padding: "clamp(48px, 8vh, 80px) 0 40px",
        }}
      >
        <div className="container-fac">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "40px clamp(40px, 8vw, 120px)",
              justifyContent: "space-between",
              marginBottom: 48,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                alignItems: "flex-start",
              }}
            >
              <Image
                src="/fac-logo.png"
                alt="Escudo da FAC"
                width={77}
                height={72}
                style={{ display: "block" }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "var(--color-silver)",
                }}
              >
                Federação Atlética CEAP
              </span>
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "40px clamp(40px, 6vw, 90px)",
              }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    color: "var(--color-text-3)",
                  }}
                >
                  Navegar
                </span>
                <FootLink href="/sobre">Sobre</FootLink>
                <FootLink href="/projetos">Projetos</FootLink>
                <FootLink href="/historia">História</FootLink>
                <FootLink href="/equipe">Equipe</FootLink>
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    color: "var(--color-text-3)",
                  }}
                >
                  Conectar
                </span>
                <a
                  href={instagram}
                  {...externalProps(site.instagramUrl)}
                  className="foot-link"
                  style={footLinkStyle}
                >
                  Instagram
                </a>
                <a
                  href={contact}
                  {...externalProps(site.contactHref)}
                  className="foot-link"
                  style={footLinkStyle}
                >
                  Contato
                </a>
                <a
                  href={bid}
                  {...externalProps(site.bidUrl)}
                  className="foot-link-bid"
                  style={{ ...footLinkStyle, color: "#fff", fontWeight: 700 }}
                >
                  BID ↗
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              borderTop: "1px solid rgba(192,192,192,0.12)",
              paddingTop: 24,
              display: "flex",
              flexWrap: "wrap",
              gap: "12px 32px",
              justifyContent: "space-between",
              alignItems: "baseline",
            }}
          >
            <span
              className="t-bebas"
              style={{ fontSize: 20, color: "#fff", letterSpacing: "0.5px" }}
            >
              Uma escola. Grandes talentos. Um legado.
            </span>
            <span
              style={{
                fontSize: 11,
                letterSpacing: "1.6px",
                textTransform: "uppercase",
                color: "#98A9B4",
              }}
            >
              CEAP além da sala. FAC além do esporte.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

const footLinkStyle: React.CSSProperties = {
  fontSize: 13,
  fontWeight: 500,
  color: "var(--color-silver)",
};

function FootLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link href={href} className="foot-link" style={footLinkStyle}>
      {children}
    </Link>
  );
}

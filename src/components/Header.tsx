"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navItems, activeKey } from "@/content/nav";
import { site, href, isExternal } from "@/content/site";

// Header sticky (README §5.1). Desktop >=880px: nav inline. Mobile <880px:
// menu hambúrguer com estado real (useState) — barras animam para "X",
// fecha ao clicar em link.
export default function Header() {
  const pathname = usePathname();
  const active = activeKey(pathname);

  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 880px)");
    const update = () => {
      setIsMobile(mq.matches);
      if (!mq.matches) setMenuOpen(false);
    };
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const bid = href(site.bidUrl);
  const bidExternal = isExternal(site.bidUrl);
  const bidRel = bidExternal ? "noopener noreferrer" : undefined;
  const bidTarget = bidExternal ? "_blank" : undefined;

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        background: "var(--color-navy)",
        borderBottom: "1px solid rgba(192,192,192,0.18)",
      }}
    >
      <div
        className="container-fac"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          minHeight: 68,
        }}
      >
        {/* Marca */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
            padding: "10px 0",
            minWidth: 0,
          }}
        >
          <Image
            src="/fac-logo.png"
            alt="Escudo da FAC"
            width={45}
            height={42}
            style={{ display: "block", flexShrink: 0 }}
            priority
          />
          <span
            className="t-graduate"
            style={{ fontSize: 21, color: "#fff", letterSpacing: "2px" }}
          >
            FAC
          </span>
          <span
            style={{
              fontSize: 10,
              fontWeight: 600,
              letterSpacing: "2.2px",
              color: "var(--color-silver)",
              textTransform: "uppercase",
            }}
          >
            Federação Atlética CEAP
          </span>
        </Link>

        {/* Nav desktop */}
        {!isMobile && (
          <nav
            aria-label="Navegação principal"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(14px, 2.2vw, 30px)",
            }}
          >
            {navItems.map((n) => {
              const isActive = n.key === active;
              return (
                <Link
                  key={n.key}
                  href={n.href}
                  aria-current={isActive ? "page" : undefined}
                  className="nav-link"
                  style={{
                    fontSize: 12,
                    fontWeight: isActive ? 700 : 600,
                    letterSpacing: "1.8px",
                    textTransform: "uppercase",
                    color: isActive ? "#fff" : "var(--color-silver)",
                    textDecoration: "none",
                    padding: "6px 0",
                    borderBottom: `2px solid ${isActive ? "#0066FF" : "transparent"}`,
                  }}
                >
                  {n.label}
                </Link>
              );
            })}
            <a
              href={bid}
              target={bidTarget}
              rel={bidRel}
              className="nav-bid"
              style={{
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "1.8px",
                textTransform: "uppercase",
                color: "#fff",
                textDecoration: "none",
                padding: "8px 16px",
                border: "1px solid #0066FF",
                background: "rgba(0,102,255,0.12)",
              }}
            >
              BID ↗
            </a>
          </nav>
        )}

        {/* Botão hambúrguer mobile */}
        {isMobile && (
          <button
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((o) => !o)}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: 5,
              width: 44,
              height: 44,
              padding: "0 10px",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                display: "block",
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "transform 0.25s ease, opacity 0.2s ease",
                transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "opacity 0.2s ease",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                display: "block",
                height: 2,
                background: "#fff",
                borderRadius: 2,
                transition: "transform 0.25s ease",
                transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        )}
      </div>

      {/* Painel mobile */}
      {isMobile && menuOpen && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="container-fac"
          style={{
            background: "var(--color-navy)",
            borderTop: "1px solid rgba(192,192,192,0.15)",
            paddingTop: 12,
            paddingBottom: 28,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {navItems.map((n) => {
            const isActive = n.key === active;
            return (
              <Link
                key={n.key}
                href={n.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
                className="t-bebas"
                style={{
                  fontSize: 34,
                  lineHeight: 1,
                  letterSpacing: "0.5px",
                  color: isActive ? "#0066FF" : "#fff",
                  textDecoration: "none",
                  padding: "16px 0",
                  borderBottom: "1px solid rgba(192,192,192,0.12)",
                }}
              >
                {n.label}
              </Link>
            );
          })}
          <a
            href={bid}
            target={bidTarget}
            rel={bidRel}
            onClick={() => setMenuOpen(false)}
            style={{
              marginTop: 22,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontSize: 13,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#fff",
              textDecoration: "none",
              padding: "15px 20px",
              background: "#0066FF",
            }}
          >
            BID ↗
          </a>
        </nav>
      )}
    </header>
  );
}

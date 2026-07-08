"use client";

import type { CSSProperties, ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

// Tags suportadas pelo Reveal (mapeadas p/ componentes motion no escopo do módulo).
const MOTION = {
  div: motion.div,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  p: motion.p,
  span: motion.span,
  article: motion.article,
  figure: motion.figure,
  section: motion.section,
  ul: motion.ul,
  li: motion.li,
} as const;

type Tag = keyof typeof MOTION;

/**
 * Reveal on scroll (README §8): opacity 0→1 + translateY(18px)→0, .7s ease,
 * disparado uma vez ao entrar na viewport (~12% visível).
 * Respeita prefers-reduced-motion — renderiza estático, mantendo estilos.
 */
export default function Reveal({
  children,
  as = "div",
  className,
  style,
  delay = 0,
}: {
  children: ReactNode;
  as?: Tag;
  className?: string;
  style?: CSSProperties;
  delay?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) {
    const Tag = as;
    return (
      <Tag className={className} style={style}>
        {children}
      </Tag>
    );
  }

  const MotionTag = MOTION[as];
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
    >
      {children}
    </MotionTag>
  );
}

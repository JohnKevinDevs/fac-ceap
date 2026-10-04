"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "framer-motion";

// Com reducedMotion="user", quem pede menos movimento no sistema não vê
// deslocamentos; o conteúdo continua aparecendo.
export default function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

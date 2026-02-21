"use client";

import React from "react";

export interface PremiumGlassProps {
  children: React.ReactNode;
  /** Applied to the outer wrapper. Use for rounded-[...], max-w, etc. Radius is inherited by glass layers. */
  className?: string;
  /** Light theme (white glass, dark content). Default false = dark/black glass (white content) — e.g. on hero. */
  light?: boolean;
}

/**
 * Premium glassmorphism (Apple-style). On hero: black bar, white content. When scrolled: white bar, black content.
 * Strong backdrop-blur so content passing behind the nav is distorted/frosted in a sweet way.
 */
export function PremiumGlass({
  children,
  className = "",
  light = false,
}: PremiumGlassProps): JSX.Element {
  const border = light
    ? "border border-white/40"
    : "border border-white/[0.28]";
  const topHighlight = light
    ? "from-white/30 via-white/5 to-transparent"
    : "from-white/15 via-white/[0.04] to-transparent";
  const shadow = light
    ? "shadow-[0_8px_32px_rgba(0,0,0,0.08),0_2px_8px_rgba(0,0,0,0.04)]"
    : "shadow-[0_8px_32px_rgba(0,0,0,0.25),0_2px_8px_rgba(0,0,0,0.14)]";
  const insetEdge = light
    ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.08)]"
    : "shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-1px_0_rgba(255,255,255,0.05)]";

  return (
    <div
      className={`group relative w-full min-w-0 overflow-hidden rounded-[inherit] transition-shadow duration-300 ease-out hover:shadow-[var(--premium-glass-hover)] ${shadow} ${className}`}
      style={
        {
          "--premium-glass-hover": light
            ? "0 12px 40px rgba(0,0,0,0.1), 0 4px 12px rgba(0,0,0,0.06)"
            : "0 12px 40px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.18)",
        } as React.CSSProperties
      }
    >
      {/* Blur layer: no isolate on parent so backdrop = page content. Minimal bg + translateZ(0) force compositing so blur runs. */}
      <div
        className="absolute inset-0 rounded-[inherit] pointer-events-none [transform:translateZ(0)]"
        style={{
          backdropFilter: "blur(40px) saturate(1.6)",
          WebkitBackdropFilter: "blur(40px) saturate(1.6)",
          backgroundColor: "rgba(255,255,255,0.04)",
        }}
        aria-hidden
      />
      {/* Tint: on hero = black bar (white content). When scrolled = white bar (black content). */}
      <div
        className={`absolute inset-0 rounded-[inherit] pointer-events-none ${border} ${
          light ? "bg-white/75" : "bg-black/65"
        }`}
        aria-hidden
      />

      {/* LIGHTING: top highlight gradient (subtle opacity shift on hover) */}
      <div
        className={`absolute inset-0 rounded-[inherit] bg-gradient-to-b ${topHighlight} opacity-90 pointer-events-none transition-opacity duration-300 ease-out group-hover:opacity-100`}
        aria-hidden
      />

      {/* LIGHTING: inner edge highlights */}
      <div
        className={`absolute inset-0 rounded-[inherit] pointer-events-none ${insetEdge}`}
        aria-hidden
      />

      {/* REALISM: subtle noise overlay */}
      <div
        className="absolute inset-0 rounded-[inherit] opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
        aria-hidden
      />

      {/* Content: same stacking context, pointer events pass through */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

export default PremiumGlass;

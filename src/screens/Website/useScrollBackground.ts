import { useLayoutEffect, useRef, useCallback } from "react";
import { useScroll, useTransform } from "motion/react";
import type { MotionValue } from "motion/react";
import { SCROLL_BACKGROUND_SECTIONS } from "./scrollBackgroundConfig";

/** Interpolate between two hex colors. t in [0, 1]. */
function lerpHex(start: string, end: string, t: number): string {
  const parse = (hex: string) => {
    const h = hex.replace("#", "");
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  };
  const [r1, g1, b1] = parse(start);
  const [r2, g2, b2] = parse(end);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const blue = Math.round(b1 + (b2 - b1) * t);
  return `rgb(${r},${g},${blue})`;
}

function getSectionTops(): { tops: number[]; colors: string[] } {
  const tops: number[] = [];
  const colors: string[] = [];

  for (const { id, color } of SCROLL_BACKGROUND_SECTIONS) {
    const el = document.getElementById(id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    const top = rect.top + window.scrollY;
    tops.push(top);
    colors.push(color);
  }

  if (tops.length === 0) {
    tops.push(0);
    colors.push(SCROLL_BACKGROUND_SECTIONS[0]?.color ?? "#0c0c0c");
  }

  return { tops, colors };
}

/** Transition zone (px) before each boundary — blend completes before next section appears. */
const TRANSITION_ZONE = 120;

/**
 * Returns background color based on viewport center.
 * - Fixes to each section's exact color when viewing that section.
 * - Transition happens BEFORE the boundary so Philosophy (and dark sections) are black when visible.
 * - Other sections do not affect the current color.
 */
function interpolateColor(
  scrollY: number,
  viewportHeight: number,
  tops: number[],
  colors: string[]
): string {
  if (tops.length !== colors.length || tops.length === 0) return colors[0] ?? "#0c0c0c";
  if (tops.length === 1) return colors[0];

  const viewportCenter = scrollY + viewportHeight / 2;

  if (viewportCenter <= tops[0]) return colors[0];
  if (viewportCenter >= tops[tops.length - 1]) return colors[colors.length - 1];

  for (let i = 0; i < tops.length - 1; i++) {
    const boundary = tops[i + 1];
    const zoneStart = boundary - TRANSITION_ZONE;
    const zoneEnd = boundary;

    if (viewportCenter < zoneStart) {
      return colors[i];
    }
    if (viewportCenter > zoneEnd) {
      continue;
    }
    const t = (viewportCenter - zoneStart) / (zoneEnd - zoneStart);
    return lerpHex(colors[i], colors[i + 1], t);
  }

  return colors[colors.length - 1];
}

/**
 * Returns a motion value for the scroll-driven background color.
 * Uses useScroll + useTransform for GPU-friendly, flicker-free interpolation.
 */
export function useScrollBackground(): MotionValue<string> {
  const { scrollY } = useScroll();
  const breakpointsRef = useRef<{ tops: number[]; colors: string[] }>({ tops: [0], colors: ["#0c0c0c"] });

  const measure = useCallback(() => {
    breakpointsRef.current = getSectionTops();
  }, []);

  useLayoutEffect(() => {
    measure();

    // Re-measure after layout settles (images, fonts, etc.)
    const t = setTimeout(measure, 150);

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    const scrollRoot = document.documentElement;
    resizeObserver.observe(scrollRoot);

    window.addEventListener("resize", measure);

    return () => {
      clearTimeout(t);
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  return useTransform(() => {
    const scroll = scrollY.get();
    const { tops, colors } = breakpointsRef.current;
    return interpolateColor(scroll, window.innerHeight, tops, colors);
  });
}

/** Boundary between trusted-by and philosophy — when past this, Trusted section text becomes white. */
const PHILOSOPHY_BOUNDARY_ID = "philosophy-content";
/** Smooth transition zone (px) — interpolate instead of binary switch to prevent flicker. */
const TRUSTED_TRANSITION_ZONE = 80;

/**
 * Returns motion values for Trusted section: text turns white when entering Philosophy (dark) zone.
 * Uses smooth interpolation over a zone to prevent flickering.
 */
export function useTrustedSectionColors(): {
  textColor: MotionValue<string>;
  logoFilter: MotionValue<string>;
} {
  const { scrollY } = useScroll();
  const boundaryRef = useRef<number>(0);

  const measure = useCallback(() => {
    const el = document.getElementById(PHILOSOPHY_BOUNDARY_ID);
    if (el) {
      const rect = el.getBoundingClientRect();
      boundaryRef.current = rect.top + window.scrollY;
    }
  }, []);

  useLayoutEffect(() => {
    measure();
    const t = setTimeout(measure, 150);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(t);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const textColor = useTransform(() => {
    const viewportCenter = scrollY.get() + window.innerHeight / 2;
    const boundary = boundaryRef.current;
    const zoneStart = boundary - TRUSTED_TRANSITION_ZONE;
    const zoneEnd = boundary;

    if (viewportCenter <= zoneStart) return "#000000";
    if (viewportCenter >= zoneEnd) return "#ffffff";
    const t = (viewportCenter - zoneStart) / (zoneEnd - zoneStart);
    return lerpHex("#000000", "#ffffff", t);
  });

  const logoFilter = useTransform(() => {
    const viewportCenter = scrollY.get() + window.innerHeight / 2;
    const boundary = boundaryRef.current;
    const zoneStart = boundary - TRUSTED_TRANSITION_ZONE;
    const zoneEnd = boundary;
    const zoneMid = (zoneStart + zoneEnd) / 2;

    if (viewportCenter <= zoneMid) return "none";
    return "invert(1)";
  });

  return { textColor, logoFilter };
}

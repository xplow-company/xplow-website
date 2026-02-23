/**
 * Scroll-based background color configuration.
 * Each entry defines a DOM element (by id) and its target background color.
 * Order matches document flow — used to interpolate colors during scroll.
 */
export const SCROLL_BACKGROUND_SECTIONS = [
  { id: "hero", color: "#0c0c0c" },
  { id: "about", color: "#111111" },
  { id: "trusted-by", color: "#FFFFFF" },
  { id: "philosophy-content", color: "#111111" },
  { id: "services", color: "#0c0c0c" },
  { id: "process", color: "#111111" },
  { id: "work", color: "#0c0c0c" },
  { id: "who-we-are", color: "#111111" },
  { id: "faq", color: "#0c0c0c" },
  { id: "lets-build", color: "#FFFFFF" },
  { id: "founders", color: "#0a0a0a" },
  { id: "footer", color: "#000000" },
] as const;

export type ScrollBackgroundSection = (typeof SCROLL_BACKGROUND_SECTIONS)[number];

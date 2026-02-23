import { motion } from "motion/react";
import { useScrollBackground } from "./useScrollBackground";

/**
 * Fixed full-viewport background that animates color based on scroll.
 * Renders behind content; sections should use bg-transparent.
 */
export function ScrollBackground(): JSX.Element {
  const backgroundColor = useScrollBackground();

  return (
    <motion.div
      aria-hidden
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ backgroundColor }}
    />
  );
}

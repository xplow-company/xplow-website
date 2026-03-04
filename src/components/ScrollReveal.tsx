import { motion } from "motion/react";

const PREMIUM_EASING = [0.16, 1, 0.3, 1] as const; // smooth ease-out-expo

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  /** How much of the element must be visible to trigger (0–1). Default 0.08 */
  amount?: number;
  /** Vertical offset in px before reveal. Default 32 */
  yOffset?: number;
  /** Animation duration in seconds. Default 0.85 */
  duration?: number;
  /** Stagger delay for children (when using staggerChildren). Default 0 */
  delay?: number;
  /** Whether to animate only once. Default true */
  once?: boolean;
}

export const ScrollReveal = ({
  children,
  className = "",
  amount = 0.08,
  yOffset = 36,
  duration = 0.85,
  delay = 0,
  once = true,
}: ScrollRevealProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once,
        amount,
        margin: "0px 0px -8% 0px",
      }}
      transition={{
        duration,
        delay,
        ease: PREMIUM_EASING,
      }}
    >
      {children}
    </motion.div>
  );
};

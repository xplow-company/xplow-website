import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import splashSvg from "@/assets/splash.svg";

const EASE_PREMIUM = [0.16, 1, 0.3, 1] as const;
const REVEAL_DURATION = 2;
const REVEAL_DELAY = 0;
const FADE_OUT_DELAY = 2;
const FADE_OUT_DURATION = 2;

export interface SplashScreenProps {
  visible?: boolean;
  onComplete?: () => void;
  fadeOutDelay?: number;
}

export const SplashScreen = ({
  visible = true,
  onComplete,
  fadeOutDelay = FADE_OUT_DELAY,
}: SplashScreenProps): JSX.Element => {
  const [shouldFadeOut, setShouldFadeOut] = useState(false);

  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      setShouldFadeOut(true);
      onComplete?.();
    }, fadeOutDelay * 1000);
    return () => clearTimeout(t);
  }, [visible, fadeOutDelay, onComplete]);

  const handleExitComplete = () => onComplete?.();

  return (
    <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: shouldFadeOut ? 0 : 1 }}
          transition={{
            duration: FADE_OUT_DURATION,
            ease: EASE_PREMIUM,
          }}
          exit={{ opacity: 0, transition: { duration: 0.2 } }}
        >
          <div className="relative flex flex-col items-center justify-center gap-[11px]">
            {/* Top slice — starts at center (1), moves up to reveal (3) */}
            <motion.div
              className="h-7 w-[232px] overflow-hidden sm:h-8 sm:w-[280px]"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: REVEAL_DURATION,
                delay: REVEAL_DELAY,
                ease: EASE_PREMIUM,
              }}
            >
              <img
                src={splashSvg}
                alt=""
                className="h-[200%] w-full object-top object-contain"
                aria-hidden
              />
            </motion.div>

            {/* Center — full XPLOW visible from the start (the "1") */}
            <motion.div
              className="flex h-[42px] w-[232px] shrink-0 items-center justify-center sm:h-[52px] sm:w-[280px]"
              initial={{ opacity: 1, scale: 1 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0 }}
            >
              <img
                src={splashSvg}
                alt="XPLOW"
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Bottom slice — starts at center (1), moves down to reveal (3) */}
            <motion.div
              className="relative h-7 w-[232px] overflow-hidden sm:h-8 sm:w-[280px]"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{
                duration: REVEAL_DURATION,
                delay: REVEAL_DELAY,
                ease: EASE_PREMIUM,
              }}
            >
              <img
                src={splashSvg}
                alt=""
                className="absolute bottom-0 left-0 h-[200%] w-full object-bottom object-contain"
                aria-hidden
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

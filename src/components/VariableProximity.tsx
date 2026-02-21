import {
  forwardRef,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type RefObject,
} from "react";
import { motion } from "motion/react";
import "./VariableProximity.css";

function useAnimationFrame(callback: () => void) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;
  useEffect(() => {
    let frameId: number;
    const loop = () => {
      callbackRef.current();
      frameId = requestAnimationFrame(loop);
    };
    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, []);
}

function useMousePositionRef(containerRef: RefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (ev: MouseEvent) =>
      updatePosition(ev.clientX, ev.clientY);
    const handleTouchMove = (ev: TouchEvent) => {
      const touch = ev.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

export interface VariableProximityProps
  extends React.HTMLAttributes<HTMLSpanElement> {
  label: string;
  fromFontVariationSettings?: string;
  toFontVariationSettings?: string;
  containerRef?: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: "linear" | "exponential" | "gaussian";
  onClick?: () => void;
  style?: React.CSSProperties;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>(
  (
    {
      label,
      fromFontVariationSettings = "'wght' 400, 'opsz' 9",
      toFontVariationSettings = "'wght' 1000, 'opsz' 40",
      containerRef,
      radius = 50,
      falloff = "linear",
      className = "",
      onClick,
      style,
      ...restProps
    },
    ref
  ) => {
    const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const interpolatedSettingsRef = useRef<string[]>([]);
    const rootRef = useRef<HTMLSpanElement | null>(null);
    const rulerRef = useRef<HTMLSpanElement | null>(null);
    const [minWidthPx, setMinWidthPx] = useState<number | null>(null);
    const mousePositionRef = useMousePositionRef(containerRef ?? { current: null });
    const lastPositionRef = useRef<{ x: number; y: number | null }>({
      x: 0,
      y: null,
    });

    const parsedSettings = useMemo(() => {
      const parseSettings = (settingsStr: string) =>
        new Map(
          settingsStr
            .split(",")
            .map((s) => s.trim())
            .map((s) => {
              const parts = s.split(" ");
              const name = parts[0].replace(/['"]/g, "");
              const value = parseFloat(parts[1] ?? "400");
              return [name, value] as const;
            })
        );

      const fromSettings = parseSettings(fromFontVariationSettings);
      const toSettings = parseSettings(toFontVariationSettings);

      return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
        axis,
        fromValue,
        toValue: toSettings.get(axis) ?? fromValue,
      }));
    }, [fromFontVariationSettings, toFontVariationSettings]);

    const calculateDistance = useCallback(
      (x1: number, y1: number, x2: number, y2: number) =>
        Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2),
      []
    );

    const calculateFalloff = useCallback(
      (distance: number) => {
        const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
        switch (falloff) {
          case "exponential":
            return norm ** 2;
          case "gaussian":
            return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
          case "linear":
          default:
            return norm;
        }
      },
      [radius, falloff]
    );

    useAnimationFrame(() => {
      if (!containerRef?.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const { x, y } = mousePositionRef.current;
      if (
        lastPositionRef.current.x === x &&
        lastPositionRef.current.y === y
      ) {
        return;
      }
      lastPositionRef.current = { x, y };

      letterRefs.current.forEach((letterRef, index) => {
        if (!letterRef) return;

        const rect = letterRef.getBoundingClientRect();
        const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
        const letterCenterY = rect.top + rect.height / 2 - containerRect.top;

        const distance = calculateDistance(x, y, letterCenterX, letterCenterY);

        if (distance >= radius) {
          letterRef.style.fontVariationSettings = fromFontVariationSettings;
          return;
        }

        const falloffValue = calculateFalloff(distance);
        const newSettings = parsedSettings
          .map(
            ({ axis, fromValue, toValue }) =>
              `'${axis}' ${fromValue + (toValue - fromValue) * falloffValue}`
          )
          .join(", ");

        interpolatedSettingsRef.current[index] = newSettings;
        letterRef.style.fontVariationSettings = newSettings;
      });
    });

    useLayoutEffect(() => {
      const ruler = rulerRef.current;
      if (!ruler) return;
      const w = ruler.offsetWidth;
      if (w > 0) setMinWidthPx(w);
    }, [label, toFontVariationSettings, className]);

    const words = label.split(" ");
    let letterIndex = 0;

    return (
      <span
        ref={(el) => {
          rootRef.current = el;
          if (typeof ref === "function") ref(el);
          else if (ref) (ref as React.MutableRefObject<HTMLSpanElement | null>).current = el;
        }}
        className={`variable-proximity ${className}`.trim()}
        onClick={onClick}
        style={{
          display: "inline",
          minWidth: minWidthPx != null ? `${minWidthPx}px` : undefined,
          ...style,
        }}
        {...restProps}
      >
        <span
          ref={rulerRef}
          aria-hidden
          className="variable-proximity absolute left-0 top-0 whitespace-nowrap opacity-0 pointer-events-none invisible"
          style={{ fontVariationSettings: toFontVariationSettings }}
        >
          {label}
        </span>
        {words.map((word, wordIndex) => (
          <span
            key={wordIndex}
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {word.split("").map((letter, i) => {
              const currentLetterIndex = letterIndex++;
              return (
                <motion.span
                  key={currentLetterIndex}
                  ref={(el) => {
                    letterRefs.current[currentLetterIndex] = el;
                  }}
                  style={{
                    display: "inline-block",
                    fontVariationSettings:
                      interpolatedSettingsRef.current[currentLetterIndex] ??
                      fromFontVariationSettings,
                  }}
                  aria-hidden
                >
                  {letter}
                </motion.span>
              );
            })}
            {wordIndex < words.length - 1 && (
              <span style={{ display: "inline-block" }}>&nbsp;</span>
            )}
          </span>
        ))}
        <span className="sr-only">{label}</span>
      </span>
    );
  }
);

VariableProximity.displayName = "VariableProximity";
export default VariableProximity;

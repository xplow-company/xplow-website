"use client";

import { useEffect, useRef, useState } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiSketch,
  SiFramer,
} from "react-icons/si";
import { MenuIcon, XIcon } from "lucide-react";
import { gsap } from "gsap";
import arrowIcon from "@/assets/arrow.svg";
import xplowLogo from "../../../../assets/xplow.svg";
import { ErrorBoundary } from "../../../../components/ErrorBoundary";
import { LogoLoop } from "../../../../components/LogoLoop";
import Silk from "../../../../components/Silk";
import VariableProximity from "../../../../components/VariableProximity";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import type { LogoItem } from "../../../../components/LogoLoop";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Who We Are", href: "#founders" },
  { label: "Work", href: "#work" },
];

const techLogos: LogoItem[] = [
  { node: <SiReact className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiFigma className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Figma", href: "https://www.figma.com" },
  { node: <SiSketch className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Sketch", href: "https://www.sketch.com" },
  { node: <SiFramer className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Framer", href: "https://www.framer.com" },
];

const HeroBackgroundFallback = () => (
  <div
    className="absolute inset-0 w-full h-full min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] -rotate-180 opacity-90"
    style={{
      background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26, 24, 25, 0.9) 0%, transparent 50%), linear-gradient(180deg, #1a1819 0%, #0c0c0c 100%)",
    }}
    aria-hidden
  />
);

const EASE = "power2.easeOut";

const heroBeamKeyframes = `
  @keyframes hero-beam-spin {
    to { transform: rotate(360deg); }
  }
`;

export const HeroSection = (): JSX.Element => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headlineContainerRef = useRef<HTMLDivElement>(null);
  const letsBuildCircleRef = useRef<HTMLSpanElement>(null);
  const letsBuildTlRef = useRef<gsap.core.Timeline | null>(null);
  const letsBuildActiveTweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const runLayout = () => {
      const circle = letsBuildCircleRef.current;
      if (!circle?.parentElement) return;

      const pill = circle.parentElement as HTMLElement;
      const rect = pill.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;
      const R = (w * w) / 4 + h * h;
      const Rval = R / (2 * h);
      const D = Math.ceil(2 * Rval) + 2;
      const delta =
        Math.ceil(
          Rval - Math.sqrt(Math.max(0, Rval * Rval - (w * w) / 4))
        ) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      const label = pill.querySelector<HTMLElement>(".lets-build-pill-label");
      const hoverLabel = pill.querySelector<HTMLElement>(
        ".lets-build-pill-label-hover"
      );

      if (label) gsap.set(label, { y: 0 });
      if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

      letsBuildTlRef.current?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(
        circle,
        {
          scale: 1.2,
          xPercent: -50,
          duration: 2,
          ease: EASE,
          overwrite: "auto",
        },
        0
      );

      if (label) {
        tl.to(
          label,
          { y: -(h + 8), duration: 2, ease: EASE, overwrite: "auto" },
          0
        );
      }

      if (hoverLabel) {
        gsap.set(hoverLabel, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(
          hoverLabel,
          { y: 0, opacity: 1, duration: 2, ease: EASE, overwrite: "auto" },
          0
        );
      }

      letsBuildTlRef.current = tl;
    };

    runLayout();
    window.addEventListener("resize", runLayout);
    if (document.fonts?.ready) {
      document.fonts.ready.then(runLayout).catch(() => {});
    }
    return () => window.removeEventListener("resize", runLayout);
  }, []);

  const handleLetsBuildEnter = () => {
    const tl = letsBuildTlRef.current;
    if (!tl) return;
    letsBuildActiveTweenRef.current?.kill();
    letsBuildActiveTweenRef.current = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease: EASE,
      overwrite: "auto",
    });
  };

  const handleLetsBuildLeave = () => {
    const tl = letsBuildTlRef.current;
    if (!tl) return;
    letsBuildActiveTweenRef.current?.kill();
    letsBuildActiveTweenRef.current = tl.tweenTo(0, {
      duration: 0.2,
      ease: EASE,
      overwrite: "auto",
    });
  };

  return (
    <section id="hero" className="relative w-full h-auto min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] rotate-180 overflow-hidden bg-transparent">
      <div className="absolute inset-0 w-full h-full min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] -rotate-180">
        <ErrorBoundary fallback={<HeroBackgroundFallback />}>
          <Silk speed={6.2} scale={1.5} color="#fb1849" noiseIntensity={1.4} rotation={0} />
        </ErrorBoundary>
      </div>

      <div className="relative z-10 flex flex-col min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] px-5 md:px-5 lg:px-8 pt-[28px] pb-5 md:py-16 lg:py-20 -rotate-180 safe-area-padding min-w-0">
        <nav
          className="group/nav relative z-[2] mx-auto w-full max-w-[1148px] rounded-full px-4 sm:px-6 py-2 flex items-center justify-between gap-4 bg-black mb-5 -mt-[10px] md:-mt-[42px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] transition-colors duration-300 ease-out hover:bg-white"
          aria-label="Main navigation"
        >
          <a href="#hero" className="flex shrink-0 items-center gap-1.5 px-[4px] min-h-[40px]" aria-label="Xplow home">
            <span className="flex shrink-0 w-[26px] sm:w-[28px] overflow-hidden">
              <img src={xplowLogo} alt="" className="h-[20px] sm:h-[23px] w-[95px] max-w-none object-contain object-left block transition-[filter] duration-300 ease-out group-hover/nav:invert" aria-hidden />
            </span>
            <span className="[font-family:'Clash_Display',sans-serif] font-medium leading-none block translate-y-px uppercase tracking-tight text-[20px] sm:text-[24px] text-white transition-colors duration-300 ease-out group-hover/nav:text-black">
              XPLOW
            </span>
          </a>
          <div className="hidden md:flex shrink-0 items-center gap-1">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="h-8 px-4 font-medium text-sm tracking-[0.13px] leading-[19.5px] [font-family:'Inter',Helvetica] whitespace-nowrap rounded-full transition-colors duration-300 ease-out text-white hover:bg-white/10 group-hover/nav:text-black group-hover/nav:hover:bg-black/10"
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full -mr-1 text-white transition-colors duration-300 ease-out group-hover/nav:text-black"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XIcon className="w-5 h-5" />
            ) : (
              <MenuIcon className="w-5 h-5" />
            )}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 rounded-2xl py-4 px-4 shadow-lg md:hidden bg-black flex flex-col gap-1">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl font-medium text-sm [font-family:'Inter',Helvetica] transition-colors text-white hover:bg-white/10"
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}
        </nav>
        <div className="flex-1 flex flex-col items-center justify-center pt-4 mt-[24px] md:pt-6">
          <div className="-translate-y-[4vh] sm:-translate-y-[6vh] lg:-translate-y-[8vh] mt-[10px]">
          <div className="flex flex-col items-center max-w-[883px] w-full space-y-8 sm:space-y-10 lg:space-y-12 translate-y-[-1rem] animate-fade-in opacity-0 min-w-0">
          <Badge
            variant="outline"
            className="h-8 sm:h-9 px-3 sm:px-4 flex items-center gap-2 sm:gap-2.5 bg-[#000000ab] rounded-full border border-[#ffffff0f] shadow-[inset_0px_4px_4px_#000000] hover:bg-[#000000ab] [--animation-delay:0ms] translate-y-[-1rem] animate-fade-in opacity-0"
          >
            <div className="relative w-1.5 h-1.5">
              <div className="absolute top-[-3px] left-[-3px] w-[11px] h-[11px] bg-green-500 rounded-full opacity-[0.06]" />
              <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-green-500 rounded-full" />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-[10px] sm:text-[11.94px] tracking-[0.36px] leading-[17.91px] whitespace-nowrap">
              Currently accepting projects
            </span>
          </Badge>

          <div
            ref={headlineContainerRef}
            className="flex flex-col items-center gap-3 sm:gap-5 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0 w-full max-w-[883px] min-w-0"
            style={{ position: "relative" }}
          >
            <h1 className="flex items-center justify-center gap-2 sm:gap-5 w-full text-center min-w-0">
              <VariableProximity
                label="We Build What"
                containerRef={headlineContainerRef}
                fromFontVariationSettings="'wght' 600, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                radius={120}
                falloff="linear"
                className="font-black text-white tracking-[-0.02em] leading-[1.12] text-center min-w-0 break-words text-[clamp(1.5rem,6.5vw,2rem)] sm:text-[clamp(2rem,8vw,2.75rem)] md:text-[clamp(2.5rem,9vw,64px)] lg:text-[78px] sm:tracking-[-2.65px]"
              />
            </h1>

            <h2 className="flex items-center justify-center w-full text-center min-w-0">
              <VariableProximity
                label="Others Compete Against."
                containerRef={headlineContainerRef}
                fromFontVariationSettings="'wght' 600, 'opsz' 9"
                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                radius={120}
                falloff="linear"
                className="font-black text-white tracking-[-0.02em] leading-[1.12] text-center min-w-0 break-words text-[32px] sm:text-[clamp(2rem,8vw,2.75rem)] md:text-[clamp(2.5rem,9vw,62px)] lg:text-[78px] sm:tracking-[-2.65px] md:whitespace-nowrap"
              />
            </h2>
          </div>

          <p className="w-full max-w-[883px] [font-family:'Inter',Helvetica] font-medium text-[#dddddd] text-center tracking-[0] leading-[1.65] sm:leading-[28px] break-words min-w-0 [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0 text-[clamp(0.875rem,2.5vw,1rem)] sm:text-[15px] md:text-[16px] lg:text-[17.91px] px-5 md:px-0">
          We partner with ambitious founders to design brand systems, digital products, and growth infrastructure engineered for authority, clarity, and measurable impact.
          </p>

          {/* Mobile & Tablet: Let's Build CTA only — centered, 20px vertical margin */}
          <div className="md:hidden flex justify-center items-center my-5 [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <Button
              asChild
              className="h-12 min-h-[48px] px-6 bg-white hover:bg-[#f5f5f5] text-[#0b0b0d] rounded-full [font-family:'Space_Grotesk',Helvetica] font-bold text-[14px] tracking-[0.02em] border-0 shadow-none"
            >
              <a
                href="mailto:team@xplow.in"
                className="relative overflow-hidden inline-flex items-center justify-center h-full gap-2 no-underline"
              >
                Let&apos;s Build
                <img src={arrowIcon} className="w-5 h-5 ml-1.5" alt="" aria-hidden />
              </a>
            </Button>
          </div>

          {/* Desktop: Full input area + CTA with smooth white beam */}
          <div className="hidden md:block w-full max-w-[571px] min-w-0 [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <style>{heroBeamKeyframes}</style>
            <div className="relative w-full rounded-full overflow-hidden p-[2px]">
              {/* Smooth white beam — soft gradient, 4s linear spin */}
              <div
                className="absolute inset-[-100%] will-change-transform"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, transparent 200deg, rgba(255,255,255,0.15) 230deg, rgba(255,255,255,0.45) 255deg, rgba(255,255,255,0.9) 275deg, rgb(255,255,255) 285deg, rgba(255,255,255,0.9) 295deg, rgba(255,255,255,0.45) 315deg, rgba(255,255,255,0.15) 340deg, transparent 360deg)",
                  animation: "hero-beam-spin 4s linear infinite",
                }}
              />
              <div className="absolute inset-[2px] rounded-full bg-[#0d0d0d]" />
              <div className="relative z-10 flex flex-row w-full rounded-full overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.04)]">
                <div className="flex-1 flex items-center min-h-[60px] pl-6 pr-4 py-0">
                  <span className="[font-family:'Inter',Helvetica] font-medium text-[#9ca3af] text-[15px] tracking-[0.02em] leading-[1.4]">
                    What are we building together?
                  </span>
                </div>
                <div className="shrink-0 p-2 pr-2.5 py-2">
                <Button
                  asChild
                  className="w-auto h-11 px-5 bg-white hover:bg-[#f5f5f5] text-[#0b0b0d] rounded-full [font-family:'Space_Grotesk',Helvetica] font-bold text-[15px] tracking-[0.02em] border-2 border-transparent hover:border-[#ff1f4f] shadow-none transition-colors duration-200"
                >
                  <a
                    href="mailto:team@xplow.in"
                    className="relative overflow-hidden inline-flex items-center justify-center h-full gap-2 no-underline"
                    onMouseEnter={handleLetsBuildEnter}
                    onMouseLeave={handleLetsBuildLeave}
                  >
                    <span
                      className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none [backface-visibility:hidden] [transform:translateZ(0)]"
                      style={{ background: "#0b0b0d", willChange: "transform" }}
                      aria-hidden
                      ref={letsBuildCircleRef}
                    />
                    <span className="label-stack relative inline-flex items-center z-[2]">
                      <span className="lets-build-pill-label relative z-[2] inline-flex items-center" style={{ willChange: "transform" }}>
                        Let&apos;s Build
                        <img src={arrowIcon} className="w-[22px] h-[22px] ml-1.5" alt="" aria-hidden />
                      </span>
                      <span className="lets-build-pill-label-hover absolute left-0 top-0 z-[3] inline-flex items-center text-white" style={{ willChange: "transform, opacity" }} aria-hidden>
                        Let&apos;s Build
                        <img src={arrowIcon} className="w-[22px] h-[22px] ml-1.5 invert" alt="" aria-hidden />
                      </span>
                    </span>
                  </a>
                </Button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
        </div>

        <div className="w-full flex-shrink-0 min-h-[44px] sm:min-h-[52px] pb-5 md:pb-8">
          <LogoLoop
            logos={techLogos}
            speed={80}
            direction="left"
            logoHeight={32}
            hoverSpeed={0}
            scaleOnHover
            ariaLabel="Technology partners"
          />
        </div>
      </div>
    </section>
  );
};

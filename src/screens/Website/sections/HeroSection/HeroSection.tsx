"use client";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";
import arrowIcon from "@/assets/arrow.svg";
import { ErrorBoundary } from "../../../../components/ErrorBoundary";
import { LogoLoop } from "../../../../components/LogoLoop";
import Silk from "../../../../components/Silk";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import type { LogoItem } from "../../../../components/LogoLoop";

const techLogos: LogoItem[] = [
  { node: <SiReact className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss className="text-white w-7 h-7 sm:w-9 sm:h-9" />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
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

export const HeroSection = (): JSX.Element => {
  return (
    <section id="hero" className="relative w-full h-auto min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] rotate-180 overflow-hidden bg-[#0c0c0c]">
      <div className="absolute inset-0 w-full h-full min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] -rotate-180">
        <ErrorBoundary fallback={<HeroBackgroundFallback />}>
          <Silk speed={6.2} scale={1.5} color="#fb1849" noiseIntensity={1.4} rotation={0} />
        </ErrorBoundary>
      </div>

      <div className="relative z-10 flex flex-col min-h-[100dvh] sm:min-h-[700px] lg:min-h-[1058px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pt-[calc(3.5rem+1vh)] -rotate-180">
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="-translate-y-[4vh] sm:-translate-y-[6vh] lg:-translate-y-[8vh]">
          <div className="flex flex-col items-center max-w-[883px] w-full space-y-8 sm:space-y-10 lg:space-y-12 translate-y-[-1rem] animate-fade-in opacity-0">
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

          <div className="flex flex-col items-center gap-3 sm:gap-5 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <h1 className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[52px] md:text-[62px] lg:text-[78px] tracking-[-0.02em] sm:tracking-[-2.65px] leading-[1.1] sm:leading-[81.69px] text-center">
                We Build Brands
              </span>
            </h1>

            <h2 className="flex flex-wrap items-center justify-center gap-2 sm:gap-5">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[52px] md:text-[62px] lg:text-[78px] tracking-[-0.02em] sm:tracking-[-2.65px] leading-[1.1] sm:leading-[81.69px] text-center">
                That
              </span>
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[52px] md:text-[62px] lg:text-[78px] tracking-[-0.01em] sm:tracking-[-1.00px] leading-[1.1] sm:leading-[81.69px] text-center">
                Feel Inevitable.
              </span>
            </h2>
          </div>

          <p className="w-full max-w-[883px] [font-family:'Inter',Helvetica] font-medium text-[#dddddd] text-[14px] sm:text-[16px] lg:text-[17.91px] text-center tracking-[0] leading-[1.5] sm:leading-[25.87px] px-1 [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
          Strategy-led brand systems and digital products designed to earn attention, build authority, and scale with precision.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between min-h-[58px] w-full max-w-[571px] gap-3 sm:gap-4 bg-[#000000ab] rounded-full border border-[#ffffff0f] shadow-[inset_0px_4px_4px_#000000] p-4 sm:pl-6 sm:pr-[0.5%] sm:py-0 [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-white text-[14px] sm:text-[16px] lg:text-[18px] tracking-[0.13px] leading-[19.40px] text-center sm:text-left opacity-[0.93]">
              What are we building together?
            </span>

            <Button
              asChild
              className="shrink-0 h-11 sm:h-12 px-4 sm:px-[21px] bg-white hover:bg-white/90 text-[#0b0b0d] rounded-full [font-family:'Space_Grotesk',Helvetica] font-bold text-[14px] sm:text-[15.92px] tracking-[0.13px] transition-transform hover:scale-105 self-center sm:ml-auto"
            >
              <a href="mailto:team@xplow.in">
                Let&apos;s Build
                <img
                  src={arrowIcon}
                  className="w-6 h-6 sm:w-[29px] sm:h-[29px] ml-1"
                  alt=""
                  aria-hidden
                />
              </a>
            </Button>
          </div>
          </div>
        </div>
        </div>

        <div className="w-full flex-shrink-0 min-h-[44px] sm:min-h-[52px] pb-6 sm:pb-8">
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

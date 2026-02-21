"use client";

import arrowIcon from "@/assets/arrow.svg";
import { ErrorBoundary } from "../../../../components/ErrorBoundary";
import Silk from "../../../../components/Silk";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const HeroBackgroundFallback = () => (
  <div
    className="absolute inset-0 w-full h-full min-h-[1058px] -rotate-180 opacity-90"
    style={{
      background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26, 24, 25, 0.9) 0%, transparent 50%), linear-gradient(180deg, #1a1819 0%, #0c0c0c 100%)",
    }}
    aria-hidden
  />
);

export const HeroSection = (): JSX.Element => {
  return (
    <section id="hero" className="relative w-full h-auto min-h-[1058px] rotate-180 overflow-hidden bg-[#0c0c0c]">
      <div className="absolute inset-0 w-full h-full min-h-[1058px] -rotate-180">
        <ErrorBoundary fallback={<HeroBackgroundFallback />}>
          <Silk speed={5} scale={1} color="#ff1f4f" noiseIntensity={1.5} rotation={0} />
        </ErrorBoundary>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[1058px] px-4 py-20 -rotate-180">
        <div className="flex flex-col items-center max-w-[883px] w-full space-y-12 translate-y-[-1rem] animate-fade-in opacity-0">
          <Badge
            variant="outline"
            className="h-9 px-4 flex items-center gap-2.5 bg-[#000000ab] rounded-full border border-[#ffffff0f] shadow-[inset_0px_4px_4px_#000000] hover:bg-[#000000ab] [--animation-delay:0ms] translate-y-[-1rem] animate-fade-in opacity-0"
          >
            <div className="relative w-1.5 h-1.5">
              <div className="absolute top-[-3px] left-[-3px] w-[11px] h-[11px] bg-green-500 rounded-full opacity-[0.06]" />
              <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-green-500 rounded-full" />
            </div>
            <span className="[font-family:'Inter',Helvetica] font-normal text-white text-xs tracking-[0.36px] leading-[18px] whitespace-nowrap">
              Currently accepting projects
            </span>
          </Badge>

          <div className="flex flex-col items-center gap-5 [--animation-delay:200ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <h1 className="flex flex-wrap items-center justify-center gap-5">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[88px] tracking-[-2.66px] leading-[82.1px] whitespace-nowrap">
                We Build Brands
              </span>
            </h1>

            <h2 className="flex flex-wrap items-center justify-center gap-5">
              <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-[84px] tracking-[-2.66px] leading-[82.1px] whitespace-nowrap">
                That
              </span>
              <span className="[text-shadow:0px_0px_6px_#000000] [font-family:'Poppins',Helvetica] font-bold text-white text-[84px] tracking-[-1.00px] leading-[82.1px] whitespace-nowrap">
                Feel Inevitable.
              </span>
            </h2>
          </div>

          <p className="w-full max-w-[883px] [font-family:'Inter',Helvetica] font-medium text-[#dddddd] text-lg text-center tracking-[0] leading-[26px] [--animation-delay:400ms] translate-y-[-1rem] animate-fade-in opacity-0">
            Strategy-driven brand systems and digital experiences designed to
            attract attention, shape perception, and scale with authority.
          </p>

          <div className="flex items-center justify-between h-[58px] w-full max-w-[571px] gap-4 bg-[#000000ab] rounded-full border border-[#ffffff0f] shadow-[inset_0px_4px_4px_#000000] pl-6 pr-[0.5%] [--animation-delay:600ms] translate-y-[-1rem] animate-fade-in opacity-0">
            <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#ffffffc9] text-sm tracking-[0.13px] leading-[19.5px] whitespace-nowrap">
              What are we building together?
            </span>

            <Button
              asChild
              className="ml-auto shrink-0 h-12 px-[21px] bg-white hover:bg-white/90 text-[#0b0b0d] rounded-full [font-family:'Space_Grotesk',Helvetica] font-bold text-base tracking-[0.13px] transition-transform hover:scale-105"
            >
              <a href="mailto:xplow.co@gmail.com">
                Let&apos;s Build
                <img
                  src={arrowIcon}
                  className="w-[29px] h-[29px] ml-1"
                  alt=""
                  aria-hidden
                />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

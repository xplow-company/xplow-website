import arrowIcon from "@/assets/arrow.svg";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[749px] bg-[#FFFFFF] flex items-center justify-center overflow-hidden py-24">
      <div className="relative z-10 w-full max-w-[800px] px-4 flex flex-col items-center justify-center text-center mx-auto">
        <Badge
          variant="outline"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] mb-10 h-auto px-[17px] py-[7px] gap-2.5 bg-[#000000] rounded-full border-[#e0e0e0] text-[#FFFFFF] text-[11px] tracking-[1.65px] leading-[16.5px] font-normal [font-family:'Inter',Helvetica]"
        >
          <span className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute w-[15px] h-[15px] bg-green-500 rounded-full opacity-[0.04]" />
            <span className="relative w-2 h-2 bg-green-500 rounded-full" />
          </span>
          CURRENTLY ACCEPTING PROJECTS
        </Badge>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full max-w-[672px] mb-8 flex flex-col items-center gap-6">
          <h1 className="text-center flex flex-col items-center gap-6">
            <span className="block [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[76px] tracking-[-3.04px] leading-[79.8px]">
              Let's build
            </span>
            <span className="block flex flex-wrap items-baseline justify-center gap-x-4">
              <span className="inline-block [-webkit-text-stroke:1px_#0c0c0c] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[76px] tracking-[-3.04px] leading-[79.8px]">
                something
              </span>
              <span className="inline-block bg-gradient-to-r from-[#ff1f4f] via-[#ff1f4f] to-[#ff1f4f] bg-clip-text text-transparent [font-family:'Space_Grotesk',Helvetica] font-bold text-[76px] tracking-[-3.04px] leading-[79.8px]">
                iconic.
              </span>
            </span>
          </h1>
        </div>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full max-w-[420px] mb-14 [font-family:'Inter',Helvetica] font-normal text-[#555555] text-base text-center tracking-[0] leading-[28.8px]">
          We take on limited projects to ensure every client gets our full
          creative and strategic focus.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col items-center gap-8">
          <Button asChild className="h-auto px-0 w-[265.28px] h-[73.5px] bg-[#ff1f4f] hover:bg-[#ff1f4f]/90 rounded-full overflow-hidden relative group transition-transform">
            <a href="mailto:team@xplow.in">
              <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.12)_50%,rgba(0,0,0,0)_100%)] pointer-events-none" />
              <span className="relative z-10 flex items-center justify-center gap-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[17px] tracking-[0.17px] leading-[25.5px]">
                Start a Project
                <img src={arrowIcon} alt="" className="w-[27px] h-[27px] invert" />
              </span>
            </a>
          </Button>

          <span className="[font-family:'Inter',Helvetica] font-medium text-[#666666] text-[11px] text-center tracking-[1.32px] leading-[16.5px]">
            RESPONSE WITHIN 24 HOURS
          </span>
        </div>
      </div>
    </section>
  );
};

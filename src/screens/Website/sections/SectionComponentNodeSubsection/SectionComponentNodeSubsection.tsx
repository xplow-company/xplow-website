import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[977.69px] bg-[#0c0c0c] flex items-center justify-center overflow-hidden">
      <div className="absolute top-[142px] left-[502px] w-[559px] h-[694px] flex opacity-[0.04] pointer-events-none">
        <div className="w-[559px] h-[694px] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[867.3px] tracking-[0] leading-[693.9px] whitespace-nowrap">
          X
        </div>
      </div>

      <div className="absolute top-[178px] left-[222px] w-[1118px] h-[621px] blur-[150px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,31,79,0.12)_0%,rgba(0,0,0,0)_50%)] opacity-[0.18] pointer-events-none" />

      <div className="absolute top-[379px] left-[535px] w-[374px] h-[374px] blur-[100px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,31,79,0.08)_0%,rgba(0,0,0,0)_60%)] opacity-5 pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(180deg,rgba(255,255,255,0.4)_0%,rgba(0,0,0,0)_0%),linear-gradient(90deg,rgba(255,255,255,0.4)_0%,rgba(0,0,0,0)_0%)] opacity-[0.01] pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_50%,rgba(0,0,0,0)_20%,rgba(12,12,12,1)_80%)] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[800px] px-4 flex flex-col items-center">
        <Badge
          variant="outline"
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] mb-10 h-auto px-[17px] py-[7px] gap-2.5 bg-[#141414cc] rounded-full border-[#2a2a2a] text-[#888888] text-[11px] tracking-[1.65px] leading-[16.5px] font-normal [font-family:'Inter',Helvetica]"
        >
          <span className="relative flex items-center justify-center w-2 h-2">
            <span className="absolute w-[15px] h-[15px] bg-green-500 rounded-full opacity-[0.04]" />
            <span className="relative w-2 h-2 bg-green-500 rounded-full" />
          </span>
          CURRENTLY ACCEPTING PROJECTS
        </Badge>
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full max-w-[672px] mb-8">
          <h1 className="text-center">
            <span className="block [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[76px] tracking-[-3.04px] leading-[79.8px]">
              Let's build
            </span>
            <span className="block [-webkit-text-stroke:1px_#ffffff] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[76px] tracking-[-3.04px] leading-[79.8px]">
              something
            </span>
            <span className="block bg-gradient-to-r from-[#ff1f4f] via-[#ff1f4f] to-[#ff1f4f] bg-clip-text text-transparent [font-family:'Space_Grotesk',Helvetica] font-bold text-[76px] tracking-[-3.04px] leading-[79.8px]">
              iconic.
            </span>
          </h1>
        </div>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full max-w-[420px] mb-14 [font-family:'Inter',Helvetica] font-normal text-[#999999] text-base text-center tracking-[0] leading-[28.8px]">
          We take on limited projects to ensure every client gets our full
          creative and strategic focus.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col items-center gap-8">
          <Button className="h-auto px-0 w-[265.28px] h-[73.5px] bg-[#ff1f4f] hover:bg-[#ff1f4f]/90 rounded-full overflow-hidden relative group transition-transform">
            <span className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(255,255,255,0.12)_50%,rgba(0,0,0,0)_100%)] pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center gap-2 [font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[17px] tracking-[0.17px] leading-[25.5px]">
              Start a Project
              <ArrowRightIcon className="w-[27px] h-[27px]" />
            </span>
          </Button>

          <span className="[font-family:'Inter',Helvetica] font-medium text-[#b0b0b0] text-[11px] text-center tracking-[1.32px] leading-[16.5px]">
            RESPONSE WITHIN 24 HOURS
          </span>
        </div>
      </div>
    </section>
  );
};

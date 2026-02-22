import arrowIcon from "@/assets/arrow.svg";
import { Badge } from "../../../../components/ui/badge";

const ctaKeyframes = `
  @keyframes beam-spin { to { transform: rotate(360deg); } }
  @keyframes dots-move { 0% { background-position: 0 0; } 100% { background-position: 24px 24px; } }
`;

export const SectionComponentNodeSubsection = (): JSX.Element => {
  return (
    <section id="lets-build" className="relative w-full min-h-[500px] sm:min-h-[600px] lg:min-h-[749px] bg-[#FFFFFF] flex items-center justify-center overflow-hidden py-5 md:py-20">
      <style>{ctaKeyframes}</style>
      <div className="relative z-10 w-full max-w-[800px] px-5 md:px-5 flex flex-col items-center justify-center text-center mx-auto">
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
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full max-w-[672px] mb-6 sm:mb-8 flex flex-col items-center gap-4 sm:gap-6">
          <h2 className="text-center flex flex-col items-center gap-4 sm:gap-6">
            <span className="block [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] tracking-[-2px] sm:tracking-[-3.04px] leading-[1.05]">
              Let's build
            </span>
            <span className="block flex flex-wrap items-baseline justify-center gap-x-2 sm:gap-x-4">
              <span className="inline-block [-webkit-text-stroke:1px_#0c0c0c] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] tracking-[-2px] sm:tracking-[-3.04px] leading-[1.05]">
                something
              </span>
              <span className="inline-block bg-gradient-to-r from-[#ff1f4f] via-[#ff1f4f] to-[#ff1f4f] bg-clip-text text-transparent [font-family:'Space_Grotesk',Helvetica] font-bold text-[40px] sm:text-[56px] md:text-[64px] lg:text-[76px] tracking-[-2px] sm:tracking-[-3.04px] leading-[1.05]">
                iconic.
              </span>
            </span>
          </h2>
        </div>

        <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full max-w-[420px] mb-14 [font-family:'Inter',Helvetica] font-normal text-[#555555] text-base text-center tracking-[0] leading-[28.8px]">
          We take on limited projects to ensure every client gets our full
          creative and strategic focus.
        </p>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] flex flex-col items-center gap-8">
          <a
            href="mailto:team@xplow.in"
            className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(255,31,79,0.4)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#ff1f4f] focus-visible:ring-offset-2 text-sm font-medium text-white tracking-widest rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center w-full sm:w-auto min-h-[56px] sm:min-h-[73.5px] [font-family:'Space_Grotesk',Helvetica]"
          >
            {/* Spinning border — thicker beam on the ring */}
            <div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[2px]">
              <div
                className="absolute inset-[-100%]"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, transparent 220deg, rgba(255,31,79,0.4) 250deg, #ff1f4f 270deg, #ff1f4f 300deg, rgba(255,31,79,0.4) 330deg, transparent 360deg)",
                  animation: "beam-spin 3s linear infinite",
                }}
              />
              <div className="absolute inset-[2px] rounded-full bg-black" />
            </div>
            {/* Inner black area with gradient + dots */}
            <div className="-z-10 overflow-hidden bg-neutral-950 rounded-full absolute top-[3px] right-[3px] bottom-[3px] left-[3px]">
              <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/60 to-transparent" />
              <div
                className="opacity-30 mix-blend-overlay absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1px)",
                  backgroundSize: "12px 12px",
                  animation: "dots-move 8s linear infinite",
                }}
              />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-[#ff1f4f]/10 blur-2xl rounded-full pointer-events-none transition-colors duration-500 group-hover:bg-[#ff1f4f]/30" />
            </div>
            <span className="relative z-10 text-white/90 transition-colors group-hover:text-white text-[17px] tracking-[0.17px]">
              Start a Project
            </span>
            <img src={arrowIcon} alt="" className="relative z-10 w-[27px] h-[27px] invert ml-2 transition-transform duration-300 group-hover:translate-x-0.5" />
          </a>

          <span className="[font-family:'Inter',Helvetica] font-medium text-[#666666] text-[11px] text-center tracking-[1.32px] leading-[16.5px]">
            RESPONSE WITHIN 24 HOURS
          </span>
        </div>
      </div>
    </section>
  );
};

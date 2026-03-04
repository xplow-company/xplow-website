import { useState } from "react";
import CountUp from "../../../../components/CountUp";
import SpotlightCard from "../../../../components/SpotlightCard";
import { CardContent } from "../../../../components/ui/card";

const accentRed = "#ff1f4f";

const statsData = [
  {
    value: 2.8,
    suffix: "x",
    label: "Conversion lift",
    sublabel: "Within 90 days of launch",
    barColor: accentRed,
    progress: 90,
  },
  {
    value: 47,
    suffix: "%",
    label: "Activation lift",
    sublabel: "First week post-launch",
    barColor: accentRed,
    progress: 47,
  },
  {
    value: 6,
    suffix: "wk",
    label: "To first ship",
    sublabel: "Kickoff to live",
    barColor: accentRed,
    progress: 85,
  },
  {
    value: 92,
    suffix: "%",
    label: "Clients return",
    sublabel: "For second project",
    barColor: accentRed,
    progress: 92,
  },
];

export const AboutSection = (): JSX.Element => {
  const [countUpEnded, setCountUpEnded] = useState<boolean[]>([]);

  const handleCountUpEnd = (index: number) => {
    setCountUpEnded((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  return (
    <section id="about" className="relative w-full bg-[#111111] py-5 md:pt-24 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-4 lg:px-12 xl:px-16 max-w-[1562px] w-full min-w-0">
        <div className="flex flex-col gap-8 w-full min-w-0">
          {/* ABOUT XPLOW — 10–15px to red line */}
          <div className="flex flex-col gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] min-w-0">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] [font-family:'Inter',Helvetica] uppercase">
                ABOUT XPLOW
              </p>
              <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            </div>

            {/* Headlines - fluid scaling, allow wrap */}
            <div className="flex flex-col gap-2 sm:gap-3 min-w-0">
              <h2 className="[font-family:'poppins',Helvetica] font-bold text-white text-[clamp(1.5rem,5vw,2.25rem)] xs:text-[clamp(1.75rem,5.5vw,2.5rem)] sm:text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.25rem,6.5vw,3.5rem)] lg:text-[56px] tracking-[-1.96px] leading-[1.15] break-words">
                We're the team founders call when
              </h2>
              <h2 className="[font-family:'poppins',Helvetica] font-bold text-transparent text-[clamp(1.5rem,5vw,2.25rem)] xs:text-[clamp(1.75rem,5.5vw,2.5rem)] sm:text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.25rem,6.5vw,3.5rem)] lg:text-[56px] tracking-[-1.96px] leading-[1.15] bg-gradient-to-r from-[#ff1f4f] to-[#ff6b8a] bg-clip-text break-words">
                design becomes a growth lever
              </h2>
              <h2 className="[font-family:'poppins',Helvetica] font-bold text-white text-[clamp(1.5rem,5vw,2.25rem)] xs:text-[clamp(1.75rem,5.5vw,2.5rem)] sm:text-[clamp(2rem,6vw,3rem)] md:text-[clamp(2.25rem,6.5vw,3.5rem)] lg:text-[56px] tracking-[-1.96px] leading-[1.15] break-words">
                — not just a pretty layer.
              </h2>
            </div>
          </div>

          {/* Content: 2-col (body text | cards) — cards align with top of body text */}
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,607px)_1fr] gap-x-20 gap-y-8 lg:gap-y-0 items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] min-w-0">
            <div className="flex flex-col gap-6 max-w-[607px] w-full min-w-0">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                Most agencies design screens. We design competitive edges.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                XPLOW sits at the intersection of strategy and execution — brand, product, and engineering aligned for experiences that look refined and <strong className="font-semibold text-white">perform relentlessly.</strong>
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                We study user psychology. We map decision friction. We structure growth architecture. Every pixel carries business intent. Every interaction moves a metric.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                Founders partner with XPLOW for a strategic arm that thinks in systems, ships in weeks, and measures in multiples.
              </p>

              <blockquote className="border-l-2 border-[#ff1f4f] pl-4 sm:pl-[26px] mt-2 min-w-0">
                <p className="[font-family:'Inter',Helvetica] font-normal text-[15px] sm:text-lg tracking-[0] leading-[1.6] sm:leading-[30.6px] text-[#cccccc] italic break-words">
                  &ldquo;We don&apos;t design what looks good. We design what{" "}
                  <span className="text-[#ff1f4f] font-semibold">works</span>
                  {" "}
                  — then make it look incredible.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* KPI cards — gradient accents, progress bars, intuitive layout */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 sm:gap-5 w-full max-w-[624px] lg:max-w-none min-w-0">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-full min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
                >
                  <SpotlightCard
                    effectEnabled={countUpEnded[index] ?? false}
                    spotlightColor="rgba(255, 255, 255, 0.06)"
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-black transition-all duration-300 p-0 w-full group hover:border-white/20 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.6)]"
                  >
                    <CardContent className="relative px-4 py-2 sm:px-5 sm:py-2.5 flex flex-col gap-3 min-h-0 justify-center">
                      {/* Value — dominant */}
                      <div className="flex items-baseline gap-1.5">
                        <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white tabular-nums tracking-tight text-[clamp(1.75rem,4.5vw,2.25rem)] sm:text-[28px] md:text-[32px]">
                          <CountUp
                            to={stat.value}
                            duration={1.8}
                            delay={0.2}
                            rootMargin="0px 0px -25% 0px"
                            className="tabular-nums"
                            onEnd={() => handleCountUpEnd(index)}
                          />
                        </h3>
                        <span className="[font-family:'Poppins',Helvetica] font-bold text-white tracking-tight text-[clamp(1rem,3vw,1.25rem)] sm:text-lg">
                          {stat.suffix}
                        </span>
                      </div>

                      {/* Label + sublabel */}
                      <div className="flex flex-col gap-0">
                        <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-[13px] sm:text-[14px] tracking-[-0.01em]">
                          {stat.label}
                        </p>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-white/80 text-[11px] sm:text-[12px] leading-[1.4]">
                          {stat.sublabel}
                        </p>
                      </div>

                      {/* Progress bar — accent red */}
                      <div className="flex flex-col gap-1 mt-0.5">
                        <div className="flex justify-between items-center">
                          <span className="[font-family:'Inter',Helvetica] text-white/70 text-[10px] uppercase tracking-wider">
                            Impact
                          </span>
                          <span className="[font-family:'Inter',Helvetica] font-medium text-white text-[11px] tabular-nums">
                            {stat.progress}%
                          </span>
                        </div>
                        <div className="h-1 w-full rounded-full bg-white/10 overflow-hidden">
                          <div
                            className="h-full rounded-full transition-all duration-1000 ease-out"
                            style={{
                              width: countUpEnded[index] ? `${stat.progress}%` : "0%",
                              backgroundColor: stat.barColor,
                            }}
                          />
                        </div>
                      </div>
                    </CardContent>
                  </SpotlightCard>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

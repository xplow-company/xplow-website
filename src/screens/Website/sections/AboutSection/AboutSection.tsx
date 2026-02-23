import { useState } from "react";
import CountUp from "../../../../components/CountUp";
import SpotlightCard from "../../../../components/SpotlightCard";
import { CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    value: 50,
    suffix: "+",
    label: "Projects shipped",
    sublabel: "SaaS, fintech, e-comm, Web3",
  },
  {
    value: 3,
    suffix: "x",
    label: "Avg. conversion lift",
    sublabel: "Across client portfolios",
  },
  {
    value: 98,
    suffix: "%",
    label: "Client retention",
    sublabel: "They come back, every time",
  },
  {
    value: 30,
    suffix: "d",
    label: "First delivery",
    sublabel: "Kickoff to first milestone",
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
    <section id="about" className="relative w-full bg-transparent py-5 md:pt-24 md:pb-20 overflow-hidden">
      <div className="container mx-auto px-5 md:px-5 lg:px-16 max-w-[1562px] w-full min-w-0">
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
                XPLOW operates at the intersection of strategic clarity and ruthless execution where brand systems, product design, and engineering align to create experiences that don't just look refined, but <strong className="font-semibold text-white">perform relentlessly.</strong>
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                We study user psychology. We map decision friction. We structure growth architecture. Every pixel carries business intent. Every interaction moves a metric.
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                When founders partner with XPLOW, they're not hiring vendors. They're adding a strategic arm that thinks in systems, ships in weeks, and measures in multiples.
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

            {/* KPI cards: 1 col on xxs/xs, 2 cols on sm+ — sleek minimal design */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-4 sm:gap-5 w-full max-w-[624px] lg:max-w-none min-w-0">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-full min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
                >
                  <SpotlightCard
                    effectEnabled={countUpEnded[index] ?? false}
                    spotlightColor="rgba(255, 31, 79, 0.15)"
                    className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-2xl border border-[#252525] hover:border-[#252525] transition-all duration-300 p-0 w-full shadow-lg hover:shadow-[0_8px_32px_rgba(255,31,79,0.1)]"
                  >
                    <CardContent className="p-4 sm:p-5 flex flex-col gap-3 min-h-0 justify-center">
                      <div className="flex items-baseline gap-1">
                        <h3 className="[font-family:'poppins',Helvetica] font-bold text-white text-[clamp(1.75rem,5vw,2.5rem)] sm:text-[40px] tracking-[-1px] leading-tight tabular-nums">
                          <CountUp
                            to={stat.value}
                            duration={1.8}
                            delay={0.2}
                            rootMargin="0px 0px -25% 0px"
                            className="tabular-nums"
                            onEnd={() => handleCountUpEnd(index)}
                          />
                        </h3>
                        <span className="[font-family:'poppins',Helvetica] text-white text-[clamp(1.5rem,4vw,2.25rem)] sm:text-3xl font-bold tracking-tight">
                          {stat.suffix}
                        </span>
                      </div>
                      
                      <div className="flex flex-col gap-1">
                        <p className="[font-family:'Inter',Helvetica] font-semibold text-white text-[13px] sm:text-[14px] tracking-[0.3px] leading-[1.4]">
                          {stat.label}
                        </p>
                        <p className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-[11px] sm:text-[12px] tracking-[0.2px] leading-[1.4]">
                          {stat.sublabel}
                        </p>
                      </div>

                      {/* Accent bar */}
                      <div className="mt-2 h-0.5 w-8 bg-gradient-to-r from-[#ff1f4f] to-transparent rounded-full" />
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

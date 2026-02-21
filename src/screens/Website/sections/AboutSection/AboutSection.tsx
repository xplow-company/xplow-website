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
    <section id="about" className="relative w-full bg-[#111111] py-5 md:pt-24 md:pb-20 overflow-hidden">
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
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,607px)_1fr] gap-x-12 gap-y-8 lg:gap-y-0 items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] min-w-0">
            <div className="flex flex-col gap-6 max-w-[607px] w-full min-w-0">
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                Most agencies build websites. We build competitive advantages. XPLOW exists at the intersection of strategic thinking and ruthless execution — where brand systems, product design, and engineering converge to create experiences that don&apos;t just look world-class, but <strong className="font-semibold text-white">perform like it.</strong>
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                We obsess over user psychology, conversion funnels, and brand systems that compound growth over time. Every pixel is a business decision. Every interaction is engineered to move a metric. Every deliverable is designed to make your competitors wonder what happened.
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[30.4px] break-words">
                We&apos;ve spent years inside the trenches of SaaS, fintech, e-commerce, and Web3 — shipping products that real users depend on, not vanity projects for award submissions. When a founder partners with XPLOW, they&apos;re not hiring a vendor. They&apos;re adding a strategic arm that thinks in systems, ships in weeks, and measures in multiples.
              </p>
              <blockquote className="border-l-2 border-[#ff1f4f] pl-4 sm:pl-[26px] mt-2 min-w-0">
                <p className="[font-family:'Inter',Helvetica] font-normal text-[15px] sm:text-lg tracking-[0] leading-[1.6] sm:leading-[30.6px] text-[#cccccc] break-words">
                  &ldquo;We don&apos;t design what looks good. We design what{" "}
                  <span className="text-[#ff1f4f] font-semibold">works</span>
                  {" "}
                  — then make it look incredible.&rdquo;
                </p>
              </blockquote>
            </div>

            {/* KPI cards: 1 col on xxs/xs, 2 cols on sm+ — auto height, no distortion */}
            <div className="grid grid-cols-1 min-[400px]:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[624px] lg:max-w-none min-w-0">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-full min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={{ "--animation-delay": `${400 + index * 100}ms` } as React.CSSProperties}
                >
                  <SpotlightCard
                    effectEnabled={countUpEnded[index] ?? false}
                    spotlightColor="rgba(255, 31, 79, 0.2)"
                    className="bg-[#191919] rounded-xl sm:rounded-2xl border border-[#2a2a2a] p-0 w-full"
                  >
                    <CardContent className="p-4 sm:p-5 md:p-6 flex flex-col gap-1 sm:gap-2 min-h-0 justify-center">
                      <h3 className="[font-family:'poppins',Helvetica] font-bold text-white text-[clamp(1.5rem,4.5vw,2rem)] sm:text-[32px] tracking-[-0.96px] leading-tight tabular-nums">
                        <CountUp
                          to={stat.value}
                          duration={1.6}
                          delay={0.15}
                          rootMargin="0px 0px -25% 0px"
                          className="tabular-nums"
                          onEnd={() => handleCountUpEnd(index)}
                        />
                        {stat.suffix}
                      </h3>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-[11px] sm:text-[13px] tracking-[0] leading-[1.4] break-words">
                        {stat.label}
                      </p>
                      <p className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-[10px] sm:text-[11px] tracking-[0] leading-[1.4] break-words">
                        {stat.sublabel}
                      </p>
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

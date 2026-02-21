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
      <section id="about" className="relative w-full bg-[#111111] py-44">
        <div className="container mx-auto px-16 max-w-[1440px]">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col gap-2 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
              <p className="font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] [font-family:'Inter',Helvetica] uppercase">
                ABOUT XPLOW
              </p>
              <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            </div>
  
            <div className="flex flex-col gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[56px] tracking-[-1.96px] leading-[64.4px]">
                We're the team founders call when
              </h2>
              <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-[56px] tracking-[-1.96px] leading-[64.4px] bg-gradient-to-r from-[#ff1f4f] to-[#ff6b8a] bg-clip-text">
                design becomes a growth lever
              </h2>
              <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[56px] tracking-[-1.96px] leading-[64.4px]">
                — not just a pretty layer.
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-6 max-w-[607px]">
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[30.4px]">
                  Most agencies build websites. We build competitive advantages. XPLOW exists at the intersection of strategic thinking and ruthless execution — where brand systems, product design, and engineering converge to create experiences that don&apos;t just look world-class, but <strong className="font-semibold text-white">perform like it.</strong>
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[30.4px]">
                  We obsess over user psychology, conversion funnels, and brand systems that compound growth over time. Every pixel is a business decision. Every interaction is engineered to move a metric. Every deliverable is designed to make your competitors wonder what happened.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-white text-base tracking-[0] leading-[30.4px]">
                  We&apos;ve spent years inside the trenches of SaaS, fintech, e-commerce, and Web3 — shipping products that real users depend on, not vanity projects for award submissions. When a founder partners with XPLOW, they&apos;re not hiring a vendor. They&apos;re adding a strategic arm that thinks in systems, ships in weeks, and measures in multiples.
                </p>
              </div>

              <blockquote className="border-l-2 border-[#ff1f4f] pl-[26px]">
                <p className="[font-family:'Inter',Helvetica] font-normal text-lg tracking-[0] leading-[30.6px] text-[#cccccc]">
                  &ldquo;We don&apos;t design what looks good. We design what{" "}
                  <span className="text-[#ff1f4f] font-semibold">works</span>
                  {" "}
                  — then make it look incredible.&rdquo;
                </p>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="w-[296px] h-[128px] translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${600 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                <SpotlightCard
                  effectEnabled={countUpEnded[index] ?? false}
                  spotlightColor="rgba(255, 31, 79, 0.2)"
                  className="bg-[#191919] rounded-2xl border border-[#2a2a2a] p-0 w-full h-full"
                >
                  <CardContent className="p-[25px] flex flex-col gap-2 h-full min-h-0 justify-center">
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[32px] tracking-[-0.96px] leading-8">
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
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-[13px] tracking-[0] leading-[19.5px]">
                      {stat.label}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-[11px] tracking-[0] leading-[16.5px]">
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

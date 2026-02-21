import { Card, CardContent } from "../../../../components/ui/card";

const statsData = [
  {
    value: "50+",
    label: "Projects shipped",
    sublabel: "SaaS, fintech, e-comm",
  },
  {
    value: "3x",
    label: "Avg. conversion lift",
    sublabel: "Across client portfolios",
  },
  {
    value: "98%",
    label: "Client retention",
    sublabel: "They come back",
  },
  {
    value: "30d",
    label: "First delivery",
    sublabel: "Kickoff to milestone",
  },
];
export const AboutSection = (): JSX.Element => {
    return (
      <section id="about" className="relative w-full bg-[#111111] py-44">
        <div className="container mx-auto px-16 max-w-[1440px]">
          <div className="flex flex-col gap-16">
            <div className="flex items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
              <div className="w-10 h-0.5 bg-[#ff1f4f]" />
              <p className="font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] [font-family:'Inter',Helvetica] uppercase">
                About XPLOW
              </p>
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
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-base tracking-[0] leading-[30.4px] max-w-[607px]">
                XPLOW obsesses over user psychology, conversion funnels, and
                brand systems that compound growth over time. Every pixel is a
                business decision. Every interaction is engineered to move a
                metric.
              </p>

              <blockquote className="border-l-2 border-[#ff1f4f4c] pl-[26px]">
                <p className="[font-family:'Inter',Helvetica] font-normal text-lg tracking-[0] leading-[30.6px] italic">
                  <span className="text-[#cccccc]">
                    "We don't design what looks good. We design what{" "}
                  </span>
                  <span className="text-[#ff1f4f]">works</span>
                  <span className="text-[#cccccc]">
                    {" "}
                    — then make it look incredible."
                  </span>
                </p>
              </blockquote>
            </div>

            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {statsData.map((stat, index) => (
                <Card
                  key={index}
                  className="bg-[#191919] rounded-2xl border border-[#2a2a2a] translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${600 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CardContent className="p-[25px] flex flex-col gap-2">
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[32px] tracking-[-0.96px] leading-8">
                      {stat.value}
                    </h3>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-[13px] tracking-[0] leading-[19.5px]">
                      {stat.label}
                    </p>
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-[11px] tracking-[0] leading-[16.5px]">
                      {stat.sublabel}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
            </div>
          </div>
        </div>
      </section>
    );
};

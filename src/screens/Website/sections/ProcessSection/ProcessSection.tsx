import pen1 from "@/assets/pen1.svg";
import pen2 from "@/assets/pen2.svg";
import pen3 from "@/assets/pen.svg";
import pen4 from "@/assets/pen4.svg";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const penIcons = [pen1, pen2, pen3, pen4];

const phases = [
  {
    number: "01",
    title: "DECODE",
    subtitle: "Deep Strategy",
    description:
      "Immerse in your brand, market, and users. Every decision is backed by real insight — never assumption.",
    tags: [
      "Research audit",
      "Competitive analysis",
      "User personas",
      "Strategy roadmap",
    ],
  },
  {
    number: "02",
    title: "FRAME",
    subtitle: "Intentional Craft",
    description:
      "Systems, not screens. Every pixel serves a purpose — built for clarity, conversion, and delight.",
    tags: ["Wireframes", "Hi-fi mockups", "Prototypes", "Design system"],
  },
  {
    number: "03",
    title: "FORGE",
    subtitle: "Scalable Execution",
    description:
      "Production-ready code and assets that ship. Built to perform today and evolve tomorrow.",
    tags: [
      "Frontend dev",
      "Responsive builds",
      "CMS integration",
      "QA & testing",
    ],
  },
  {
    number: "04",
    title: "REFINE",
    subtitle: "Continuous Growth",
    description:
      "Post-launch analytics, experimentation, and iterative refinement to compound results.",
    tags: [
      "Analytics setup",
      "A/B experiments",
      "CRO iterations",
      "Growth tracking",
    ],
  },
];

export const ProcessSection = (): JSX.Element => {
  return (
    <section id="process" className="w-full min-w-0 bg-transparent px-5 md:px-5 lg:px-12 xl:px-[125px] py-5 md:py-20 overflow-hidden">
      <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12 md:mb-16 translate-y-[-1rem] animate-fade-in opacity-0 min-w-0">
        <div className="flex flex-col items-start gap-8 max-w-[414px] w-full min-w-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
              HOW WE WORK
            </span>
          </div>

          <div className="flex flex-col gap-0">
            <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] tracking-[-1.96px] leading-[1.1]">
              Four phases.
            </h2>
            <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[56px] tracking-[-1.96px] leading-[1.1]">
              Zero guesswork.
            </h2>
          </div>
        </div>

        <div className="max-w-[320px] w-full min-w-0 [font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm text-right tracking-[0] leading-[24.5px] break-words">
          <span className="block">A battle-tested framework that turns chaos</span>
          <span className="block">into clarity, and ideas into shipped product.</span>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {phases.map((phase, index) => (
          <Card
            key={phase.number}
            className="bg-[#191919] border-[#2a2a2a] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 min-w-0 w-full"
            style={{
              "--animation-delay": `${200 + index * 100}ms`,
            } as React.CSSProperties}
          >
            <CardContent className="relative pt-6 px-8 pb-8 flex flex-col h-full">
              <img
                src={penIcons[index]}
                alt=""
                className="absolute top-6 right-8 w-10 h-10 object-contain pointer-events-none"
                aria-hidden
              />
              <div className="flex items-center justify-between mb-6">
                <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4fba] text-[40px] leading-10">
                  {phase.number}
                </span>
                <div className="w-10 h-10 bg-transparent" />
              </div>

              <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[22px] tracking-[-0.44px] leading-[33px] mb-2">
                {phase.title}
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#666666] text-xs tracking-[0.72px] leading-[18px] mb-5">
                {phase.subtitle}
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-sm tracking-[0] leading-[23.8px] mb-8 flex-grow">
                {phase.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {phase.tags.map((tag, tagIndex) => (
                  <Badge
                    key={tagIndex}
                    variant="outline"
                    className="bg-[#0c0c0c] border-[#2a2a2a] text-[#777777] text-[10px] tracking-[0.30px] leading-[15px] [font-family:'Inter',Helvetica] font-normal px-[11px] py-[5px] h-auto rounded-full hover:bg-[#0c0c0c]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

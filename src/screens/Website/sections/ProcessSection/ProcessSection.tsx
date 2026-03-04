import pen1 from "@/assets/pen1.svg";
import pen2 from "@/assets/pen2.svg";
import pen3 from "@/assets/pen.svg";
import pen4 from "@/assets/pen4.svg";
import { Card, CardContent } from "../../../../components/ui/card";

const penIcons = [pen1, pen2, pen3, pen4];

const phases = [
  {
    number: "01",
    title: "DECODE",
    subtitle: "Deep Strategy",
    description:
      "Immerse in your brand, market, and users. Every decision backed by insight — never assumption.",
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
      "Post-launch analytics and experimentation to compound results.",
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
    <section id="process" className="w-full min-w-0 bg-[#0c0c0c] px-4 md:px-4 lg:px-12 xl:px-20 py-16 md:py-24 overflow-hidden">
      <header className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-16 md:mb-20 translate-y-[-1rem] animate-fade-in opacity-0 min-w-0">
        <div className="flex flex-col items-start gap-8 max-w-[480px] w-full min-w-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-[2px] bg-[#ff1f4f]" />
            <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase">
              HOW WE WORK
            </span>
          </div>

          <div className="flex flex-col gap-0">
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] tracking-[-2px] leading-[1.08]">
              Four phases.
            </h2>
            <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] tracking-[-2px] leading-[1.08]">
              Zero guesswork.
            </h2>
          </div>
        </div>

        <div className="max-w-[360px] w-full min-w-0 [font-family:'Inter',Helvetica] font-normal text-[#888] text-[15px] leading-[1.7] break-words lg:text-right">
          <span className="block">A framework that turns chaos into clarity and ideas into shipped product.</span>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
        {phases.map((phase, index) => (
          <Card
            key={phase.number}
            className="group relative bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 min-w-0 w-full hover:border-[#ff1f4f]/25 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.1),0_20px_40px_-15px_rgba(0,0,0,0.4)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
            style={{
              "--animation-delay": `${200 + index * 100}ms`,
            } as React.CSSProperties}
          >
            <CardContent className="relative pt-6 px-6 md:px-8 pb-8 flex flex-col h-full">
              <img
                src={penIcons[index]}
                alt=""
                className="absolute top-6 right-6 md:right-8 w-10 h-10 object-contain pointer-events-none opacity-70"
                aria-hidden
              />

              <div className="flex items-center justify-between mb-5">
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[36px] sm:text-[40px] leading-none tracking-[0.02em]">
                  {phase.number}
                </span>
                <div className="w-10 h-10 bg-transparent" />
              </div>

              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[22px] sm:text-[24px] tracking-[-0.5px] leading-[1.2] mb-2">
                {phase.title}
              </h3>

              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[12px] tracking-[0.5px] uppercase mb-4">
                {phase.subtitle}
              </p>

              <p className="[font-family:'Inter',Helvetica] font-normal text-[#999] text-[14px] leading-[1.65] mb-6 flex-grow">
                {phase.description}
              </p>

              {/* Services — elevated, prominent */}
              <div className="flex flex-col gap-3">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[2px] uppercase">
                  Services
                </span>
                <div className="flex flex-wrap gap-2">
                  {phase.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="inline-flex items-center px-4 py-2 rounded-full bg-white text-black [font-family:'Inter',Helvetica] font-semibold text-[12px] tracking-[0.2px] leading-tight transition-opacity duration-300 group-hover:opacity-90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

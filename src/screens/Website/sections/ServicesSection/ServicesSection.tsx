import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const capabilities = [
  {
    number: "01",
    title: "Brand Strategy",
    subtitle: "& Identity",
    description:
      "We build brand systems that compound — positioning, visual identity, voice, and strategy that make you impossible to ignore and effortless to remember.",
    metric: "3x",
    metricLabel: "brand recall lift",
    tags: [
      "Positioning",
      "Visual Identity",
      "Brand Voice",
      "Strategy Workshops",
      "Guidelines",
    ],
    gridClass: "col-span-2 row-span-1",
  },
  {
    number: "02",
    title: "Product",
    subtitle: "Design",
    description:
      "Every pixel is a business decision. Interfaces engineered to convert, retain, and delight — across web, mobile, and complex systems.",
    metric: "340%",
    metricLabel: "activation lift",
    tags: ["UI/UX", "Prototyping", "User Research", "Design Systems"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "03",
    title: "Frontend",
    subtitle: "Engineering",
    description:
      "Production-grade React, Next.js, and Flutter code. Pixel-perfect implementation with performance obsession and scalable architecture.",
    metric: "99",
    metricLabel: "Lighthouse score",
    tags: ["React / Next.js", "TypeScript", "Flutter", "APIs"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "04",
    title: "Motion &",
    subtitle: "Interaction",
    description:
      "Cinematic micro-interactions and transitions that give your product a premium, living feel — because static is forgettable.",
    metric: "60%",
    metricLabel: "engagement lift",
    tags: ["Micro-interactions", "Page Transitions", "Scroll Animation", "3D"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "05",
    title: "Design",
    subtitle: "Systems",
    description:
      "Token-based component libraries that scale your product team from 2 to 200 without design debt or implementation drift.",
    metric: "10x",
    metricLabel: "dev velocity",
    tags: ["Component Library", "Design Tokens", "Documentation", "Governance"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "06",
    title: "Growth",
    subtitle: "Engineering",
    description:
      "CRO, experimentation, and analytics architecture. We don't just design — we measure, learn, and compound your results over time.",
    metric: "2.8x",
    metricLabel: "conversion lift",
    tags: [
      "CRO",
      "A/B Testing",
      "Analytics",
      "Funnel Optimization",
      "Attribution",
    ],
    gridClass: "col-span-2 row-span-1",
  },
  {
    number: "07",
    title: "AI &",
    subtitle: "Automation",
    description:
      "Intelligent workflows, AI-powered features, and automation systems that give your product an unfair advantage in the market.",
    metric: "40%",
    metricLabel: "ops cost reduction",
    tags: ["AI Integration", "LLM Features", "Workflow Automation", "Smart UX"],
    gridClass: "col-span-2 row-span-1",
  },
];
const stats = [
    { value: "7", label: "Core disciplines", highlight: true },
    { value: "50+", label: "Projects shipped", highlight: false },
    { value: "30d", label: "Avg. first delivery", highlight: false },
    { value: "98%", label: "Client retention", highlight: false },
  ];
  export const ServicesSection = (): JSX.Element => {
    return (
      <section id="services" className="relative w-full bg-[#0c0c0c] overflow-hidden py-24">
        <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_0%)]" />
  
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] blur-[80px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,31,79,0.04)_0%,rgba(255,31,79,0.01)_40%,rgba(0,0,0,0)_60%)] opacity-65" />
  
        <div className="container relative mx-auto px-16 max-w-[1440px]">
          <header className="flex flex-col gap-8 mb-28 translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1.5px] bg-[#ff1f4f]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
                CAPABILITIES
              </span>
            </div>
  
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="flex flex-col">
                <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-6xl tracking-[-2.40px] leading-[64.8px]">
                  Everything you need.
                </h2>
                <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-6xl tracking-[-2.40px] leading-[64.8px]">
                  Nothing you don't.
                </h2>
              </div>
  
              <div className="flex flex-col text-right">
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#777777] text-sm tracking-[0] leading-[24.5px]">
                  Seven disciplines. Under One Roof.
                </p>
                <p className="[font-family:'Inter',Helvetica] font-normal text-[#777777] text-sm tracking-[0] leading-[24.5px]">
                  Integrated strategy, design, and engineering.
                </p>
              </div>
            </div>
          </header>
          <div className="grid grid-cols-3 gap-4 mb-16">
          {capabilities.map((capability, index) => (
            <Card
              key={capability.number}
              className={`${capability.gridClass} bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0`}
              style={
                {
                  "--animation-delay": `${200 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,31,79,0.03)_0%,rgba(0,0,0,0)_50%,rgba(255,31,79,0.02)_100%)]" />

              <CardContent className="relative p-9 flex flex-col gap-6 h-full">
                <div className="[-webkit-text-stroke:1px_#ff1f4f] [font-family:'Space_Grotesk',Helvetica] font-bold text-transparent text-5xl tracking-[-1.92px] leading-[48px]">
                  {capability.number}
                </div>

                <div className="flex-1 flex flex-col gap-3">
                  <div>
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] tracking-[-0.84px] leading-[32.2px]">
                      {capability.title}
                    </h3>
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[28px] tracking-[-0.84px] leading-[32.2px]">
                      {capability.subtitle}
                    </h3>
                  </div>

                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-[13.5px] tracking-[0] leading-[23.6px]">
                    {capability.description}
                  </p>
                </div>

                <div className="flex flex-col gap-4 pt-[21px] border-t border-[#ffffff0d]">
                  <div className="flex items-center gap-2">
                    <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[22px] tracking-[-0.44px] leading-[33px]">
                      {capability.metric}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-medium text-[#777777] text-[11px] tracking-[0.44px] leading-[16.5px]">
                      {capability.metricLabel}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {capability.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-[#ff1f4f0d] border-[#ff1f4f1a] rounded-full px-[13px] py-1.5 h-auto [font-family:'Inter',Helvetica] font-normal text-[#bbbbbb] text-[10.5px] tracking-[0.31px] leading-[15.8px]"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="h-px bg-[linear-gradient(90deg,rgba(255,31,79,1)_0%,rgba(255,31,79,0.2)_30%,rgba(0,0,0,0)_70%)] mb-12" />

        <div
          className="flex flex-wrap gap-8 translate-y-[-1rem] animate-fade-in opacity-0"
          style={{ "--animation-delay": "1000ms" } as React.CSSProperties}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex gap-3">
              <span
                className={`[font-family:'Space_Grotesk',Helvetica] font-bold text-[28px] tracking-[-0.84px] leading-[42px] ${stat.highlight ? "text-[#ff1f4f]" : "text-white"}`}
              >
                {stat.value}
              </span>
              <span className="mt-[18px] [font-family:'Inter',Helvetica] font-medium text-[#555555] text-xs tracking-[0.48px] leading-[18px]">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { Badge } from "../../../../components/ui/badge";
import { ParticleCard } from "../../../../components/MagicBento";
import { Card, CardContent } from "../../../../components/ui/card";
import { CapabilityCard3D } from "../../../../components/CapabilityCard3D";

const GLOW_RGB = "255, 31, 79";

function CapabilityCardGlow({ children, className }: { children: React.ReactNode; className?: string }) {
  const [glow, setGlow] = useState({ x: "50%", y: "50%", intensity: 0 });
  return (
    <div
      className={`capability-card-glow-wrapper relative rounded-2xl ${className ?? ""}`}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setGlow({ x: `${x}%`, y: `${y}%`, intensity: 1 });
      }}
      onMouseLeave={() => setGlow((g) => ({ ...g, intensity: 0 }))}
      style={
        {
          "--glow-x": glow.x,
          "--glow-y": glow.y,
          "--glow-intensity": glow.intensity,
          "--glow-radius": "280px",
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}

const capabilities = [
  {
    number: "01",
    title: "Brand",
    subtitle: "Signal",
    variant: "brand-signal" as const,
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
    subtitle: "Clarity",
    variant: "product-clarity" as const,
    description:
      "Every pixel is a business decision. Interfaces engineered to convert, retain, and delight — across web, mobile, and complex systems.",
    metric: "340%",
    metricLabel: "activation lift",
    tags: ["UX/UI", "Prototyping", "User Research", "Design Systems"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "03",
    title: "Precision",
    subtitle: "Build",
    variant: "precision-build" as const,
    description:
      "Design that translates pixel-perfect into Flutter code. Easter eggs for developers — pixel-perfect implementation with performance obsession and scalable architecture.",
    metric: "99",
    metricLabel: "Lighthouse score",
    tags: ["React / Next.js", "TypeScript", "Flutter", "APIs"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "04",
    title: "Living",
    subtitle: "Motion",
    variant: "living-motion" as const,
    description:
      "Cinematic micro-interactions and transitions that give your product a premium, living feel. Invisible is forgettable.",
    metric: "60%",
    metricLabel: "engagement lift",
    tags: ["Micro-interactions", "Page Transitions", "Scroll Animation", "3D"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "05",
    title: "Structured",
    subtitle: "Scale",
    variant: "structured-scale" as const,
    description:
      "Token-based component libraries that scale your product team from 2 to 200 without design debt or implementation drift.",
    metric: "10x",
    metricLabel: "dev velocity",
    tags: ["Component Library", "Design Tokens", "Documentation", "Governance"],
    gridClass: "col-span-1 row-span-1",
  },
  {
    number: "06",
    title: "Momentum",
    subtitle: "Layer",
    variant: "momentum-layer" as const,
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
    title: "Intelligence",
    subtitle: "Layer",
    variant: "intelligence-layer" as const,
    description:
      "Intelligent workflows, AI-powered features, and automation systems that give your product an unfair advantage in the market.",
    metric: "40%",
    metricLabel: "ops cost reduction",
    tags: ["AI Integration", "LLM Features", "Workflow Automation", "Smart UX"],
    gridClass: "col-span-2 row-span-1",
  },
];
function CapabilityCardWith3D({
  capability,
  index,
  glowClassName,
  particleCardClassName,
  cardClassName,
  gridClass,
  children,
}: {
  capability: (typeof capabilities)[0];
  index: number;
  glowClassName: string;
  particleCardClassName: string;
  cardClassName: string;
  gridClass?: string;
  children: React.ReactNode;
}) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <CapabilityCardGlow key={capability.number} className={`${glowClassName} ${gridClass ?? ""}`.trim()}>
      <ParticleCard
        className={particleCardClassName}
        glowColor={GLOW_RGB}
        particleCount={10}
        enableTilt={false}
        enableMagnetism={false}
        clickEffect={false}
      >
        <Card
          className={`relative group ${cardClassName}`}
          style={{ "--animation-delay": `${200 + index * 100}ms` } as React.CSSProperties}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,31,79,0.03)_0%,rgba(0,0,0,0)_50%,rgba(255,31,79,0.02)_100%)]" />
          <CapabilityCard3D variant={capability.variant} isHovered={isHovered} />
          {children}
        </Card>
      </ParticleCard>
    </CapabilityCardGlow>
  );
}

function CapabilityCardContent({ capability }: { capability: (typeof capabilities)[0] }) {
  return (
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
  );
}

const stats = [
    { value: "7", label: "Core disciplines", highlight: true },
    { value: "50+", label: "Projects shipped", highlight: false },
    { value: "30d", label: "Avg. first delivery", highlight: false },
    { value: "98%", label: "Client retention", highlight: false },
  ];
  export const ServicesSection = (): JSX.Element => {
    return (
      <section id="services" className="relative w-full bg-[#0c0c0c] overflow-hidden py-5 md:py-20">
        <style>{`
          .capability-card-glow-wrapper {
            --glow-x: 50%;
            --glow-y: 50%;
            --glow-intensity: 0;
            --glow-radius: 280px;
          }
          .capability-card-glow-wrapper::after {
            content: '';
            position: absolute;
            inset: 0;
            padding: 1px;
            background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
                rgba(${GLOW_RGB}, calc(var(--glow-intensity) * 0.9)) 0%,
                rgba(${GLOW_RGB}, calc(var(--glow-intensity) * 0.4)) 35%,
                transparent 65%);
            border-radius: inherit;
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            mask-composite: exclude;
            pointer-events: none;
            opacity: 1;
            transition: opacity 0.2s ease, box-shadow 0.3s ease;
            z-index: 1;
          }
          .capability-card-glow-wrapper:hover {
            box-shadow: 0 0 30px rgba(${GLOW_RGB}, 0.15);
          }
        `}</style>
        <div className="absolute inset-0 [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.02)_0%,rgba(0,0,0,0)_0%)]" />
  
        <div className="absolute top-1/4 left-1/4 w-[900px] h-[900px] blur-[80px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(255,31,79,0.04)_0%,rgba(255,31,79,0.01)_40%,rgba(0,0,0,0)_60%)] opacity-65" />
  
        <div className="container relative mx-auto px-5 md:px-5 lg:px-16 max-w-[1562px]">
          <header className="flex flex-col gap-8 mb-28 translate-y-[-1rem] animate-fade-in opacity-0">
            <div className="flex items-center gap-4">
              <div className="w-10 h-[1.5px] bg-[#ff1f4f]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
                CAPABILITIES
              </span>
            </div>
  
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div className="flex flex-col">
                <h2 className="[font-family:'poppins',Helvetica] font-bold text-white text-6xl tracking-[-2.40px] leading-[64.8px]">
                  Everything you need.
                </h2>
                <h2 className="[-webkit-text-stroke:1px_#ffffff] [font-family:'poppins',Helvetica] font-bold text-transparent text-6xl tracking-[-2.40px] leading-[64.8px]">
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
          <div
            className="mb-16 flex flex-col gap-6"
            style={{ "--capability-gap": "24px" } as React.CSSProperties}
          >
            {/* Row 1: card 1 + card 2 with same gap as grid */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {capabilities.slice(0, 2).map((capability, index) => (
                <CapabilityCardWith3D
                  capability={capability}
                  index={index}
                  glowClassName={`flex-1 min-w-0 translate-y-[-1rem] animate-fade-in opacity-0 ${index === 0 ? "lg:flex-[1.41]" : "lg:flex-1"}`}
                  particleCardClassName="w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px] rounded-2xl"
                  cardClassName="bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px]"
                  gridClass=""
                >
                  <CapabilityCardContent capability={capability} />
                </CapabilityCardWith3D>
              ))}
            </div>

            {/* Row 2: 3-column grid (cards 3, 4, 5) with same gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {capabilities.slice(2, 5).map((capability, index) => (
                <CapabilityCardWith3D
                  capability={capability}
                  index={index + 2}
                  glowClassName={`min-w-0 translate-y-[-1rem] animate-fade-in opacity-0 ${capability.gridClass}`}
                  particleCardClassName="w-full h-full rounded-2xl"
                  cardClassName="bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden w-full min-h-[380px] xl:min-h-[450px]"
                  gridClass=""
                >
                  <CapabilityCardContent capability={capability} />
                </CapabilityCardWith3D>
              ))}
            </div>

            {/* Row 3: 6th and 7th cards side by side */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {capabilities.slice(5, 7).map((capability, index) => (
                <CapabilityCardWith3D
                  capability={capability}
                  index={5 + index}
                  glowClassName="flex-1 min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                  particleCardClassName="w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px] rounded-2xl"
                  cardClassName="bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px]"
                  gridClass=""
                >
                  <CapabilityCardContent capability={capability} />
                </CapabilityCardWith3D>
              ))}
            </div>
          </div>

        <div className="translate-y-[-1rem] animate-fade-in opacity-0" style={{ "--animation-delay": "1000ms" } as React.CSSProperties}>
          <div className="h-px bg-[#ff1f4f] [box-shadow:0_0_12px_#ff1f4f]" aria-hidden />
          <div className="flex flex-wrap justify-between gap-8 w-full py-8 px-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex gap-3 items-baseline">
                <span
                  className={`[font-family:'Space_Grotesk',Helvetica] font-bold text-[28px] tracking-[-0.84px] leading-[42px] shrink-0 ${stat.highlight ? "text-[#ff1f4f]" : "text-white"}`}
                >
                  {stat.value}
                </span>
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#888888] text-xs tracking-[0.48px] leading-[18px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

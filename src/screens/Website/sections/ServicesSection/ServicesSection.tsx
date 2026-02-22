import React, { useState } from "react";
import icon3rd from "@/assets/3rd.svg";
import { Badge } from "../../../../components/ui/badge";
import { ParticleCard } from "../../../../components/MagicBento";
import { Card, CardContent } from "../../../../components/ui/card";

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
                <CapabilityCardGlow
                  key={capability.number}
                  className={`flex-1 min-w-0 translate-y-[-1rem] animate-fade-in opacity-0 ${index === 0 ? "lg:flex-[1.41]" : "lg:flex-1"}`}
                >
                <ParticleCard
                  className="w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px] rounded-2xl"
                  glowColor={GLOW_RGB}
                  particleCount={10}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect={false}
                >
                <Card
                  className={`relative bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden group w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px]`}
                  style={
                    {
                      "--animation-delay": `${200 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,31,79,0.03)_0%,rgba(0,0,0,0)_50%,rgba(255,31,79,0.02)_100%)]" />

              {index === 0 && (
                <span
                  className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter,transform] duration-300 ease-out group-hover:[&_path]:stroke-[#FF1F4F] group-hover:[&_g]:opacity-100 group-hover:drop-shadow-[0_0_12px_#ff1f4f] group-hover:rotate-[360deg] pointer-events-none inline-block [&_g]:transition-opacity [&_path]:transition-[stroke]"
                  aria-hidden
                >
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <g opacity="0.2">
                      <path opacity="0.5" d="M80 135C110.376 135 135 110.376 135 80C135 49.6243 110.376 25 80 25C49.6243 25 25 49.6243 25 80C25 110.376 49.6243 135 80 135Z" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.4" d="M80 118C100.987 118 118 100.987 118 80C118 59.0132 100.987 42 80 42C59.0132 42 42 59.0132 42 80C42 100.987 59.0132 118 80 118Z" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.6" d="M80 100C91.0457 100 100 91.0457 100 80C100 68.9543 91.0457 60 80 60C68.9543 60 60 68.9543 60 80C60 91.0457 68.9543 100 80 100Z" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.8" d="M80 83C81.6569 83 83 81.6569 83 80C83 78.3431 81.6569 77 80 77C78.3431 77 77 78.3431 77 80C77 81.6569 78.3431 83 80 83Z" fill="none" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.7" d="M135 83.5C136.933 83.5 138.5 81.933 138.5 80C138.5 78.067 136.933 76.5 135 76.5C133.067 76.5 131.5 78.067 131.5 80C131.5 81.933 133.067 83.5 135 83.5Z" fill="none" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.5" d="M118 82.5C119.381 82.5 120.5 81.3807 120.5 80C120.5 78.6193 119.381 77.5 118 77.5C116.619 77.5 115.5 78.6193 115.5 80C115.5 81.3807 116.619 82.5 118 82.5Z" fill="none" stroke="#FF1F4F" strokeWidth="0.5" />
                      <path opacity="0.4" d="M100 82C101.105 82 102 81.1046 102 80C102 78.8954 101.105 78 100 78C98.8954 78 98 78.8954 98 80C98 81.1046 98.8954 82 100 82Z" fill="none" stroke="#FF5C7C" strokeWidth="0.5" />
                      <path opacity="0.3" d="M80 128C106.51 128 128 106.51 128 80C128 53.4903 106.51 32 80 32C53.4903 32 32 53.4903 32 80C32 106.51 53.4903 128 80 128Z" stroke="#FF5C7C" strokeWidth="0.3" strokeDasharray="4 8" />
                    </g>
                  </svg>
                </span>
              )}

              {index === 1 && (
                <span
                  className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter] duration-300 ease-out group-hover:[&_path]:stroke-[#FF1F4F] group-hover:[&_g]:opacity-100 group-hover:drop-shadow-[0_0_12px_#ff1f4f] pointer-events-none inline-block [&_g]:transition-opacity [&_path]:transition-[stroke]"
                  aria-hidden
                >
                  <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                    <g opacity="0.2">
                      {[
                        ["0.441", "M20 21.5C20.8284 21.5 21.5 20.8284 21.5 20C21.5 19.1716 20.8284 18.5 20 18.5C19.1716 18.5 18.5 19.1716 18.5 20C18.5 20.8284 19.1716 21.5 20 21.5Z"],
                        ["0.501", "M44 21.5C44.8284 21.5 45.5 20.8284 45.5 20C45.5 19.1716 44.8284 18.5 44 18.5C43.1716 18.5 42.5 19.1716 42.5 20C42.5 20.8284 43.1716 21.5 44 21.5Z"],
                        ["0.561", "M68 21.5C68.8284 21.5 69.5 20.8284 69.5 20C69.5 19.1716 68.8284 18.5 68 18.5C67.1716 18.5 66.5 19.1716 66.5 20C66.5 20.8284 67.1716 21.5 68 21.5Z"],
                        ["0.621", "M92 21.5C92.8284 21.5 93.5 20.8284 93.5 20C93.5 19.1716 92.8284 18.5 92 18.5C91.1716 18.5 90.5 19.1716 90.5 20C90.5 20.8284 91.1716 21.5 92 21.5Z"],
                        ["0.681", "M116 21.5C116.828 21.5 117.5 20.8284 117.5 20C117.5 19.1716 116.828 18.5 116 18.5C115.172 18.5 114.5 19.1716 114.5 20C114.5 20.8284 115.172 21.5 116 21.5Z"],
                        ["0.741", "M140 21.5C140.828 21.5 141.5 20.8284 141.5 20C141.5 19.1716 140.828 18.5 140 18.5C139.172 18.5 138.5 19.1716 138.5 20C138.5 20.8284 139.172 21.5 140 21.5Z"],
                        ["0.501", "M20 45.5C20.8284 45.5 21.5 44.8284 21.5 44C21.5 43.1716 20.8284 42.5 20 42.5C19.1716 42.5 18.5 43.1716 18.5 44C18.5 44.8284 19.1716 45.5 20 45.5Z"],
                        ["0.561", "M44 45.5C44.8284 45.5 45.5 44.8284 45.5 44C45.5 43.1716 44.8284 42.5 44 42.5C43.1716 42.5 42.5 43.1716 42.5 44C42.5 44.8284 43.1716 45.5 44 45.5Z"],
                        ["0.621", "M68 45.5C68.8284 45.5 69.5 44.8284 69.5 44C69.5 43.1716 68.8284 42.5 68 42.5C67.1716 42.5 66.5 43.1716 66.5 44C66.5 44.8284 67.1716 45.5 68 45.5Z"],
                        ["0.681", "M92 45.5C92.8284 45.5 93.5 44.8284 93.5 44C93.5 43.1716 92.8284 42.5 92 42.5C91.1716 42.5 90.5 43.1716 90.5 44C90.5 44.8284 91.1716 45.5 92 45.5Z"],
                        ["0.741", "M116 45.5C116.828 45.5 117.5 44.8284 117.5 44C117.5 43.1716 116.828 42.5 116 42.5C115.172 42.5 114.5 43.1716 114.5 44C114.5 44.8284 115.172 45.5 116 45.5Z"],
                        ["0.801", "M140 45.5C140.828 45.5 141.5 44.8284 141.5 44C141.5 43.1716 140.828 42.5 140 42.5C139.172 42.5 138.5 43.1716 138.5 44C138.5 44.8284 139.172 45.5 140 45.5Z"],
                        ["0.561", "M20 69.5C20.8284 69.5 21.5 68.8284 21.5 68C21.5 67.1716 20.8284 66.5 20 66.5C19.1716 66.5 18.5 67.1716 18.5 68C18.5 68.8284 19.1716 69.5 20 69.5Z"],
                        ["0.621", "M44 69.5C44.8284 69.5 45.5 68.8284 45.5 68C45.5 67.1716 44.8284 66.5 44 66.5C43.1716 66.5 42.5 67.1716 42.5 68C42.5 68.8284 43.1716 69.5 44 69.5Z"],
                        ["0.681", "M68 69.5C68.8284 69.5 69.5 68.8284 69.5 68C69.5 67.1716 68.8284 66.5 68 66.5C67.1716 66.5 66.5 67.1716 66.5 68C66.5 68.8284 67.1716 69.5 68 69.5Z"],
                        ["0.741", "M92 69.5C92.8284 69.5 93.5 68.8284 93.5 68C93.5 67.1716 92.8284 66.5 92 66.5C91.1716 66.5 90.5 67.1716 90.5 68C90.5 68.8284 91.1716 69.5 92 69.5Z"],
                        ["0.801", "M116 69.5C116.828 69.5 117.5 68.8284 117.5 68C117.5 67.1716 116.828 66.5 116 66.5C115.172 66.5 114.5 67.1716 114.5 68C114.5 68.8284 115.172 69.5 116 69.5Z"],
                        ["0.861", "M140 69.5C140.828 69.5 141.5 68.8284 141.5 68C141.5 67.1716 140.828 66.5 140 66.5C139.172 66.5 138.5 67.1716 138.5 68C138.5 68.8284 139.172 69.5 140 69.5Z"],
                        ["0.621", "M20 93.5C20.8284 93.5 21.5 92.8284 21.5 92C21.5 91.1716 20.8284 90.5 20 90.5C19.1716 90.5 18.5 91.1716 18.5 92C18.5 92.8284 19.1716 93.5 20 93.5Z"],
                        ["0.681", "M44 93.5C44.8284 93.5 45.5 92.8284 45.5 92C45.5 91.1716 44.8284 90.5 44 90.5C43.1716 90.5 42.5 91.1716 42.5 92C42.5 92.8284 43.1716 93.5 44 93.5Z"],
                        ["0.741", "M68 93.5C68.8284 93.5 69.5 92.8284 69.5 92C69.5 91.1716 68.8284 90.5 68 90.5C67.1716 90.5 66.5 91.1716 66.5 92C66.5 92.8284 67.1716 93.5 68 93.5Z"],
                        ["0.801", "M92 93.5C92.8284 93.5 93.5 92.8284 93.5 92C93.5 91.1716 92.8284 90.5 92 90.5C91.1716 90.5 90.5 91.1716 90.5 92C90.5 92.8284 91.1716 93.5 92 93.5Z"],
                        ["0.861", "M116 93.5C116.828 93.5 117.5 92.8284 117.5 92C117.5 91.1716 116.828 90.5 116 90.5C115.172 90.5 114.5 91.1716 114.5 92C114.5 92.8284 115.172 93.5 116 93.5Z"],
                        ["0.879", "M140 93.5C140.828 93.5 141.5 92.8284 141.5 92C141.5 91.1716 140.828 90.5 140 90.5C139.172 90.5 138.5 91.1716 138.5 92C138.5 92.8284 139.172 93.5 140 93.5Z"],
                        ["0.681", "M20 117.5C20.8284 117.5 21.5 116.828 21.5 116C21.5 115.172 20.8284 114.5 20 114.5C19.1716 114.5 18.5 115.172 18.5 116C18.5 116.828 19.1716 117.5 20 117.5Z"],
                        ["0.741", "M44 117.5C44.8284 117.5 45.5 116.828 45.5 116C45.5 115.172 44.8284 114.5 44 114.5C43.1716 114.5 42.5 115.172 42.5 116C42.5 116.828 43.1716 117.5 44 117.5Z"],
                        ["0.801", "M68 117.5C68.8284 117.5 69.5 116.828 69.5 116C69.5 115.172 68.8284 114.5 68 114.5C67.1716 114.5 66.5 115.172 66.5 116C66.5 116.828 67.1716 117.5 68 117.5Z"],
                        ["0.861", "M92 117.5C92.8284 117.5 93.5 116.828 93.5 116C93.5 115.172 92.8284 114.5 92 114.5C91.1716 114.5 90.5 115.172 90.5 116C90.5 116.828 91.1716 117.5 92 117.5Z"],
                        ["0.879", "M116 117.5C116.828 117.5 117.5 116.828 117.5 116C117.5 115.172 116.828 114.5 116 114.5C115.172 114.5 114.5 115.172 114.5 116C114.5 116.828 115.172 117.5 116 117.5Z"],
                        ["0.819", "M140 117.5C140.828 117.5 141.5 116.828 141.5 116C141.5 115.172 140.828 114.5 140 114.5C139.172 114.5 138.5 115.172 138.5 116C138.5 116.828 139.172 117.5 140 117.5Z"],
                        ["0.741", "M20 141.5C20.8284 141.5 21.5 140.828 21.5 140C21.5 139.172 20.8284 138.5 20 138.5C19.1716 138.5 18.5 139.172 18.5 140C18.5 140.828 19.1716 141.5 20 141.5Z"],
                        ["0.801", "M44 141.5C44.8284 141.5 45.5 140.828 45.5 140C45.5 139.172 44.8284 138.5 44 138.5C43.1716 138.5 42.5 139.172 42.5 140C42.5 140.828 43.1716 141.5 44 141.5Z"],
                        ["0.861", "M68 141.5C68.8284 141.5 69.5 140.828 69.5 140C69.5 139.172 68.8284 138.5 68 138.5C67.1716 138.5 66.5 139.172 66.5 140C66.5 140.828 67.1716 141.5 68 141.5Z"],
                        ["0.879", "M92 141.5C92.8284 141.5 93.5 140.828 93.5 140C93.5 139.172 92.8284 138.5 92 138.5C91.1716 138.5 90.5 139.172 90.5 140C90.5 140.828 91.1716 141.5 92 141.5Z"],
                        ["0.819", "M116 141.5C116.828 141.5 117.5 140.828 117.5 140C117.5 139.172 116.828 138.5 116 138.5C115.172 138.5 114.5 139.172 114.5 140C114.5 140.828 115.172 141.5 116 141.5Z"],
                        ["0.759", "M140 141.5C140.828 141.5 141.5 140.828 141.5 140C141.5 139.172 140.828 138.5 140 138.5C139.172 138.5 138.5 139.172 138.5 140C138.5 140.828 139.172 141.5 140 141.5Z"],
                      ].map(([op, d], i) => (
                        <path key={i} opacity={op} d={d} fill="none" stroke="#FF1F4F" strokeWidth="0.5" />
                      ))}
                    </g>
                  </svg>
                </span>
              )}

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
                </ParticleCard>
                </CapabilityCardGlow>
              ))}
            </div>

            {/* Row 2: 3-column grid (cards 3, 4, 5) with same gap */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {capabilities.slice(2, 5).map((capability, index) => (
                <CapabilityCardGlow
                  key={capability.number}
                  className="min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                >
                <ParticleCard
                  className="w-full h-full rounded-2xl"
                  glowColor={GLOW_RGB}
                  particleCount={10}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect={false}
                >
                <Card
                  className={`relative group ${capability.gridClass} bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden w-full min-h-[380px] xl:min-h-[450px]`}
                  style={
                    {
                      "--animation-delay": `${200 + (index + 2) * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,31,79,0.03)_0%,rgba(0,0,0,0)_50%,rgba(255,31,79,0.02)_100%)]" />

                  {index === 0 && (
                    <span
                      className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter] duration-300 ease-out group-hover:drop-shadow-[0_0_12px_#ff1f4f] pointer-events-none inline-block"
                      aria-hidden
                    >
                      <img src={icon3rd} alt="" className="w-full h-full object-contain" />
                    </span>
                  )}
                  {index === 2 && (
                    <span
                      className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter] duration-300 ease-out group-hover:[&_path]:stroke-[#FF1F4F] group-hover:[&_g]:opacity-100 group-hover:drop-shadow-[0_0_12px_#ff1f4f] pointer-events-none inline-block [&_g]:transition-opacity [&_path]:transition-[stroke]"
                      aria-hidden
                    >
                      <svg width="160" height="160" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <g opacity="0.18">
                          <path opacity="0.7036" d="M116 25H24C21.7909 25 20 26.7909 20 29V39C20 41.2091 21.7909 43 24 43H116C118.209 43 120 41.2091 120 39V29C120 26.7909 118.209 25 116 25Z" stroke="#FF1F4F" strokeWidth="0.8" />
                          <path opacity="0.704448" d="M110 47H30C27.7909 47 26 48.7909 26 51V61C26 63.2091 27.7909 65 30 65H110C112.209 65 114 63.2091 114 61V51C114 48.7909 112.209 47 110 47Z" stroke="#FF1F4F" strokeWidth="0.8" />
                          <path opacity="0.566909" d="M104 69H36C33.7909 69 32 70.7909 32 73V83C32 85.2091 33.7909 87 36 87H104C106.209 87 108 85.2091 108 83V73C108 70.7909 106.209 69 104 69Z" stroke="#FF1F4F" strokeWidth="0.8" />
                          <path opacity="0.461973" d="M98 91H42C39.7909 91 38 92.7909 38 95V105C38 107.209 39.7909 109 42 109H98C100.209 109 102 107.209 102 105V95C102 92.7909 100.209 91 98 91Z" stroke="#FF1F4F" strokeWidth="0.8" />
                          <path opacity="0.3" d="M70 43V47" stroke="#FF5C7C" strokeWidth="0.5" strokeDasharray="2 2" />
                          <path opacity="0.3" d="M70 65V69" stroke="#FF5C7C" strokeWidth="0.5" strokeDasharray="2 2" />
                          <path opacity="0.3" d="M70 87V91" stroke="#FF5C7C" strokeWidth="0.5" strokeDasharray="2 2" />
                        </g>
                      </svg>
                    </span>
                  )}

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
                </ParticleCard>
                </CapabilityCardGlow>
              ))}
            </div>

            {/* Row 3: 6th and 7th cards side by side */}
            <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
              {capabilities.slice(5, 7).map((capability, index) => (
                <CapabilityCardGlow
                  key={capability.number}
                  className="flex-1 min-w-0 translate-y-[-1rem] animate-fade-in opacity-0"
                >
                <ParticleCard
                  className="w-full h-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px] rounded-2xl"
                  glowColor={GLOW_RGB}
                  particleCount={10}
                  enableTilt={false}
                  enableMagnetism={false}
                  clickEffect={false}
                >
                <Card
                  className="relative group bg-[#131313] border-[#2a2a2a] rounded-2xl overflow-hidden w-full min-h-[320px] sm:min-h-[360px] lg:min-h-[417px]"
                  style={
                    {
                      "--animation-delay": `${200 + (5 + index) * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,31,79,0.03)_0%,rgba(0,0,0,0)_50%,rgba(255,31,79,0.02)_100%)]" />

                  {index === 0 && (
                    <span
                      className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter] duration-300 ease-out group-hover:[&_path]:stroke-[#FF1F4F] group-hover:[&_g]:opacity-100 group-hover:drop-shadow-[0_0_12px_#ff1f4f] pointer-events-none inline-block [&_g]:transition-opacity [&_path]:transition-[stroke]"
                      aria-hidden
                    >
                      <svg width="160" height="120" viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-contain">
                        <g opacity="0.18">
                          <path opacity="0.3" d="M14 95L33 70L52 80L71 50L90 65L109 30L128 45L147 35" stroke="#FF5C7C" strokeDasharray="200 200" strokeWidth="1" />
                        </g>
                      </svg>
                    </span>
                  )}
                  {index === 1 && (
                    <span
                      className="absolute top-4 right-4 z-10 w-[160px] h-[160px] transition-[filter,transform] duration-300 ease-out group-hover:[&_path]:stroke-[#FF1F4F] group-hover:[&_path]:fill-[#FF1F4F] group-hover:[&_g]:opacity-100 group-hover:drop-shadow-[0_0_12px_#ff1f4f] group-hover:rotate-[360deg] pointer-events-none inline-block [&_g]:transition-opacity [&_path]:transition-[stroke,fill]"
                      aria-hidden
                    >
                      <svg width="160" height="160" viewBox="0 0 150 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                        <defs>
                          <clipPath id="clip-7th-cap">
                            <rect width="150" height="140" fill="white" />
                          </clipPath>
                        </defs>
                        <g opacity="0.2" clipPath="url(#clip-7th-cap)">
                          <path opacity="0.29425" d="M40 30L100 25" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.2074" d="M100 25L130 60" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.2505" d="M130 60L110 100" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.279571" d="M110 100L50 110" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.14575" d="M50 110L20 70" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.1846" d="M20 70L40 30" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.3895" d="M40 30L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.142429" d="M100 25L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.38575" d="M130 60L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.3766" d="M110 100L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.2295" d="M50 110L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.194714" d="M20 70L75 65" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.35" d="M40 33.5C41.933 33.5 43.5 31.933 43.5 30C43.5 28.067 41.933 26.5 40 26.5C38.067 26.5 36.5 28.067 36.5 30C36.5 31.933 38.067 33.5 40 33.5Z" fill="#FF1F4F" />
                          <path opacity="0.35" d="M100 28.5C101.933 28.5 103.5 26.933 103.5 25C103.5 23.067 101.933 21.5 100 21.5C98.067 21.5 96.5 23.067 96.5 25C96.5 26.933 98.067 28.5 100 28.5Z" fill="#FF1F4F" />
                          <path opacity="0.35" d="M130 63.5C131.933 63.5 133.5 61.933 133.5 60C133.5 58.067 131.933 56.5 130 56.5C128.067 56.5 126.5 58.067 126.5 60C126.5 61.933 128.067 63.5 130 63.5Z" fill="#FF1F4F" />
                          <path opacity="0.35" d="M110 103.5C111.933 103.5 113.5 101.933 113.5 100C113.5 98.067 111.933 96.5 110 96.5C108.067 96.5 106.5 98.067 106.5 100C106.5 101.933 108.067 103.5 110 103.5Z" fill="#FF1F4F" />
                          <path opacity="0.35" d="M50 113.5C51.933 113.5 53.5 111.933 53.5 110C53.5 108.067 51.933 106.5 50 106.5C48.067 106.5 46.5 108.067 46.5 110C46.5 111.933 48.067 113.5 50 113.5Z" fill="#FF1F4F" />
                          <path opacity="0.35" d="M20 73.5C21.933 73.5 23.5 71.933 23.5 70C23.5 68.067 21.933 66.5 20 66.5C18.067 66.5 16.5 68.067 16.5 70C16.5 71.933 18.067 73.5 20 73.5Z" fill="#FF1F4F" />
                          <path opacity="0.6" d="M75 71C78.3137 71 81 68.3137 81 65C81 61.6863 78.3137 59 75 59C71.6863 59 69 61.6863 69 65C69 68.3137 71.6863 71 75 71Z" fill="#FF1F4F" />
                          <path opacity="0.16475" d="M75 77C81.6274 77 87 71.6274 87 65C87 58.3726 81.6274 53 75 53C68.3726 53 63 58.3726 63 65C63 71.6274 68.3726 77 75 77Z" stroke="#FF1F4F" strokeWidth="0.5" />
                          <path opacity="0.6" d="M0 2C1.10457 2 2 1.10457 2 0C2 -1.10457 1.10457 -2 0 -2C-1.10457 -2 -2 -1.10457 -2 0C-2 1.10457 -1.10457 2 0 2Z" fill="#FF5C7C" />
                        </g>
                      </svg>
                    </span>
                  )}

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
                </ParticleCard>
                </CapabilityCardGlow>
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

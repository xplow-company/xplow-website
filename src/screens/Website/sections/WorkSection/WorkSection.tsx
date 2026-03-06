import { useNavigate } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { workProjects } from "../../../../data/work";

/* ─────────────────────────────────────────────
   WorkCard — Premium interactive card
   Everything visible at rest. No guessing.
   ───────────────────────────────────────────── */

interface CardProps {
  project: (typeof workProjects)[0];
  index: number;
  variant: "hero" | "medium" | "compact";
}

const WorkCard = ({ project, index, variant }: CardProps) => {
  const navigate = useNavigate();

  const sizes = {
    hero: {
      container: "lg:col-span-7 lg:row-span-2 min-h-[360px] md:min-h-[440px] lg:min-h-[580px]",
      title: "text-[30px] md:text-[38px] lg:text-[46px] tracking-[-1.5px]",
      metric: "text-[16px] md:text-[18px]",
      number: "text-[120px] md:text-[160px] lg:text-[200px]",
      padding: "p-7 md:p-9 lg:p-12",
      ctaText: "text-[12px] px-5 py-2.5",
    },
    medium: {
      container: "lg:col-span-5 min-h-[260px] md:min-h-[300px] lg:min-h-[280px]",
      title: "text-[22px] md:text-[26px] tracking-[-0.5px]",
      metric: "text-[14px]",
      number: "text-[90px] md:text-[110px]",
      padding: "p-6 md:p-8",
      ctaText: "text-[11px] px-4 py-2",
    },
    compact: {
      container: "lg:col-span-4 min-h-[250px] md:min-h-[290px]",
      title: "text-[18px] md:text-[21px] tracking-[-0.4px]",
      metric: "text-[13px]",
      number: "text-[80px] md:text-[90px]",
      padding: "p-5 md:p-6",
      ctaText: "text-[10px] px-3.5 py-1.5",
    },
  }[variant];

  const num = String(index + 1).padStart(2, "0");

  return (
    <article
      onClick={() => navigate(`/work/${project.slug}`)}
      className={`group relative overflow-hidden rounded-[24px] ${sizes.container}
        border border-white/[0.08] bg-[#0c0c0c]
        cursor-pointer
        hover:-translate-y-2 hover:border-[#ff1f4f]/40
        hover:shadow-[0_0_0_1px_rgba(255,31,79,0.2),0_30px_60px_-20px_rgba(0,0,0,0.7),0_0_40px_-8px_rgba(255,31,79,0.12)]
        transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]`}
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0">
        <img
          src={project.image}
          alt=""
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05] opacity-50 group-hover:opacity-60"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-[#0a0a0a]/30" />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a]/50 via-transparent to-transparent" />
        {/* Hover red tint */}
        <div className="absolute inset-0 bg-[#ff1f4f]/0 group-hover:bg-[#ff1f4f]/[0.03] transition-colors duration-600" />
      </div>

      {/* ── Large faded number ── */}
      <div
        className={`absolute top-[-10px] right-[-5px] ${sizes.number} [font-family:'Poppins',Helvetica] font-black
          text-white/[0.03] group-hover:text-[#ff1f4f]/[0.06]
          leading-none select-none pointer-events-none
          transition-colors duration-600`}
      >
        {num}
      </div>

      {/* ── Top-left: category badge ── */}
      <div className={`absolute top-0 left-0 right-0 ${sizes.padding} flex items-start justify-between`}>
        <span
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
            bg-white/[0.06] backdrop-blur-md border border-white/[0.08]
            [font-family:'Inter',Helvetica] font-semibold text-white/50 text-[9px] tracking-[2.5px] uppercase
            group-hover:border-[#ff1f4f]/30 group-hover:text-white/70
            transition-all duration-500"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff1f4f] animate-pulse-dot" />
          {project.category}
        </span>
      </div>

      {/* ── Bottom content — always fully visible ── */}
      <div
        className={`absolute bottom-0 left-0 right-0 ${sizes.padding}
          transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:-translate-y-1`}
      >
        {/* Title */}
        <h3
          className={`[font-family:'Poppins',Helvetica] font-bold text-white ${sizes.title}
            leading-[1.08] mb-3
            group-hover:text-[#ff1f4f] transition-colors duration-400`}
        >
          {project.title}
        </h3>

        {/* Metric + Divider + CTA row — ALWAYS visible */}
        <div className="flex items-center justify-between gap-4 mt-1">
          {/* Metric pill */}
          <div className="flex items-center gap-3">
            <span
              className={`[font-family:'Inter',Helvetica] font-bold ${sizes.metric}
                text-[#ff1f4f] tracking-tight`}
            >
              {project.metric}
            </span>
            <span className="w-[1px] h-4 bg-white/10" />
            <span className="[font-family:'Inter',Helvetica] font-normal text-white/30 text-[11px] tracking-wide uppercase">
              {project.year}
            </span>
          </div>

          {/* Always-visible CTA button */}
          <span
            className={`inline-flex items-center gap-2 ${sizes.ctaText} rounded-full
              bg-white/[0.08] backdrop-blur-sm border border-white/[0.12]
              [font-family:'Inter',Helvetica] font-semibold tracking-[0.8px] uppercase
              text-white/60
              group-hover:bg-[#ff1f4f] group-hover:text-white group-hover:border-[#ff1f4f]
              group-hover:shadow-[0_4px_20px_rgba(255,31,79,0.35)]
              transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
              group-hover:-translate-y-0.5 shrink-0`}
          >
            Case Study
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      {/* ── Bottom accent line — expands on hover ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff1f4f] via-[#ff3d6a] to-[#ff1f4f] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />

      {/* ── Top shimmer line on hover ── */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#ff1f4f]/0 to-transparent group-hover:via-[#ff1f4f]/30 transition-all duration-700" />
    </article>
  );
};

/* ─────────────────────────
   Main Section
   ───────────────────────── */

export const WorkSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] blur-[180px] opacity-[0.06] pointer-events-none [background:radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,31,79,0.25)_0%,transparent_70%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] opacity-[0.04] pointer-events-none [background:radial-gradient(50%_50%_at_90%_10%,rgba(255,31,79,0.15)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-[100px] opacity-[0.03] pointer-events-none [background:radial-gradient(50%_50%_at_10%_90%,rgba(255,31,79,0.1)_0%,transparent_60%)]" />

      <div className="container relative mx-auto px-4 md:px-4 lg:px-12 xl:px-20 max-w-[1500px]">
        {/* ── HEADER ── */}
        <header className="mb-20 md:mb-28 lg:mb-32 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div className="max-w-[800px]">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-[2px] bg-gradient-to-r from-[#ff1f4f] to-[#ff1f4f]/60" />
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3.5px] uppercase">
                  Selected Work
                </span>
              </div>
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[42px] sm:text-[52px] md:text-[62px] lg:text-[76px] tracking-[-3px] leading-[0.98]">
                Work that{" "}
                <span className="text-[#ff1f4f]">speaks louder.</span>
              </h2>
            </div>
            <div className="lg:text-right space-y-3">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#666] text-[15px] leading-[1.8] max-w-[400px]">
                Six projects. One standard: strategy, design, and engineering in lockstep.
              </p>
              {/* Interactive hint — always visible */}
              <div className="flex items-center gap-3 lg:justify-end">
                <span className="inline-block w-5 h-[1px] bg-[#ff1f4f]/40" />
                <p className="[font-family:'Inter',Helvetica] font-medium text-[#ff1f4f]/60 text-[11px] tracking-[1.5px] uppercase">
                  Tap a project to dive in
                </p>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#ff1f4f]/40" />
              </div>
            </div>
          </div>
        </header>

        {/* ── BENTO GRID ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 md:gap-6 lg:gap-7 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms]">
          {/* Card 1 — Hero */}
          <WorkCard project={workProjects[0]} index={0} variant="hero" />

          {/* Card 2 */}
          <WorkCard project={workProjects[1]} index={1} variant="medium" />

          {/* Card 3 */}
          <WorkCard project={workProjects[2]} index={2} variant="medium" />

          {/* Cards 4, 5, 6 */}
          {workProjects.slice(3, 6).map((project, i) => (
            <WorkCard key={project.id} project={project} index={i + 3} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
};


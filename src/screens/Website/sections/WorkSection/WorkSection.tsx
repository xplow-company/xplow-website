import { useNavigate } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { workProjects } from "../../../../data/work";

export const WorkSection = (): JSX.Element => {
  const navigate = useNavigate();

  return (
    <section
      id="work"
      className="relative w-full bg-[#080808] overflow-hidden py-24 md:py-32 lg:py-40"
    >
      {/* Ambient glow — subtle, premium */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1400px] h-[900px] blur-[180px] opacity-[0.06] pointer-events-none [background:radial-gradient(ellipse_50%_50%_at_50%_50%,rgba(255,31,79,0.25)_0%,transparent_70%)]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] blur-[120px] opacity-[0.04] pointer-events-none [background:radial-gradient(50%_50%_at_90%_10%,rgba(255,31,79,0.15)_0%,transparent_60%)]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] blur-[100px] opacity-[0.03] pointer-events-none [background:radial-gradient(50%_50%_at_10%_90%,rgba(255,31,79,0.1)_0%,transparent_60%)]" />

      <div className="container relative mx-auto px-6 md:px-12 lg:px-20 max-w-[1500px]">
        {/* Header — editorial, bold */}
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
            <p className="[font-family:'Inter',Helvetica] font-normal text-[#666] text-[15px] leading-[1.8] max-w-[400px] lg:text-right">
              Six projects. One standard: strategy, design, and engineering in lockstep.
            </p>
          </div>
        </header>

        {/* Bento grid — premium cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-7 lg:gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:150ms]">
          {/* Card 1 — hero */}
          <article
            onClick={() => navigate(`/work/${workProjects[0].slug}`)}
            className="group relative overflow-hidden rounded-[28px] lg:col-span-7 lg:row-span-2 border border-white/[0.08] bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_4px_24px_-4px_rgba(0,0,0,0.5)] hover:border-[#ff1f4f]/30 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.15)_inset,0_0_0_1px_rgba(255,31,79,0.2),0_40px_80px_-24px_rgba(0,0,0,0.6)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer min-h-[340px] md:min-h-[420px] lg:min-h-[560px]"
          >
            <div className="absolute inset-0">
              <img
                src={workProjects[0].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/40 to-[#080808]/5" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.4)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[#ff1f4f]/0 group-hover:bg-[#ff1f4f]/[0.03] transition-colors duration-500" />
            </div>
            {workProjects[0].logoUrl && (
              <div className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/[0.1] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)]">
                <img src={workProjects[0].logoUrl} alt={workProjects[0].title} className="h-7 w-auto object-contain drop-shadow-sm" />
              </div>
            )}
            <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/[0.08] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110 border border-white/[0.12] shadow-lg">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 lg:p-14">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase block mb-3">
                {workProjects[0].category}
              </span>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] md:text-[40px] lg:text-[48px] tracking-[-1.5px] leading-[1.06] group-hover:text-[#ff1f4f] transition-colors duration-300 drop-shadow-sm">
                {workProjects[0].title}
              </h3>
              <p className="mt-4 [font-family:'Inter',Helvetica] text-[#ff1f4f] font-bold text-[17px] tracking-tight">
                {workProjects[0].metric}
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article
            onClick={() => navigate(`/work/${workProjects[1].slug}`)}
            className="group relative overflow-hidden rounded-[28px] lg:col-span-5 border border-white/[0.08] bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_4px_20px_-4px_rgba(0,0,0,0.4)] hover:border-[#ff1f4f]/30 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.12)_inset,0_0_0_1px_rgba(255,31,79,0.15),0_24px_48px_-16px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer min-h-[260px] md:min-h-[300px] lg:min-h-[270px]"
          >
            <div className="absolute inset-0">
              <img
                src={workProjects[1].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.3)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[#ff1f4f]/0 group-hover:bg-[#ff1f4f]/[0.03] transition-colors duration-500" />
            </div>
            {workProjects[1].logoUrl && (
              <div className="absolute top-5 left-5 flex items-center justify-center px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/[0.1] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]">
                <img src={workProjects[1].logoUrl} alt={workProjects[1].title} className="h-6 w-auto object-contain drop-shadow-sm" />
              </div>
            )}
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/[0.12] shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[9px] tracking-[2.5px] uppercase block mb-2">
                {workProjects[1].category}
              </span>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[22px] md:text-[26px] tracking-[-0.5px] group-hover:text-[#ff1f4f] transition-colors duration-300 drop-shadow-sm">
                {workProjects[1].title}
              </h3>
              <p className="mt-2 [font-family:'Inter',Helvetica] text-[#ff1f4f] font-semibold text-[15px] tracking-tight">
                {workProjects[1].metric}
              </p>
            </div>
          </article>

          {/* Card 3 */}
          <article
            onClick={() => navigate(`/work/${workProjects[2].slug}`)}
            className="group relative overflow-hidden rounded-[28px] lg:col-span-5 border border-white/[0.08] bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_4px_20px_-4px_rgba(0,0,0,0.4)] hover:border-[#ff1f4f]/30 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.12)_inset,0_0_0_1px_rgba(255,31,79,0.15),0_24px_48px_-16px_rgba(0,0,0,0.5)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer min-h-[260px] md:min-h-[300px] lg:min-h-[270px]"
          >
            <div className="absolute inset-0">
              <img
                src={workProjects[2].image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/35 to-transparent" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.3)_0%,transparent_60%)]" />
              <div className="absolute inset-0 bg-[#ff1f4f]/0 group-hover:bg-[#ff1f4f]/[0.03] transition-colors duration-500" />
            </div>
            {workProjects[2].logoUrl && (
              <div className="absolute top-5 left-5 flex items-center justify-center px-3 py-2 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/[0.1] shadow-[0_4px_20px_-4px_rgba(0,0,0,0.4)]">
                <img src={workProjects[2].logoUrl} alt={workProjects[2].title} className="h-6 w-auto object-contain drop-shadow-sm" />
              </div>
            )}
            <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/[0.08] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/[0.12] shadow-lg">
              <ArrowUpRight className="w-4 h-4 text-white" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[9px] tracking-[2.5px] uppercase block mb-2">
                {workProjects[2].category}
              </span>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[22px] md:text-[26px] tracking-[-0.5px] group-hover:text-[#ff1f4f] transition-colors duration-300 drop-shadow-sm">
                {workProjects[2].title}
              </h3>
              <p className="mt-2 [font-family:'Inter',Helvetica] text-[#ff1f4f] font-semibold text-[15px] tracking-tight">
                {workProjects[2].metric}
              </p>
            </div>
          </article>

          {/* Cards 4, 5, 6 */}
          {workProjects.slice(3, 6).map((project) => (
            <article
              key={project.id}
              onClick={() => navigate(`/work/${project.slug}`)}
              className="group relative overflow-hidden rounded-[28px] lg:col-span-4 border border-white/[0.08] bg-[#0a0a0a] shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset,0_4px_16px_-4px_rgba(0,0,0,0.35)] hover:border-[#ff1f4f]/30 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.1)_inset,0_0_0_1px_rgba(255,31,79,0.12),0_20px_40px_-12px_rgba(0,0,0,0.45)] hover:-translate-y-0.5 transition-all duration-500 cursor-pointer min-h-[240px] md:min-h-[280px]"
            >
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/30 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(0,0,0,0.25)_0%,transparent_60%)]" />
                <div className="absolute inset-0 bg-[#ff1f4f]/0 group-hover:bg-[#ff1f4f]/[0.03] transition-colors duration-500" />
              </div>
              {project.logoUrl && (
                <div className="absolute top-4 left-4 flex items-center justify-center px-2.5 py-1.5 rounded-2xl bg-black/40 backdrop-blur-2xl border border-white/[0.1] shadow-[0_4px_16px_-4px_rgba(0,0,0,0.4)]">
                  <img src={project.logoUrl} alt={project.title} className="h-5 w-auto object-contain drop-shadow-sm" />
                </div>
              )}
              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/[0.08] backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/[0.12] shadow-lg">
                <ArrowUpRight className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 min-w-0">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[9px] tracking-[2.5px] uppercase block mb-1.5 break-words">
                  {project.category}
                </span>
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[18px] md:text-[20px] tracking-[-0.4px] group-hover:text-[#ff1f4f] transition-colors duration-300 break-words drop-shadow-sm">
                  {project.title}
                </h3>
                <p className="mt-1.5 [font-family:'Inter',Helvetica] text-[#ff1f4f] font-semibold text-[13px] tracking-tight break-words">
                  {project.metric}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

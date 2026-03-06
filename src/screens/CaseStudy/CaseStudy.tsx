import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, ArrowUpRight } from "lucide-react";
import { workProjects } from "../../data/work";

export const CaseStudy = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = workProjects.find((p) => p.slug === slug);
  const currentIndex = workProjects.findIndex((p) => p.slug === slug);
  const nextProject = workProjects[(currentIndex + 1) % workProjects.length];

  const goBack = () => {
    navigate("/");
    setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-center">
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-2xl mb-4">Project not found</h1>
          <button onClick={goBack} className="text-[#ff1f4f] hover:underline [font-family:'Inter',Helvetica] text-sm">← Back to work</button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] overflow-x-hidden">

      {/* ─── NAV ─── */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-5 md:px-10 lg:px-16 py-4 bg-[#0a0a0a]/85 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          <button onClick={goBack} className="group flex items-center gap-2 text-white/50 hover:text-white transition-colors [font-family:'Inter',Helvetica] text-[13px] font-medium">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <a href="/" className="[font-family:'Clash_Display',sans-serif] font-semibold text-white text-[17px] tracking-tight">XPLOW</a>
          {project.projectUrl ? (
            <a href={project.projectUrl} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-white/40 hover:text-[#ff1f4f] transition-colors [font-family:'Inter',Helvetica] text-[12px] font-semibold tracking-wide uppercase">
              Visit Live <ExternalLink className="w-3 h-3" />
            </a>
          ) : <div />}
        </div>
      </nav>

      {/* ─── HERO IMAGE ─── */}
      <div className="pt-[72px]">
        <div className="w-full px-5 md:px-10 lg:px-16 pt-6">
          <div className="max-w-[1200px] mx-auto overflow-hidden rounded-[20px] md:rounded-[28px]">
            <div className="relative aspect-[16/7] md:aspect-[2.4/1]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── PROJECT HEADER ─── */}
      <div className="px-5 md:px-10 lg:px-16 pt-12 md:pt-16 pb-12 md:pb-16 border-b border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase block mb-4">
                {project.category}
              </span>
              <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[40px] sm:text-[52px] md:text-[64px] lg:text-[78px] tracking-[-2.5px] leading-[0.95]">
                {project.title}
              </h1>
            </div>
            <div className="flex flex-wrap items-center gap-6 lg:gap-8">
              <div className="px-5 py-3 rounded-2xl bg-[#ff1f4f]/10 border border-[#ff1f4f]/20">
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[24px] tracking-tight">{project.metric}</span>
              </div>
              {project.client && (
                <div>
                  <span className="block [font-family:'Inter',Helvetica] text-white/25 text-[10px] tracking-[2px] uppercase font-semibold mb-0.5">Client</span>
                  <span className="[font-family:'Inter',Helvetica] text-white/80 text-[15px] font-medium">{project.client}</span>
                </div>
              )}
              {project.year && (
                <div>
                  <span className="block [font-family:'Inter',Helvetica] text-white/25 text-[10px] tracking-[2px] uppercase font-semibold mb-0.5">Year</span>
                  <span className="[font-family:'Inter',Helvetica] text-white/80 text-[15px] font-medium">{project.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ─── OVERVIEW: Services + Tech ─── */}
      {(project.services || project.techStack) && (
        <div className="px-5 md:px-10 lg:px-16 py-12 md:py-16 border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {project.services && project.services.length > 0 && (
              <div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/30 text-[11px] tracking-[3px] uppercase mb-5">Services</h3>
                <div className="flex flex-wrap gap-2">
                  {project.services.map((s) => (
                    <span key={s} className="px-4 py-2 rounded-full bg-[#161616] border border-white/[0.08] [font-family:'Inter',Helvetica] text-white/70 text-[13px] font-medium">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {project.techStack && project.techStack.length > 0 && (
              <div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/30 text-[11px] tracking-[3px] uppercase mb-5">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="px-4 py-2 rounded-full bg-white text-[#1a1a1a] border border-white/80 [font-family:'Inter',Helvetica] text-[13px] font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── CHALLENGE & SOLUTION ─── */}
      {(project.challenge || project.solution) && (
        <div className="px-5 md:px-10 lg:px-16 py-12 md:py-16 border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {project.challenge && (
              <div>
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/30 text-[11px] tracking-[3px] uppercase mb-5">The Challenge</h3>
                <p className="[font-family:'Inter',Helvetica] text-white/60 text-[17px] leading-[1.85]">
                  {project.challenge}
                </p>
              </div>
            )}
            {project.solution && (
              <div className="p-8 md:p-10 rounded-[20px] bg-[#ff1f4f] shadow-[0_8px_30px_rgba(255,31,79,0.15)]">
                <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/70 text-[11px] tracking-[3px] uppercase mb-5">Our Approach</h3>
                <p className="[font-family:'Inter',Helvetica] text-white text-[17px] leading-[1.85]">
                  {project.solution}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ─── PROCESS ─── */}
      {project.process && project.process.length > 0 && (
        <div className="px-5 md:px-10 lg:px-16 py-12 md:py-16 border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/30 text-[11px] tracking-[3px] uppercase mb-10">Our Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-[20px] overflow-hidden">
              {project.process.map((phase) => (
                <div key={phase.step} className="bg-[#0a0a0a] p-7 md:p-8">
                  <span className="[font-family:'Poppins',Helvetica] font-black text-[#ff1f4f] text-[36px] leading-none block mb-4 opacity-30">
                    {String(phase.step).padStart(2, "0")}
                  </span>
                  <h4 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[17px] tracking-[-0.3px] mb-3">
                    {phase.title}
                  </h4>
                  <p className="[font-family:'Inter',Helvetica] text-white/40 text-[14px] leading-[1.7]">
                    {phase.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── RESULTS ─── */}
      {project.results && project.results.length > 0 && (
        <div className="px-5 md:px-10 lg:px-16 py-12 md:py-16 border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto">
            <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white/30 text-[11px] tracking-[3px] uppercase mb-10">Results</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {project.results.map((r) => (
                <div key={r.label} className="text-center">
                  <div className="[font-family:'Poppins',Helvetica] font-bold text-white text-[48px] md:text-[60px] tracking-[-2px] leading-none mb-2">
                    {r.value}
                  </div>
                  <div className="[font-family:'Inter',Helvetica] text-white/30 text-[12px] font-semibold tracking-[2px] uppercase">
                    {r.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ─── TESTIMONIAL ─── */}
      {project.quote && (
        <div className="px-5 md:px-10 lg:px-16 py-16 md:py-24 border-b border-white/[0.06]">
          <div className="max-w-[800px] mx-auto text-center">
            <p className="[font-family:'Inter',Helvetica] text-white/80 text-[22px] md:text-[28px] leading-[1.6] mb-8 font-light italic">
              &ldquo;{project.quote.text}&rdquo;
            </p>
            <cite className="[font-family:'Poppins',Helvetica] font-bold text-white text-[15px] not-italic block">
              {project.quote.author}
            </cite>
            <span className="[font-family:'Inter',Helvetica] text-[#ff1f4f]/60 text-[13px] font-medium">
              {project.quote.role}
            </span>
          </div>
        </div>
      )}

      {/* ─── VISIT CTA ─── */}
      {project.projectUrl && (
        <div className="px-5 md:px-10 lg:px-16 py-12 md:py-16 border-b border-white/[0.06]">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <span className="[font-family:'Inter',Helvetica] text-white/25 text-[10px] tracking-[2px] uppercase font-semibold block mb-1">Live Product</span>
              <p className="[font-family:'Poppins',Helvetica] font-bold text-white text-[20px] md:text-[22px] tracking-[-0.5px]">
                See {project.title} in action
              </p>
            </div>
            <a
              href={project.projectUrl} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 h-12 px-7 bg-[#ff1f4f] hover:bg-[#e6153f] text-white rounded-full
                [font-family:'Inter',Helvetica] font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(255,31,79,0.3)] shrink-0"
            >
              Visit Website <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      {/* ─── NEXT PROJECT ─── */}
      {nextProject && (
        <div
          onClick={() => { navigate(`/work/${nextProject.slug}`); window.scrollTo(0, 0); }}
          className="group cursor-pointer px-5 md:px-10 lg:px-16 py-16 md:py-24 border-b border-white/[0.06] hover:bg-[#0e0e0e] transition-colors duration-500"
        >
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="[font-family:'Inter',Helvetica] text-white/25 text-[10px] tracking-[2px] uppercase font-semibold block mb-3">Next Case Study</span>
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] md:text-[44px] tracking-[-1.5px] leading-[1] group-hover:text-[#ff1f4f] transition-colors duration-400">
                {nextProject.title}
              </h3>
              <p className="mt-2 [font-family:'Inter',Helvetica] text-[#ff1f4f]/70 font-semibold text-[16px]">{nextProject.metric}</p>
            </div>
            <div className="flex items-center gap-2 text-white/30 group-hover:text-[#ff1f4f] transition-colors duration-400 shrink-0">
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[12px] tracking-[1.5px] uppercase">View</span>
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      )}

      {/* ─── CONTACT CTA ─── */}
      <div className="px-5 md:px-10 lg:px-16 py-20 md:py-28">
        <div className="max-w-[600px] mx-auto text-center">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[28px] md:text-[36px] tracking-[-1px] leading-[1.1] mb-4">
            Ready to build something <span className="text-[#ff1f4f]">iconic?</span>
          </h3>
          <p className="[font-family:'Inter',Helvetica] text-white/35 text-[15px] leading-[1.7] mb-8">
            Let&apos;s discuss your next project.
          </p>
          <a
            href="mailto:team@xplow.in"
            className="inline-flex items-center gap-2 h-12 px-8 bg-[#ff1f4f] hover:bg-[#e6153f] text-white rounded-full
              [font-family:'Inter',Helvetica] font-semibold text-[14px] transition-all duration-300 hover:shadow-[0_6px_24px_rgba(255,31,79,0.3)]"
          >
            Get in touch <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

    </div>
  );
};

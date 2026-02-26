import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { workProjects } from "../../data/work";

export const CaseStudy = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = workProjects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-2xl font-bold mb-4">Project not found</h1>
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="text-[#ff1f4f] hover:underline"
          >
            ← Back to work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808]">
      {/* Nav — minimal, premium */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-20 py-5 bg-[#080808]/80 backdrop-blur-2xl border-b border-white/[0.06]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <button
            onClick={() => {
              navigate("/");
              setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100);
            }}
            className="flex items-center gap-2 [font-family:'Inter',Helvetica] text-[#999] hover:text-white transition-colors text-[13px] font-medium tracking-wide"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to work
          </button>
          <a href="/" className="[font-family:'Clash_Display',sans-serif] font-semibold text-white text-[17px] tracking-tight">
            XPLOW
          </a>
        </div>
      </nav>

      {/* Hero — bold, editorial */}
      <header className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12">
            <div>
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase block mb-6">
                {project.category}
              </span>
              <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[48px] sm:text-[56px] md:text-[72px] lg:text-[88px] xl:text-[96px] tracking-[-3px] leading-[0.95] mb-8">
                {project.title}
              </h1>
              <div className="flex flex-wrap items-center gap-8 [font-family:'Inter',Helvetica] text-[#888] text-[14px]">
                {project.client && (
                  <span><strong className="text-white/90">Client</strong> {project.client}</span>
                )}
                {project.year && (
                  <span><strong className="text-white/90">Year</strong> {project.year}</span>
                )}
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[24px] tracking-tight">
                  {project.metric}
                </span>
                {project.projectUrl && (
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#ff1f4f] hover:text-white font-semibold transition-colors"
                  >
                    Visit project
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero image — full-bleed, premium */}
      <div className="w-full px-6 md:px-12 lg:px-20 mb-32">
        <div className="relative max-w-[1400px] mx-auto overflow-hidden rounded-[20px] border border-white/[0.08] shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_40px_80px_-20px_rgba(0,0,0,0.6)]">
          <div className="relative aspect-[21/9] md:aspect-[3/1]">
            <img
              src={project.image}
              alt={`${project.title} — project showcase`}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
          </div>
          {/* Brand logo — premium placement */}
          {project.logoUrl && (
            <div className="absolute bottom-8 left-8 right-8 md:left-auto md:right-12 md:w-auto flex items-center justify-end">
              <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-black/60 backdrop-blur-2xl border border-white/10">
                <img
                  src={project.logoUrl}
                  alt=""
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = "none";
                  }}
                />
                <span className="[font-family:'Poppins',Helvetica] font-bold text-white text-xl tracking-tight hidden sm:block">
                  {project.title}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content — editorial layout */}
      <main className="px-6 md:px-12 lg:px-20 pb-32">
        <div className="max-w-[900px] mx-auto">
          {/* Services — pill row */}
          {project.services && project.services.length > 0 && (
            <section className="mb-24">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase mb-6">
                Services
              </p>
              <div className="flex flex-wrap gap-3">
                {project.services.map((s) => (
                  <span
                    key={s}
                    className="px-5 py-2.5 rounded-full bg-white/[0.04] border border-white/[0.08] [font-family:'Inter',Helvetica] text-[#ccc] text-[14px] font-medium"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Tech Stack */}
          {project.techStack && project.techStack.length > 0 && (
            <section className="mb-24">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase mb-6">
                Tech stack
              </p>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-5 py-3 rounded-xl bg-[#ff1f4f]/10 border border-[#ff1f4f]/20 [font-family:'Inter',Helvetica] text-[#ff1f4f] text-[14px] font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Process — numbered, bold */}
          {project.process && project.process.length > 0 && (
            <section className="mb-32">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase mb-12">
                Our process
              </p>
              <div className="space-y-0">
                {project.process.map((phase) => (
                  <div
                    key={phase.step}
                    className="group py-10 border-b border-white/[0.06] last:border-0 first:pt-0"
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      <span className="[font-family:'Poppins',Helvetica] font-bold text-white/20 text-[48px] md:text-[64px] leading-none tabular-nums">
                        {String(phase.step).padStart(2, "0")}
                      </span>
                      <div>
                        <h4 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[22px] md:text-[26px] tracking-[-0.5px] mb-3">
                          {phase.title}
                        </h4>
                        <p className="[font-family:'Inter',Helvetica] text-[#888] text-[17px] leading-[1.75] max-w-[600px]">
                          {phase.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenge & Solution — bold blocks */}
          {project.challenge && (
            <section className="mb-24">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[28px] md:text-[32px] tracking-[-0.5px] mb-6">
                The challenge
              </h3>
              <p className="[font-family:'Inter',Helvetica] text-[#aaa] text-[19px] leading-[1.8]">
                {project.challenge}
              </p>
            </section>
          )}

          {project.solution && (
            <section className="mb-32">
              <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[28px] md:text-[32px] tracking-[-0.5px] mb-6">
                Our approach
              </h3>
              <p className="[font-family:'Inter',Helvetica] text-[#aaa] text-[19px] leading-[1.8]">
                {project.solution}
              </p>
            </section>
          )}

          {/* Results — bold, impactful */}
          {project.results && project.results.length > 0 && (
            <section className="mb-32">
              <p className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase mb-12">
                Results
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {project.results.map((r) => (
                  <div
                    key={r.label}
                    className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#ff1f4f]/30 transition-colors duration-300"
                  >
                    <div className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[40px] md:text-[48px] tracking-[-2px] leading-none mb-2">
                      {r.value}
                    </div>
                    <div className="[font-family:'Inter',Helvetica] text-[#888] text-[14px] font-medium">
                      {r.label}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Project CTA */}
          {project.projectUrl && (
            <section className="mb-32">
              <div className="p-8 md:p-10 rounded-2xl bg-gradient-to-br from-[#ff1f4f]/10 to-transparent border border-[#ff1f4f]/20">
                <p className="[font-family:'Inter',Helvetica] text-[#999] text-[14px] mb-6">
                  Explore the live project
                </p>
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 h-14 px-8 bg-[#ff1f4f] hover:bg-[#ff3366] text-white rounded-full [font-family:'Poppins',Helvetica] font-bold text-[16px] transition-all duration-300 hover:scale-[1.02]"
                >
                  Visit website
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </section>
          )}

          {/* Quote — editorial, bold */}
          {project.quote && (
            <blockquote className="relative pl-0 md:pl-12 border-l-0 md:border-l-2 md:border-[#ff1f4f] py-12">
              <p className="[font-family:'Inter',Helvetica] text-[#ddd] text-[24px] md:text-[28px] leading-[1.6] mb-8 max-w-[700px]">
                &ldquo;{project.quote.text}&rdquo;
              </p>
              <footer>
                <cite className="[font-family:'Poppins',Helvetica] font-bold text-white text-[18px] not-italic block">
                  {project.quote.author}
                </cite>
                <div className="[font-family:'Inter',Helvetica] text-[#888] text-[14px] mt-1">
                  {project.quote.role}
                </div>
              </footer>
            </blockquote>
          )}
        </div>
      </main>

      {/* CTA — bold close */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-white/[0.06]">
        <div className="max-w-[900px] mx-auto text-center">
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] md:text-[44px] tracking-[-1px] mb-6">
            Ready to build something iconic?
          </h3>
          <p className="[font-family:'Inter',Helvetica] text-[#888] text-[17px] mb-10">
            Let&apos;s discuss your next project.
          </p>
          <a
            href="mailto:team@xplow.in"
            className="inline-flex items-center gap-2 h-14 px-10 bg-[#ff1f4f] hover:bg-[#ff3366] text-white rounded-full [font-family:'Poppins',Helvetica] font-bold text-[16px] transition-all duration-300 hover:scale-[1.02]"
          >
            Get in touch
          </a>
        </div>
      </section>
    </div>
  );
};

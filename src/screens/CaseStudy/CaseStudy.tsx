import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, ArrowUpRight, Layers, Cpu, Quote, Trophy, Rocket, Target } from "lucide-react";
import { BrandLogo } from "../../components/BrandLogo";
import { workProjects } from "../../data/work";

/* ─────────────────────────────────────────────
   Section label — reusable pattern
   ───────────────────────────────────────────── */
const SectionLabel = ({ icon: Icon, label, variant = "dark" }: { icon: React.ElementType; label: string; variant?: "dark" | "light" }) => (
  <div className="flex items-center gap-3 mb-10">
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${variant === "light"
      ? "bg-[#ff1f4f]/10 border border-[#ff1f4f]/30"
      : "bg-[#ff1f4f]/10 border border-[#ff1f4f]/20"
      }`}>
      <Icon className="w-4 h-4 text-[#ff1f4f]" />
    </div>
    <span className={`[font-family:'Inter',Helvetica] font-semibold text-[10px] tracking-[3.5px] uppercase ${variant === "light" ? "text-[#ff1f4f]" : "text-[#ff1f4f]"
      }`}>
      {label}
    </span>
    <div className={`flex-1 h-[1px] bg-gradient-to-r hidden md:block ${variant === "light" ? "from-[#ff1f4f]/20 to-transparent" : "from-[#ff1f4f]/20 to-transparent"
      }`} />
  </div>
);

/* ─────────────────────────────────────────────
   Main CaseStudy Page
   ───────────────────────────────────────────── */
export const CaseStudy = (): JSX.Element => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = workProjects.find((p) => p.slug === slug);

  // Find next project for "Next Case Study" link
  const currentIndex = workProjects.findIndex((p) => p.slug === slug);
  const nextProject = workProjects[(currentIndex + 1) % workProjects.length];

  if (!project) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center">
        <div className="text-center">
          <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-3xl mb-4">Project not found</h1>
          <button
            onClick={() => { navigate("/"); setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100); }}
            className="text-[#ff1f4f] hover:text-white transition-colors [font-family:'Inter',Helvetica] text-[14px] font-medium"
          >
            ← Back to work
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] overflow-x-hidden">
      {/* ═══════════════════════════════════════
          FIXED NAV
          ═══════════════════════════════════════ */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 lg:px-16 xl:px-20 py-4 bg-[#080808]/80 backdrop-blur-2xl border-b border-white/[0.05]">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between">
          <button
            onClick={() => { navigate("/"); setTimeout(() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }), 100); }}
            className="group flex items-center gap-2.5 [font-family:'Inter',Helvetica] text-white/50 hover:text-white transition-colors text-[13px] font-medium tracking-wide"
          >
            <div className="w-8 h-8 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center group-hover:bg-[#ff1f4f]/10 group-hover:border-[#ff1f4f]/30 transition-all duration-300">
              <ArrowLeft className="w-3.5 h-3.5" />
            </div>
            Back
          </button>
          <a href="/" className="[font-family:'Clash_Display',sans-serif] font-semibold text-white text-[17px] tracking-tight">
            XPLOW
          </a>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.05] border border-white/[0.08] hover:border-[#ff1f4f]/30 hover:bg-[#ff1f4f]/10 transition-all duration-300 [font-family:'Inter',Helvetica] text-white/60 hover:text-white text-[12px] font-semibold tracking-wide uppercase"
            >
              Visit Live
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </nav>

      {/* ═══════════════════════════════════════
          HERO — Full-width immersive
          ═══════════════════════════════════════ */}
      <header className="relative pt-24">
        {/* Full-bleed hero image */}
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src={project.image}
            alt={`${project.title} — case study`}
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/60 to-[#080808]/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/40 via-transparent to-transparent" />

          {/* Logo badge */}
          <div className="absolute top-6 left-6 md:top-10 md:left-10">
            <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-black/50 backdrop-blur-2xl border border-white/[0.08]">
              <BrandLogo src={project.logoUrl} alt={project.title} className="h-8 w-auto object-contain" fallbackClassName="text-lg" />
            </div>
          </div>
        </div>

        {/* Hero content overlay */}
        <div className="relative -mt-40 md:-mt-48 lg:-mt-56 px-4 md:px-8 lg:px-16 xl:px-20 pb-16 md:pb-20">
          <div className="max-w-[1440px] mx-auto">
            {/* Category */}
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#ff1f4f]/10 border border-[#ff1f4f]/20 [font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[9px] tracking-[3px] uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff1f4f]" />
              {project.category}
            </span>

            {/* Title */}
            <h1 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[48px] sm:text-[60px] md:text-[76px] lg:text-[92px] tracking-[-3px] leading-[0.95] mb-8 max-w-[900px]">
              {project.title}
            </h1>

            {/* Meta row — always visible */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              {/* Key metric — prominent */}
              <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#ff1f4f]/10 border border-[#ff1f4f]/20">
                <Trophy className="w-4 h-4 text-[#ff1f4f]" />
                <span className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[22px] tracking-tight">
                  {project.metric}
                </span>
              </div>

              {project.client && (
                <div className="flex flex-col">
                  <span className="[font-family:'Inter',Helvetica] text-white/30 text-[10px] tracking-[2px] uppercase font-semibold">Client</span>
                  <span className="[font-family:'Inter',Helvetica] text-white/80 text-[15px] font-medium">{project.client}</span>
                </div>
              )}
              {project.year && (
                <div className="flex flex-col">
                  <span className="[font-family:'Inter',Helvetica] text-white/30 text-[10px] tracking-[2px] uppercase font-semibold">Year</span>
                  <span className="[font-family:'Inter',Helvetica] text-white/80 text-[15px] font-medium">{project.year}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ═══════════════════════════════════════
          CONTENT
          ═══════════════════════════════════════ */}
      <main className="px-4 md:px-8 lg:px-16 xl:px-20 pb-0">
        <div className="max-w-[1440px] mx-auto">

          {/* ── Services + Tech Stack — side by side ── */}
          {(project.services || project.techStack) && (
            <section className="mb-24 md:mb-32">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Services */}
                {project.services && project.services.length > 0 && (
                  <div className="p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                    <SectionLabel icon={Layers} label="Services" />
                    <div className="flex flex-wrap gap-2.5">
                      {project.services.map((s) => (
                        <span
                          key={s}
                          className="px-4 py-2 rounded-full bg-white/[0.04] border border-white/[0.08]
                            [font-family:'Inter',Helvetica] text-white/70 text-[13px] font-medium
                            hover:border-[#ff1f4f]/30 hover:text-white/90 transition-all duration-300 cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Tech Stack — logos */}
                {project.techStack && project.techStack.length > 0 && (
                  <div className="p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.12] transition-colors duration-500">
                    <SectionLabel icon={Cpu} label="Tech Stack" />
                    <div className="flex flex-wrap gap-2.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-full bg-white border border-white/80
                            [font-family:'Inter',Helvetica] text-[#1a1a1a] text-[13px] font-medium
                            hover:bg-white/90 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── Challenge & Solution — Editorial two-column ── */}
          {(project.challenge || project.solution) && (
            <section className="mb-24 md:mb-32">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Challenge */}
                {project.challenge && (
                  <div className="relative p-8 md:p-10 rounded-[24px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-[#ff1f4f]/[0.04] blur-[80px] pointer-events-none" />
                    <SectionLabel icon={Target} label="The Challenge" />
                    <p className="[font-family:'Inter',Helvetica] text-white/60 text-[17px] md:text-[18px] leading-[1.85] relative z-10">
                      {project.challenge}
                    </p>
                  </div>
                )}

                {/* Solution — white card */}
                {project.solution && (
                  <div className="relative p-8 md:p-10 rounded-[24px] bg-white border-2 border-[#ff1f4f]/40 overflow-hidden shadow-[0_8px_40px_rgba(255,31,79,0.08)]">
                    <SectionLabel icon={Rocket} label="Our Approach" variant="light" />
                    <p className="[font-family:'Inter',Helvetica] text-[#1a1a1a] text-[17px] md:text-[18px] leading-[1.85] relative z-10">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* ── Process Timeline — Premium numbered steps ── */}
          {project.process && project.process.length > 0 && (
            <section className="mb-24 md:mb-32">
              <SectionLabel icon={Layers} label="Our Process" />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {project.process.map((phase) => (
                  <div
                    key={phase.step}
                    className="group relative p-7 rounded-[20px] bg-white/[0.02] border border-white/[0.06]
                      hover:border-[#ff1f4f]/30 hover:bg-[#ff1f4f]/[0.02]
                      transition-all duration-500 cursor-default"
                  >
                    {/* Step number */}
                    <div className="flex items-center gap-3 mb-5">
                      <span className="[font-family:'Poppins',Helvetica] font-black text-[#ff1f4f]/20 text-[48px] leading-none group-hover:text-[#ff1f4f]/40 transition-colors duration-500">
                        {String(phase.step).padStart(2, "0")}
                      </span>
                    </div>
                    <h4 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[18px] tracking-[-0.3px] mb-3 group-hover:text-[#ff1f4f] transition-colors duration-400">
                      {phase.title}
                    </h4>
                    <p className="[font-family:'Inter',Helvetica] text-white/40 text-[14px] leading-[1.7] group-hover:text-white/60 transition-colors duration-400">
                      {phase.description}
                    </p>
                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#ff1f4f] to-[#ff1f4f]/40 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] rounded-full" />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Results — Bold impact numbers ── */}
          {project.results && project.results.length > 0 && (
            <section className="mb-24 md:mb-32">
              <SectionLabel icon={Trophy} label="Results & Impact" />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {project.results.map((r) => (
                  <div
                    key={r.label}
                    className="group relative p-8 md:p-10 rounded-[24px] bg-white/[0.02] border border-white/[0.06]
                      hover:border-[#ff1f4f]/30
                      hover:shadow-[0_0_40px_rgba(255,31,79,0.08)]
                      transition-all duration-500 text-center overflow-hidden"
                  >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,rgba(255,31,79,0.04)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
                    <div className="relative z-10">
                      <div className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[44px] md:text-[56px] tracking-[-2px] leading-none mb-3">
                        {r.value}
                      </div>
                      <div className="[font-family:'Inter',Helvetica] text-white/40 text-[13px] font-medium tracking-wide uppercase">
                        {r.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ── Testimonial Quote — Premium editorial ── */}
          {project.quote && (
            <section className="mb-24 md:mb-32">
              <div className="relative p-10 md:p-14 lg:p-16 rounded-[28px] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/[0.06] overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-8 left-8 md:top-12 md:left-12">
                  <Quote className="w-10 h-10 md:w-14 md:h-14 text-[#ff1f4f]/15" />
                </div>
                <div className="absolute bottom-0 right-0 w-60 h-60 bg-[#ff1f4f]/[0.03] blur-[100px] pointer-events-none" />

                <div className="relative z-10 max-w-[800px] mx-auto text-center">
                  <p className="[font-family:'Inter',Helvetica] text-white/80 text-[22px] md:text-[26px] lg:text-[30px] leading-[1.6] mb-10 font-light italic">
                    &ldquo;{project.quote.text}&rdquo;
                  </p>
                  <div className="flex flex-col items-center gap-2">
                    <cite className="[font-family:'Poppins',Helvetica] font-bold text-white text-[17px] not-italic">
                      {project.quote.author}
                    </cite>
                    <span className="[font-family:'Inter',Helvetica] text-[#ff1f4f]/70 text-[13px] font-medium">
                      {project.quote.role}
                    </span>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* ── Visit Live Project CTA ── */}
          {project.projectUrl && (
            <section className="mb-24 md:mb-32">
              <div className="relative p-8 md:p-12 rounded-[24px] bg-gradient-to-r from-[#ff1f4f]/[0.08] via-[#ff1f4f]/[0.04] to-transparent border border-[#ff1f4f]/[0.15] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_50%,rgba(255,31,79,0.06)_0%,transparent_60%)] pointer-events-none" />
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div>
                    <p className="[font-family:'Inter',Helvetica] text-white/40 text-[12px] tracking-[2px] uppercase font-semibold mb-2">
                      Explore the live product
                    </p>
                    <p className="[font-family:'Poppins',Helvetica] font-bold text-white text-[20px] md:text-[24px] tracking-[-0.5px]">
                      See {project.title} in action
                    </p>
                  </div>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-3 h-14 px-8 bg-[#ff1f4f] hover:bg-[#e6153f] text-white rounded-full
                      [font-family:'Poppins',Helvetica] font-bold text-[15px]
                      transition-all duration-300 hover:scale-[1.02]
                      hover:shadow-[0_8px_30px_rgba(255,31,79,0.35)]
                      shrink-0"
                  >
                    Visit Website
                    <ExternalLink className="w-4.5 h-4.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </section>
          )}

        </div>
      </main>

      {/* ═══════════════════════════════════════
          NEXT CASE STUDY — Full-width teaser
          ═══════════════════════════════════════ */}
      {nextProject && (
        <section
          onClick={() => { navigate(`/work/${nextProject.slug}`); window.scrollTo(0, 0); }}
          className="group relative w-full cursor-pointer border-t border-white/[0.06] overflow-hidden"
        >
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src={nextProject.image}
              alt=""
              className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-[1.03] transition-transform"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-[#080808]/70" />
          </div>

          <div className="relative z-10 max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20 py-20 md:py-28">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
              <div>
                <p className="[font-family:'Inter',Helvetica] text-white/30 text-[11px] tracking-[3px] uppercase font-semibold mb-4">
                  Next Case Study
                </p>
                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] md:text-[48px] lg:text-[56px] tracking-[-2px] leading-[1] group-hover:text-[#ff1f4f] transition-colors duration-500">
                  {nextProject.title}
                </h3>
                <p className="mt-3 [font-family:'Inter',Helvetica] text-[#ff1f4f] font-bold text-[18px] tracking-tight">
                  {nextProject.metric}
                </p>
              </div>
              <div className="flex items-center gap-3 text-white/40 group-hover:text-[#ff1f4f] transition-colors duration-500 shrink-0">
                <span className="[font-family:'Inter',Helvetica] font-semibold text-[13px] tracking-[1px] uppercase">
                  View Project
                </span>
                <div className="w-12 h-12 rounded-full bg-white/[0.06] border border-white/[0.1] flex items-center justify-center group-hover:bg-[#ff1f4f]/10 group-hover:border-[#ff1f4f]/30 transition-all duration-400">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#ff1f4f] via-[#ff3d6a] to-[#ff1f4f] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]" />
        </section>
      )}

      {/* ═══════════════════════════════════════
          BOTTOM CTA
          ═══════════════════════════════════════ */}
      <section className="px-4 md:px-8 lg:px-16 xl:px-20 py-20 md:py-28 border-t border-white/[0.06]">
        <div className="max-w-[800px] mx-auto text-center">
          <p className="[font-family:'Inter',Helvetica] text-white/30 text-[10px] tracking-[3px] uppercase font-semibold mb-6">
            Let&apos;s build together
          </p>
          <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] md:text-[42px] lg:text-[48px] tracking-[-1.5px] leading-[1.05] mb-5">
            Ready to build something{" "}
            <span className="text-[#ff1f4f]">iconic?</span>
          </h3>
          <p className="[font-family:'Inter',Helvetica] text-white/40 text-[16px] leading-[1.7] mb-10 max-w-[500px] mx-auto">
            We partner with ambitious brands to design, build, and scale products that move the needle.
          </p>
          <a
            href="mailto:team@xplow.in"
            className="group inline-flex items-center gap-3 h-14 px-10 bg-[#ff1f4f] hover:bg-[#e6153f] text-white rounded-full
              [font-family:'Poppins',Helvetica] font-bold text-[15px]
              transition-all duration-300 hover:scale-[1.02]
              hover:shadow-[0_8px_30px_rgba(255,31,79,0.35)]"
          >
            Get in touch
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>
    </div>
  );
};

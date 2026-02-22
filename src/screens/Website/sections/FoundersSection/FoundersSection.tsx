import { LinkedinIcon, MailIcon, ArrowRightIcon } from "lucide-react";
import hammadAvatar from "../../../../assets/hammad.jpeg";
import moudipaAvatar from "../../../../assets/moudipa.jpeg";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";

const founders = [
  {
    name: "Hammad Zia",
    role: "CO-FOUNDER",
    title: "CREATIVE DIRECTOR",
    tags: ["Brand Strategy", "Visual Identity", "Product Design", "Creative Direction"],
    bio: "Former design lead at two Y Combinator startups. Built identity systems for 30+ companies — from pre-seed to Series C. Obsessed with the space where brand psychology meets pixel-perfect execution.",
    quote: "Design is the most powerful business weapon most founders never learn to wield. I'm here to change that.",
    avatar: hammadAvatar,
    linkedin: "https://www.linkedin.com/in/ui-ux-hammad/",
    email: "mailto:hammadzia92000@gmail.com",
    imageFirst: true,
  },
  {
    name: "Moudipa Jana",
    role: "CO-FOUNDER",
    title: "TECHNICAL DIRECTOR",
    tags: ["Frontend Architecture", "React / Next.js", "Motion Design", "Performance Engineering"],
    bio: "Full-stack engineer turned design technologist. Shipped production code for platforms serving millions. Bridges the gap between design vision and technical reality — nothing gets lost in translation.",
    quote: "The best designs in the world mean nothing if they don't ship. I make sure they ship — fast, flawless, and at scale.",
    avatar: moudipaAvatar,
    linkedin: "https://www.linkedin.com/in/a0b89b1ba/",
    email: "mailto:moudipajana2002@gmail.com",
    imageFirst: false,
  },
];

export const FoundersSection = (): JSX.Element => {
  return (
    <section
      id="founders"
      className="w-full min-w-0 bg-[#0a0a0a] py-5 md:py-20 lg:py-24 px-5 md:px-5 lg:px-16 overflow-hidden"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto w-full max-w-[1562px] min-w-0">
        {/* Section Header */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col gap-4 sm:gap-6">
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-[#ff1f4f]" aria-hidden />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
                THE FOUNDERS
              </span>
            </div>
            <h2
              id="founders-heading"
              className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] tracking-[-1.96px] leading-[1.1]"
            >
              Two founders. Zero layers{" "}
              <span className="text-[#ff1f4f]">between.</span>
            </h2>
          </div>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-sm sm:text-base max-w-[320px] lg:max-w-[360px] lg:text-right leading-[24px] md:leading-[26px] break-words min-w-0">
            No account managers. No junior handoffs. When you hire XPLOW, you get the people who built it — and who stake their reputation on every pixel.
          </p>
        </header>

        {/* Founder Cards */}
        <div className="flex flex-col gap-8 md:gap-10">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className="bg-[#191919] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${200 + index * 100}ms` } as React.CSSProperties}
            >
              <div
                className={`flex flex-col ${founder.imageFirst ? "md:flex-row" : "md:flex-row-reverse"} gap-0`}
              >
                {/* Portrait — cinematic color grade: subtle contrast, desaturation, soft vignette */}
                <div className="relative w-full md:w-[45%] lg:w-[40%] aspect-[4/5] md:aspect-auto md:min-h-[400px] shrink-0 overflow-hidden">
                  <img
                    src={founder.avatar}
                    alt={`${founder.name}, ${founder.role} and ${founder.title} at Xplow`}
                    className={`absolute inset-0 w-full h-full object-cover rounded-t-2xl md:rounded-none ${founder.imageFirst ? "md:rounded-l-2xl" : "md:rounded-r-2xl"}`}
                    style={{
                      filter: "contrast(1.06) saturate(0.88) brightness(0.97)",
                    }}
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 45vw"
                  />
                  {/* Cinematic overlay: soft vignette for depth */}
                  <div
                    className={`absolute inset-0 pointer-events-none rounded-t-2xl md:rounded-none ${founder.imageFirst ? "md:rounded-l-2xl" : "md:rounded-r-2xl"}`}
                    style={{
                      background: "radial-gradient(ellipse 75% 75% at 50% 40%, transparent 50%, rgba(0,0,0,0.35) 100%)",
                    }}
                    aria-hidden
                  />
                  {founder.imageFirst && (
                    <div className="hidden md:block absolute inset-0 rounded-l-2xl" style={{ boxShadow: "inset -1px 0 0 0 rgba(255,255,255,0.05)" }} aria-hidden />
                  )}
                  {!founder.imageFirst && (
                    <div className="hidden md:block absolute inset-0 rounded-r-2xl" style={{ boxShadow: "inset 1px 0 0 0 rgba(255,255,255,0.05)" }} aria-hidden />
                  )}
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-6 sm:p-8 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#888888] text-[10px] sm:text-[11px] tracking-[2px] leading-[16.5px] uppercase">
                      {founder.role}
                    </span>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#999999] text-[10px] sm:text-[11px] tracking-[2px] leading-[16.5px] uppercase">
                      {founder.title}
                    </span>
                  </div>
                  <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] sm:text-[32px] md:text-[36px] tracking-[-0.56px] leading-[1.2] mb-4">
                    {founder.name}
                  </h3>
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-[14px] sm:text-[15px] leading-[26px] mb-6">
                    {founder.bio}
                  </p>
                  <blockquote className="border-l-2 border-[#ff1f4f] pl-5 mb-6">
                    <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-[14px] sm:text-[15px] italic leading-[24px]">
                      &ldquo;{founder.quote}&rdquo;
                    </p>
                  </blockquote>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {founder.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="bg-[#0c0c0c] border-[#2a2a2a] text-[#cccccc] text-[11px] font-normal [font-family:'Inter',Helvetica] rounded-full px-4 py-1.5 h-auto"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${founder.name} on LinkedIn`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#ff1f4f]/20 hover:text-white transition-colors"
                    >
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a
                      href={founder.email}
                      aria-label={`Email ${founder.name}`}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1a1a1a] text-white hover:bg-[#ff1f4f]/20 hover:text-white transition-colors"
                    >
                      <MailIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA — premium hover: red accent fill, white content, soft glow */}
        <div className="flex justify-center mt-10 md:mt-12 lg:mt-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
          <Button
            asChild
            variant="outline"
            className="group/cta h-12 px-6 rounded-full border-2 border-[#ff1f4f] bg-transparent hover:bg-[#ff1f4f] hover:border-[#ff1f4f] text-white [font-family:'Inter',Helvetica] font-medium text-sm tracking-[0.5px] transition-all duration-300 ease-out hover:shadow-[0_0_28px_-4px_rgba(255,31,79,0.45)] hover:scale-[1.02]"
          >
            <a href="mailto:team@xplow.in" className="inline-flex items-center gap-2">
              <span className="transition-colors duration-300 group-hover/cta:text-white">Book a call with us</span>
              <ArrowRightIcon className="w-4 h-4 text-[#ff1f4f] transition-all duration-300 group-hover/cta:text-white group-hover/cta:-rotate-45" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

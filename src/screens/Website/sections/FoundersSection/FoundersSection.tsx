import { LinkedinIcon, MailIcon, ArrowRightIcon } from "lucide-react";
import hammadAvatar from "../../../../assets/hammad.png";
import moudipaAvatar from "../../../../assets/moudipa.jpeg";
import { Button } from "../../../../components/ui/button";

const founders = [
  {
    name: "Hammad Zia",
    role: "CO-FOUNDER",
    title: "CREATIVE DIRECTOR",
    tags: ["Brand Strategy", "Visual Identity", "Product Design", "Creative Direction"],
    bio: "Design lead at two YC startups. Built identity systems for 30+ companies, pre-seed to Series C. Where brand psychology meets pixel-perfect execution.",
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
    quote: "The best designs mean nothing if they don't ship. I make sure they ship — fast, flawless, at scale.",
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
      className="w-full min-w-0 bg-[#0a0a0a] py-16 md:py-24 lg:py-28 px-4 md:px-4 lg:px-12 xl:px-16 overflow-hidden"
      aria-labelledby="founders-heading"
    >
      <div className="mx-auto w-full max-w-[1562px] min-w-0">
        {/* Section Header — aligned with Process section */}
        <header className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20 lg:mb-24 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="flex flex-col gap-4 max-w-[480px]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-[2px] bg-[#ff1f4f]" aria-hidden />
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[3px] uppercase">
                THE FOUNDERS
              </span>
            </div>
            <div className="flex flex-col gap-0">
              <h2
                id="founders-heading"
                className="[font-family:'Poppins',Helvetica] font-bold text-white text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] tracking-[-2px] leading-[1.08]"
              >
                Two founders.
              </h2>
              <h2 className="[font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f] text-[36px] sm:text-[44px] md:text-[52px] lg:text-[58px] tracking-[-2px] leading-[1.08]">
                Zero layers between.
              </h2>
            </div>
          </div>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#888] text-[15px] leading-[1.7] max-w-[360px] lg:text-right break-words">
            No account managers. No junior handoffs. You get the people who built XPLOW — and stake their reputation on every pixel.
          </p>
        </header>

        {/* Founder Cards — premium card style, matching Process section */}
        <div className="flex flex-col gap-10 md:gap-14">
          {founders.map((founder, index) => (
            <article
              key={founder.name}
              className={`group relative flex flex-col ${
                founder.imageFirst ? "md:flex-row" : "md:flex-row-reverse"
              } bg-[#141414] border border-white/[0.08] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 hover:border-[#ff1f4f]/25 hover:shadow-[0_0_0_1px_rgba(255,31,79,0.1),0_24px_48px_-16px_rgba(0,0,0,0.5)] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]`}
              style={{ "--animation-delay": `${200 + index * 100}ms` } as React.CSSProperties}
            >
              {/* Image — framed, contained */}
              <div
                className={`relative w-full md:w-[42%] lg:w-[38%] aspect-[4/5] shrink-0 overflow-hidden ${
                  founder.imageFirst ? "md:rounded-l-2xl" : "md:rounded-r-2xl"
                }`}
              >
                <img
                  src={founder.avatar}
                  alt={`${founder.name}, ${founder.role} and ${founder.title} at Xplow`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  style={{ filter: "contrast(1.02) saturate(0.98)" }}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 42vw"
                />
                {/* Subtle gradient for depth */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none ${
                    founder.imageFirst ? "md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/20" : "md:bg-gradient-to-l md:from-transparent md:via-transparent md:to-black/20"
                  }`}
                  aria-hidden
                />
                {/* Founder number */}
                <span className="absolute top-6 left-6 [font-family:'Poppins',Helvetica] font-bold text-[#ff1f4f]/40 text-[48px] leading-none tracking-tight">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-8 sm:p-10 md:p-12 lg:p-14 flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="[font-family:'Inter',Helvetica] font-semibold text-[#ff1f4f] text-[10px] tracking-[2.5px] uppercase">
                    {founder.role}
                  </span>
                  <span className="text-white/30">·</span>
                  <span className="[font-family:'Inter',Helvetica] font-medium text-white/60 text-[10px] tracking-[1.5px] uppercase">
                    {founder.title}
                  </span>
                </div>

                <h3 className="[font-family:'Poppins',Helvetica] font-bold text-white text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] tracking-[-1px] leading-[1.1] mb-5">
                  {founder.name}
                </h3>

                <p className="[font-family:'Inter',Helvetica] font-normal text-[#999] text-[15px] leading-[1.7] mb-6">
                  {founder.bio}
                </p>

                <blockquote className="border-l-2 border-[#ff1f4f] pl-6 mb-6">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#aaa] text-[14px] sm:text-[15px] italic leading-[1.6]">
                    &ldquo;{founder.quote}&rdquo;
                  </p>
                </blockquote>

                <div className="flex flex-wrap gap-2 mb-6">
                  {founder.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-white px-4 py-2 [font-family:'Inter',Helvetica] font-semibold text-black text-[11px] tracking-[0.2px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} on LinkedIn`}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-[#ff1f4f]/20 hover:border-[#ff1f4f]/40 hover:text-white transition-all duration-300"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={founder.email}
                    aria-label={`Email ${founder.name}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-white/5 text-white/90 hover:bg-[#ff1f4f]/20 hover:border-[#ff1f4f]/40 hover:text-white transition-all duration-300"
                  >
                    <MailIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-14 md:mt-16 lg:mt-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:500ms]">
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

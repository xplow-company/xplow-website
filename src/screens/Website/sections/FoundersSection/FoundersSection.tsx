import React from "react";
import { LinkedinIcon, TwitterIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const founders = [
  {
    name: "Hammad Zia",
    title: "CO-FOUNDER & CREATIVE DIRECTOR",
    tags: ["Brand Strategy", "Visual Identity", "Product Design", "Creative Direction"],
    bio: "Former design lead at two Y Combinator startups. Obsessed with the space where brand psychology meets pixel-perfect execution. Built identity systems for over 30 companies — from pre-seed to Series C. Believes every visual decision should be traceable to a strategic outcome.",
    quote: "Design is the most powerful business weapon most founders never learn to wield. I'm here to change that.",
    initials: "HZ",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "Moudipa Jana",
    title: "CO-FOUNDER & TECHNICAL DIRECTOR",
    tags: ["Frontend Architecture", "React / Next.js", "Motion Design", "Performance Engineering"],
    bio: "Full-stack engineer turned design technologist. Ships production code that bridges design vision with technical reality — with a sharp focus on performance and craft.",
    quote: "The best designs in the world mean nothing if they don't ship. I make sure they ship — fast, flawless, and at scale.",
    initials: "MJ",
    linkedin: "#",
    twitter: "#",
  },
];

export const FoundersSection = (): JSX.Element => {
  return (
    <section id="founders" className="w-full bg-[#111111] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex flex-col gap-8 mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] text-left w-full">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
              THE PEOPLE BEHIND XPLOW
            </span>
          </div>
          <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[48px] md:text-[56px] tracking-[-1.96px] leading-[1.1]">
            Two founders.
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-[15px] md:text-[17px] tracking-[0] leading-[28px] md:leading-[30px] w-full space-y-2">
            <span className="block">No account managers. No production layers. No junior handoffs. When you work with XPLOW, you work directly with the people who built it — the architects of the strategy</span>
            <span className="block">and execution — taking full responsibility from first conversation to final delivery and staking their reputation on every pixel that ships.</span>
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {founders.map((founder, index) => (
            <Card
              key={founder.name}
              className="bg-[#111111] border border-[#FF1F4F] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0"
              style={{ "--animation-delay": `${200 + index * 100}ms` } as React.CSSProperties}
            >
              <CardContent className="p-8 md:p-10 flex flex-col gap-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                  <div className="relative shrink-0">
                    <Avatar className="w-28 h-28 rounded-none border-2 border-[#ff1f4f40 shrink-0 opacity-100 [box-shadow:4px_4px_20px_rgba(255,31,79,0.25)] overflow-hidden">
                      <AvatarFallback className="bg-[#1a1a1a] [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-xl rounded-none">
                        {founder.initials}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="flex flex-col gap-4 flex-1 min-w-0">
                    <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] md:text-[32px] tracking-[-0.56px] leading-[1.2]">
                      {founder.name}
                    </h3>
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2px] leading-[16.5px] uppercase">
                      {founder.title}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {founder.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="bg-[#0c0c0c] border border-[#ff1f4f40 text-white text-[11px] font-normal [font-family:'Inter',Helvetica] rounded-full px-4 py-1.5 h-auto"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={founder.linkedin}
                        aria-label="LinkedIn"
                        className="w-10 h-10 rounded-full border-0 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#ff1f4f]/20 transition-colors"
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </a>
                      <a
                        href={founder.twitter}
                        aria-label="Twitter"
                        className="w-10 h-10 rounded-full border-0 bg-[#1a1a1a] flex items-center justify-center text-white hover:bg-[#ff1f4f]/20 transition-colors"
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 border-t border-[#2a2a2a] pt-6">
                  <p className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] leading-[26px] text-left">
                    {founder.bio}
                  </p>
                  <blockquote className="[font-family:'Inter',Helvetica] font-normal text-white text-[15px] italic leading-[24px] border-l-2 border-[#ff1f4f] pl-5">
                    "{founder.quote}"
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

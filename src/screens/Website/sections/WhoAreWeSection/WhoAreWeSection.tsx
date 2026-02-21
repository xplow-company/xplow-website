import quoteIcon from "@/assets/quote.svg";
import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const clientsList = [
  { id: "01", name: "Samira Patel", initials: "SP", title: "CEO, Meridian", quote: "XPLOW didn't just design a product — they reimagined our entire user journey. Conversion went up 3x in the first quarter.", badge: "From day one" },
  { id: "02", name: "Marcus Chen", initials: "MC", title: "Founder, Vault", quote: "Strategic depth and execution speed. We shipped our rebrand in six weeks. Every pixel had a reason.", badge: "Rebrand in 6 weeks" },
  { id: "03", name: "Elena Voss", initials: "EV", title: "Head of Design, Prism", quote: "Finally, a partner who thinks in systems. Our design ops and component library are now a real competitive edge.", badge: "Design system first" },
  { id: "04", name: "David Park", initials: "DP", title: "Head of Product, Lumina", quote: "We've worked with six agencies before XPLOW. None of them even came close. The level of strategic thinking behind every design decision is unreal.", badge: "6th time's the charm" },
  { id: "05", name: "Ava Richardson", initials: "AR", title: "CMO, Onyx", quote: "From analytics to A/B tests to CRO — they turned our site into a growth engine. Revenue attribution improved overnight.", badge: "Growth engine" },
];

const ratingData = {
  stars: 5,
  averageRating: "5.0 avg rating",
};

export const WhoAreWeSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(3); // David Park default
  const active = clientsList[activeIndex];

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + clientsList.length) % clientsList.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % clientsList.length);

  return (
    <section id="who-we-are" className="w-full bg-[#111111] py-5 md:py-20 px-5 md:px-5 lg:px-16">
      <div className="max-w-[1562px] mx-auto">
        <header className="flex flex-col gap-8 mb-24 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            <span className="font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] [font-family:'Inter',Helvetica] uppercase">
              Client Voices
            </span>
          </div>
          <h2 className="[font-family:'Poppins'] font-bold text-[56px] tracking-[-1.10px] leading-[61.6px]">
            <span className="text-white">Don't take </span>
            <span className="text-[#ff1f4f]">
              our word for it.
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_395px] gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src={quoteIcon} alt="" className="w-12 h-12" />
            </div>
            <Card className="bg-transparent border-none">
              <CardContent className="p-0 flex flex-col gap-8">
                <blockquote className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#eaeaea] text-[32px] tracking-[-0.64px] leading-[48px]">
                  "{active.quote}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 rounded-full border border-solid border-[#ff1f4f26] bg-[linear-gradient(135deg,rgba(255,31,79,0.2)_0%,rgba(255,31,79,0.05)_100%)]">
                      <AvatarFallback className="bg-transparent [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-sm">
                        {active.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <span className="font-normal text-white text-[15px] leading-[22.5px] [font-family:'Inter',Helvetica]">
                        {active.name}
                      </span>
                      <span className="text-[#777777] text-[13px] leading-[19.5px] [font-family:'Inter',Helvetica] font-normal">
                        {active.title}
                      </span>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="bg-[#ff1f4f14] border-[#ff1f4f26] rounded-full px-[13px] py-[7px] h-auto"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[0.33px] leading-[16.5px]">
                      {active.badge}
                    </span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="flex flex-col gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: ratingData.stars }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className="w-4 h-4 fill-[#ff1f4f] text-[#ff1f4f]"
                  />
                ))}
              </div>
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#777777] text-[13px] leading-[19.5px]">
                {ratingData.averageRating}
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {clientsList.map((client, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={client.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`flex items-center gap-3 pl-3 pr-3 py-2.5 h-[43px] rounded-2xl border border-solid transition-colors cursor-pointer text-left w-full ${
                      isActive
                        ? "bg-[#ff1f4f14] border-[#ff1f4f26]"
                        : "border-transparent hover:border-[#ff1f4f26]"
                    }`}
                    aria-current={isActive ? "true" : undefined}
                  >
                    <span
                      className={`[font-family:'Inter',Helvetica] font-normal text-[11px] text-right leading-[16.5px] min-w-[24px] ${
                        isActive ? "text-[#ff1f4f]" : "text-[#444444]"
                      }`}
                    >
                      {client.id}
                    </span>
                    <span
                      className={`font-medium text-sm leading-[21px] [font-family:'Inter',Helvetica] ${
                        isActive ? "text-white" : "text-[#666666]"
                      }`}
                    >
                      {client.name}
                    </span>
                    {isActive && (
                      <div className="ml-auto w-1.5 h-1.5 bg-[#ff1f4f] rounded-full shrink-0" />
                    )}
                  </button>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous client"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2a2a2a] text-[#eaeaea] hover:border-[#ff1f4f] hover:text-[#ff1f4f] transition-colors shrink-0"
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Next client"
                className="flex items-center justify-center w-10 h-10 rounded-full border border-[#2a2a2a] text-[#eaeaea] hover:border-[#ff1f4f] hover:text-[#ff1f4f] transition-colors shrink-0"
              >
                <ChevronRightIcon className="w-5 h-5" />
              </button>
            </div>

            {/* <div className="w-full h-11 bg-gradient-to-r from-[#ff1f4f]/10 to-transparent rounded-lg" /> */}
          </aside>
        </div>
      </div>
    </section>
  );
};

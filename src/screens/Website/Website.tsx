import { useEffect, useState } from "react";
import xplowLogo from "../../assets/xplow.svg";
import PremiumGlass from "../../components/PremiumGlass";
import { Button } from "../../components/ui/button";
import { AboutSection } from "./sections/AboutSection";
import { FoundersSection } from "./sections/FoundersSection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { PhilosophySection } from "./sections/PhilosophySection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { ServicesSection } from "./sections/ServicesSection";
import { FAQSection } from "./sections/FAQSection";
import { WhoAreWeSection } from "./sections/WhoAreWeSection";
import { WorkSection } from "./sections/WorkSection";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Who We Are", href: "#founders" },
  { label: "Work", href: "#work" },
];

export const Website = (): JSX.Element => {
  const [isPastHero, setIsPastHero] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsPastHero(!entry.isIntersecting),
      { threshold: 0, rootMargin: "0px 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex bg-white overflow-x-hidden" data-model-id="5096:19571">
      <div className="z-[1] w-full flex bg-[#0c0c0c]">
        <div className="flex w-full relative flex-col items-start bg-[#0c0c0c] gap-y-28">
          <HeroSection />
          <AboutSection />
          <PhilosophySection />
          <ServicesSection />
          <ProcessSection />
          <WorkSection />
          <WhoAreWeSection />
          <FAQSection />
          <SectionComponentNodeSubsection />
          <FoundersSection />
          <FooterSubsection />
        </div>
      </div>
      {/* Nav: on hero = black glass + white content. When scrolled = white glass + black content. Content behind nav is distorted/frosted via backdrop-blur (Apple-style). */}
      <nav className="fixed top-[calc(3.5rem-22px)] left-0 right-0 z-[2] w-full flex justify-center px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <PremiumGlass
          light={isPastHero}
          className="mx-auto w-full max-w-[1148px] rounded-full"
        >
          <div className="flex w-full min-w-0 items-center justify-between gap-4 px-6 py-2.5">
            <a href="#hero" className="flex shrink-0 items-center">
              <img
                src={xplowLogo}
                alt="Xplow"
                className={`h-[23px] w-auto transition-all duration-300 ease-out ${isPastHero ? "invert" : ""}`}
              />
            </a>

            <div className="flex shrink-0 items-center gap-1">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className={`h-8 px-4 font-medium text-sm tracking-[0.13px] leading-[19.5px] [font-family:'Inter',Helvetica] whitespace-nowrap rounded-full transition-colors duration-300 ease-out ${
                    isPastHero
                      ? "text-black hover:bg-black/10"
                      : "text-white hover:bg-white/10"
                  }`}
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </PremiumGlass>
      </nav>
    </div>
  );
};
import { ScrollReveal } from "../../components/ScrollReveal";
import { AboutSection } from "./sections/AboutSection";
import { TrustedBySection } from "./sections/TrustedBySection";
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

export const Website = (): JSX.Element => {
  return (
    <div className="w-full min-w-0 flex bg-[#0c0c0c] overflow-x-hidden" data-model-id="5096:19571">
      <div className="z-[1] w-full min-w-0 flex bg-[#0c0c0c]">
        <div className="flex w-full min-w-0 relative flex-col items-stretch bg-[#0c0c0c] gap-y-5 md:gap-y-12 lg:gap-y-16">
          <ScrollReveal amount={0.05} yOffset={24} duration={0.9}>
            <HeroSection />
          </ScrollReveal>
          <ScrollReveal>
            <AboutSection />
          </ScrollReveal>
          <ScrollReveal>
            <TrustedBySection />
          </ScrollReveal>
          <ScrollReveal>
            <PhilosophySection />
          </ScrollReveal>
          <ScrollReveal>
            <ServicesSection />
          </ScrollReveal>
          <ScrollReveal>
            <ProcessSection />
          </ScrollReveal>
          <ScrollReveal>
            <WorkSection />
          </ScrollReveal>
          <ScrollReveal>
            <WhoAreWeSection />
          </ScrollReveal>
          <ScrollReveal>
            <FAQSection />
          </ScrollReveal>
          <ScrollReveal>
            <SectionComponentNodeSubsection />
          </ScrollReveal>
          <ScrollReveal>
            <FoundersSection />
          </ScrollReveal>
          <ScrollReveal amount={0.08} yOffset={24}>
            <FooterSubsection />
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};
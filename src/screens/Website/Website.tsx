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

export const Website = (): JSX.Element => {
  return (
    <div className="w-full min-w-0 flex bg-white overflow-x-hidden" data-model-id="5096:19571">
      <div className="z-[1] w-full min-w-0 flex bg-[#0c0c0c]">
        <div className="flex w-full min-w-0 relative flex-col items-stretch bg-[#0c0c0c] gap-y-5 md:gap-y-12 lg:gap-y-16">
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
    </div>
  );
};
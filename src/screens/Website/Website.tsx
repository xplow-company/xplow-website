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
import { ScrollBackground } from "./ScrollBackground";

export const Website = (): JSX.Element => {
  return (
    <div className="w-full min-w-0 flex bg-transparent overflow-x-hidden relative" data-model-id="5096:19571">
      <ScrollBackground />
      <div className="relative z-[1] w-full min-w-0 flex bg-transparent">
        <div className="flex w-full min-w-0 relative flex-col items-stretch bg-transparent gap-y-5 md:gap-y-12 lg:gap-y-16">
          <HeroSection />
          <AboutSection />
          <TrustedBySection />
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
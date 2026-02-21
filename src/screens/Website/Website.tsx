import GlassSurface from "../../components/GlassSurface";
import { Button } from "../../components/ui/button";
import { AboutSection } from "./sections/AboutSection";
import { FooterSubsection } from "./sections/FooterSubsection";
import { HeroSection } from "./sections/HeroSection";
import { ProcessSection } from "./sections/ProcessSection";
import { SectionComponentNodeSubsection } from "./sections/SectionComponentNodeSubsection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhoAreWeSection } from "./sections/WhoAreWeSection";
import { WorkSection } from "./sections/WorkSection";

const navigationItems = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Who We Are", href: "#who-we-are" },
  { label: "Work", href: "#work" },
];

export const Website = (): JSX.Element => {
  return (
    <div className="w-full flex bg-white" data-model-id="5096:19571">
      <div className="z-[1] w-full flex bg-[#0c0c0c]">
        <div className="flex w-full relative flex-col items-start bg-[#0c0c0c]">
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <WhoAreWeSection />
          <WorkSection />
          <SectionComponentNodeSubsection />
          <FooterSubsection />
        </div>
      </div>
      <nav className="fixed top-14 left-0 right-0 z-[2] w-full flex justify-center px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        <GlassSurface
          width="100%"
          height={58}
          borderRadius={9999}
          blur={26}
          backgroundOpacity={0.32}
          borderWidth={0.11}
          brightness={51}
          opacity={0.9}
          className="w-full max-w-[1312px] [&>div]:!justify-start [&>div]:!p-0"
        >
          <div className="absolute inset-0 rounded-[inherit] bg-[rgba(28,10,10,0.75)] pointer-events-none z-0" aria-hidden />
          <div className="relative z-10 flex w-full min-w-0 items-center justify-between gap-4 px-6 py-2">
            <div className="flex shrink-0 items-center gap-3">
              <div className="flex flex-col gap-0.5">
                <div className="h-[2px] w-6 bg-white/90 rounded-full" />
                <div className="h-[2px] w-5 bg-white/80 rounded-full translate-x-1" />
                <div className="h-[2px] w-6 bg-white/90 rounded-full" />
                <div className="h-[2px] w-5 bg-white/80 rounded-full translate-x-1" />
              </div>
              <span className="font-semibold text-white text-lg tracking-tight [font-family:'Inter',Helvetica]">
                Xplow
              </span>
            </div>

            <div className="flex shrink-0 items-center gap-1">
              {navigationItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="h-8 px-4 font-medium text-white text-sm tracking-[0.13px] leading-[19.5px] [font-family:'Inter',Helvetica] whitespace-nowrap hover:bg-white/10 rounded-full transition-colors"
                  asChild
                >
                  <a href={item.href}>{item.label}</a>
                </Button>
              ))}
            </div>
          </div>
        </GlassSurface>
      </nav>
    </div>
  );
};
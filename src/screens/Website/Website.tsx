import { useEffect, useState } from "react";
import { MenuIcon, XIcon } from "lucide-react";
import xplowLogo from "../../assets/xplow.svg";
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
  const [useLightNav, setUseLightNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    const logoSection = document.getElementById("logo-section");
    const letsBuild = document.getElementById("lets-build");
    if (!hero || !logoSection || !letsBuild) return;

    const handleScroll = () => {
      const heroRect = hero.getBoundingClientRect();
      const logoRect = logoSection.getBoundingClientRect();
      const letsBuildRect = letsBuild.getBoundingClientRect();
      const heroVisible = heroRect.top < window.innerHeight && heroRect.bottom > 0;
      const logoVisible = logoRect.top < window.innerHeight && logoRect.bottom > 0;
      const letsBuildVisible = letsBuildRect.top < window.innerHeight && letsBuildRect.bottom > 0;
      setUseLightNav(!heroVisible && !logoVisible && !letsBuildVisible);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinkClass = useLightNav
    ? "text-black hover:bg-black/10"
    : "text-white hover:bg-white/10";

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
      {/* Nav: solid black on hero/logo/lets-build (white content), solid white when scrolled (dark content). Responsive. */}
      <nav
        className="fixed top-[calc(3.5rem-22px)] left-0 right-0 z-[2] w-full flex justify-center px-5 md:px-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
        aria-label="Main navigation"
      >
        <div
          className={`mx-auto w-full max-w-[1148px] rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between gap-4 transition-all duration-300 ease-out ${
            useLightNav ? "bg-white shadow-md" : "bg-black"
          }`}
        >
          <a href="#hero" className="flex shrink-0 items-center" aria-label="Xplow home">
            <img
              src={xplowLogo}
              alt="Xplow"
              className={`h-[20px] sm:h-[23px] w-auto transition-all duration-300 ease-out ${useLightNav ? "invert" : ""}`}
            />
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex shrink-0 items-center gap-1">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`h-8 px-4 font-medium text-sm tracking-[0.13px] leading-[19.5px] [font-family:'Inter',Helvetica] whitespace-nowrap rounded-full transition-colors duration-300 ease-out ${navLinkClass}`}
                asChild
              >
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full -mr-1"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <XIcon className={`w-5 h-5 ${useLightNav ? "text-black" : "text-white"}`} />
            ) : (
              <MenuIcon className={`w-5 h-5 ${useLightNav ? "text-black" : "text-white"}`} />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className={`absolute top-full left-5 right-5 mt-2 rounded-2xl py-4 px-4 shadow-lg md:hidden ${
              useLightNav ? "bg-white" : "bg-black"
            }`}
          >
            <div className="flex flex-col gap-1">
              {navigationItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-medium text-sm [font-family:'Inter',Helvetica] transition-colors ${navLinkClass}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
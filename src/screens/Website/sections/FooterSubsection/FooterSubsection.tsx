"use client";
import { SiLinkedin, SiInstagram, SiX } from "react-icons/si";
import footerLogo from "@/assets/logowithname.svg";

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Contact us", href: "mailto:team@xplow.in" },
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: SiLinkedin },
  { label: "Instagram", href: "https://www.instagram.com", Icon: SiInstagram },
  { label: "Twitter", href: "https://twitter.com", Icon: SiX },
];

export const FooterSubsection = (): JSX.Element => {
  return (
    <footer id="footer" className="relative w-full bg-transparent py-5 md:py-16 px-5 md:px-5 lg:px-16">
      <div className="mx-auto w-full max-w-[1562px]">
        {/* Top: three columns — left aligned, center aligned, right aligned */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 mb-6 md:mb-8">
          <nav className="flex flex-col gap-4 md:items-start translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#eaeaea] text-[10px] tracking-[2.50px] leading-[15px] uppercase">
              About
            </h3>
            <ul className="flex flex-col gap-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-[21px] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4 md:items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#eaeaea] text-[10px] tracking-[2.50px] leading-[15px] uppercase">
              Follow us
            </h3>
            <a
              href="mailto:team@xplow.in"
              className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-6 hover:text-white transition-colors md:text-center"
            >
              team@xplow.in
            </a>
            <a
              href="tel:+918981398598"
              className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-6 hover:text-white transition-colors md:text-center"
            >
              +91 89813 98598
            </a>
            <div className="flex items-center gap-3 mt-1 md:justify-center">
              {socialLinks.map(({ label, href, Icon }, index) => (
                <a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-[#eaeaea] text-[#eaeaea] hover:border-white hover:text-white transition-colors"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 md:items-end translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#eaeaea] text-[10px] tracking-[2.50px] leading-[15px] uppercase">
              Address
            </h3>
            <div className="flex flex-col gap-0 [font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-sm tracking-[0] leading-[22px] md:text-right">
              <p>Remote-first studio</p>
              <p>Kolkata, West Bengal</p>
              <p>India</p>
            </div>
            <div className="flex items-center gap-2 mt-2 md:justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" aria-hidden />
              <span className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-[11px] tracking-[0.5px] leading-[16px] uppercase">
                Accepting projects
              </span>
            </div>
          </div>
        </div>

        {/* Middle: Xplow logo — full width, slightly smaller (85% scale) */}
        <div className="w-full mb-12 lg:mb-14 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] relative" style={{ paddingBottom: "27.85%" }}>
          <div className="absolute inset-0 flex items-center justify-center">
            <img
              src={footerLogo}
              alt="Xplow"
              className="w-full h-full object-contain object-center"
              style={{ aspectRatio: "1440/401", transform: "scale(0.85)" }}
            />
          </div>
        </div>

        {/* Bottom: copyright and legal */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-[11px] tracking-[0.44px] leading-[16.5px]">
            © 2026 XPLOW.CO All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-[11px] tracking-[0] leading-[16.5px] hover:text-white transition-colors"
            >
              Terms &amp; Conditions
            </a>
            <a
              href="#"
              className="[font-family:'Inter',Helvetica] font-normal text-[#eaeaea] text-[11px] tracking-[0] leading-[16.5px] hover:text-white transition-colors"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

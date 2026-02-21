const navigationLinks = [
    { label: "About" },
    { label: "Services" },
    { label: "Process" },
    { label: "Work" },
  ];
  
  const connectLinks = [{ label: "LinkedIn" }, { label: "Instagram" }];
  
  export const FooterSubsection = (): JSX.Element => {
    return (
      <footer className="relative w-full bg-neutral-950 py-24">
        <div className="absolute top-0 left-0 w-full h-px bg-[#2a2a2a]" />
  
        <div className="container mx-auto px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-20">
            <div className="lg:col-span-4 flex flex-col gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
              <img className="w-[103.05px] h-6" alt="XPLOW Logo" />
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#777777] text-sm tracking-[0] leading-[25.9px] max-w-[340px]">
                Strategy-first design studio for founders who refuse to blend in.
                Every pixel is a business decision.
              </p>
            </div>
  
            <nav className="lg:col-span-2 flex flex-col gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#787878] text-[10px] tracking-[2.50px] leading-[15px]">
                NAVIGATION
              </h3>
              <ul className="flex flex-col gap-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="[font-family:'Inter',Helvetica] font-normal text-[#777777] text-sm tracking-[0] leading-[21px] hover:text-[#eaeaea] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav className="lg:col-span-2 flex flex-col gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#787878] text-[10px] tracking-[2.50px] leading-[15px]">
              CONNECT
            </h3>
            <ul className="flex flex-col gap-3">
              {connectLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#777777] text-sm tracking-[0] leading-[21px] hover:text-[#eaeaea] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4 flex flex-col gap-5 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <h3 className="[font-family:'Inter',Helvetica] font-bold text-[#787878] text-[10px] tracking-[2.50px] leading-[15px]">
              GET IN TOUCH
            </h3>
            <a
              href="mailto:xplow.co@gmail.com"
              className="[font-family:'Inter',Helvetica] font-medium text-[#eaeaea] text-base tracking-[0] leading-6 hover:text-white transition-colors"
            >
              xplow.co@gmail.com
            </a>
            <div className="flex flex-col gap-0">
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-[13px] tracking-[0] leading-[22.1px]">
                Currently accepting new projects.
              </p>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#555555] text-[13px] tracking-[0] leading-[22.1px]">
                Response within 24 hours.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#ff1f4f] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#444444] text-[11px] tracking-[0.44px] leading-[16.5px]">
            © 2026 XPLOW.CO — All rights reserved.
          </p>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#333333] text-[11px] tracking-[0] leading-[16.5px]">
            Crafted with obsession.
          </p>
        </div>
      </div>
    </footer>
  );
};
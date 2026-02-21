const trustedBrands = [
  "MERIDIAN",
  "MERIDIAN",
  "vault.",
  "PRISM",
  "archon",
  "LUMINA",
  "ONYX",
  "ONYX",
];

export const PhilosophySection = (): JSX.Element => {
  return (
    <section id="philosophy" className="w-full">
      {/* Trusted by — white background */}
      <div className="w-full bg-white py-12 md:py-16">
        <div className="container mx-auto px-16 max-w-[1440px] flex flex-col items-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0" style={{ "--animation-delay": "0ms" } as React.CSSProperties}>
          <p className="[font-family:'Inter',Helvetica] font-medium text-black text-xs tracking-[2.5px] leading-[18px] uppercase text-center">
            TRUSTED BY FORWARD-THINKING BRANDS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
            {trustedBrands.map((brand, index) => (
              <span
                key={`${brand}-${index}`}
                className="[font-family:'Space Grotesk'] font-medium text-black text-sm tracking-[0.5px] uppercase"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Our Philosophy — dark background */}
      <div className="w-full bg-[#111111] py-24">
        <div className="container mx-auto px-16 max-w-[1440px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-[720px] w-full translate-y-[-1rem] animate-fade-in opacity-0" style={{ "--animation-delay": "200ms" } as React.CSSProperties}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#ff1f4f]" aria-hidden />
            <span className="[font-family:'Space Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
              OUR PHILOSOPHY
            </span>
            <div className="w-10 h-px bg-[#ff1f4f]" aria-hidden />
          </div>

          <h2 className="[font-family:'Poppins'] font-bold text-white text-[4px] md:text-[42px] tracking-[-1.96px] leading-[1.1] mb-10">
            We believe great brands aren't built
            <br />
            <span className="text-[#ff1f4f]">they're engineered.</span>
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#FFFFFF] text-base tracking-[0] leading-[28px] mb-8">
          Every brand that dominates its market got there by obsessing over the details that most overlook. The loading animation that reduces perceived wait time by 40%. The onboarding flow that turns trial users into paying customers overnight. The visual identity that makes a $2M startup look like a $200M company.
          </p>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#B7B7B7] text-base tracking-[0] leading-[28px] mb-8">
          That's the XPLOW difference. We don't do "good enough." We do "how did they do that?" We study what separates the 1% from the rest — then we engineer it into every project we touch. The brands we build don't just compete. They set the standard everyone else chases.
          </p>

          {/* <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] md:text-[32px] tracking-[-0.5px] leading-[1.2] mb-8 text-center">
            The brands we build don't just compete. They set the standard everyone else chases.
          </h3> */}

          {/* Tubelight-effect line */}
          <div
            className="w-full h-[2px] rounded-full mt-2"
            style={{
              background: "linear-gradient(90deg, transparent 0%, #ff1f4f 15%, #ff1f4f 85%, transparent 100%)",
              boxShadow: "0 0 8px #ff1f4f, 0 0 16px rgba(255, 31, 79, 0.7), 0 0 28px rgba(255, 31, 79, 0.4)",
            }}
            aria-hidden
          />
        </div>
        </div>
      </div>
    </section>
  );
};

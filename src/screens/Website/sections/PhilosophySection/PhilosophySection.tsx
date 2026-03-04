export const PhilosophySection = (): JSX.Element => {
  return (
    <section id="philosophy" className="w-full min-w-0 overflow-hidden">
      <div id="philosophy-content" className="w-full bg-[#111111] py-5 md:py-20">
        <div className="container mx-auto px-4 md:px-4 lg:px-12 xl:px-16 max-w-[1562px] flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-[720px] w-full min-w-0 translate-y-[-1rem] animate-fade-in opacity-0 px-1" style={{ "--animation-delay": "200ms" } as React.CSSProperties}>
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-10 h-px bg-[#ff1f4f]" aria-hidden />
            <span className="[font-family:'Space Grotesk',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
              OUR PHILOSOPHY
            </span>
            <div className="w-10 h-px bg-[#ff1f4f]" aria-hidden />
          </div>

          <h2 className="[font-family:'Poppins'] font-bold text-white text-[28px] sm:text-[36px] md:text-[42px] tracking-[-1.96px] leading-[1.1] mb-10">
            We believe great brands aren't built
            <br />
            <span className="text-[#ff1f4f]">they're engineered.</span>
          </h2>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#FFFFFF] text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[28px] mb-8 break-words">
          Dominant brands obsess over details others overlook — the loading animation that cuts perceived wait by 40%, the onboarding that converts trials overnight, the identity that makes a $2M startup feel like $200M.
          </p>

          <p className="[font-family:'Inter',Helvetica] font-normal text-[#B7B7B7] text-[15px] sm:text-base tracking-[0] leading-[1.6] sm:leading-[28px] mb-8 break-words">
          That's XPLOW. We don't do "good enough" — we study what separates the 1% and engineer it into every project. Our brands don't just compete; they set the standard.
          </p>

          {/* <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] md:text-[32px] tracking-[-0.5px] leading-[1.2] mb-8 text-center">
            The brands we build don't just compete. They set the standard everyone else chases.
          </h3> */}

          {/* Subtle white divider line */}
          <div
            className="w-full h-px rounded-full mt-2"
            style={{
              background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.5) 15%, rgba(255,255,255,0.5) 85%, transparent 100%)",
            }}
            aria-hidden
          />
        </div>
        </div>
      </div>
    </section>
  );
};

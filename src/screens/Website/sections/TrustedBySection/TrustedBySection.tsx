import { motion } from "motion/react";
import { useTrustedSectionColors } from "../../useScrollBackground";

const LOGO_COMPANIES = [
  { name: "Liveblocks", domain: "liveblocks.io" },
  { name: "Appwrite", domain: "appwrite.io" },
  { name: "tldraw", domain: "tldraw.com" },
  { name: "Spline", domain: "spline.design" },
  { name: "Pitch", domain: "pitch.com" },
  { name: "Langfuse", domain: "langfuse.com" },
  { name: "Relevance AI", domain: "relevanceai.com" },
  { name: "Nhost", domain: "nhost.io" },
];

export const TrustedBySection = (): JSX.Element => {
  const { textColor, logoFilter } = useTrustedSectionColors();

  return (
    <section id="trusted-by" className="w-full min-w-0 overflow-hidden bg-transparent py-5 md:py-14">
      <motion.div
        className="container mx-auto px-5 md:px-5 lg:px-16 max-w-[1562px] flex flex-col items-center gap-10 translate-y-[-1rem] animate-fade-in opacity-0"
        style={{ "--animation-delay": "0ms", color: textColor } as React.CSSProperties}
      >
        <p className="[font-family:'Inter',Helvetica] font-semibold text-[18px] sm:text-[22px] md:text-[26px] tracking-[-0.02em] leading-tight text-center break-words px-2">
          Trusted by forward-thinking brands
        </p>
        <div className="grid grid-cols-2 min-[400px]:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6 md:gap-8 w-full max-w-[1562px] mx-auto justify-items-center items-center min-w-0">
          {LOGO_COMPANIES.map((company) => (
            <a
              key={company.domain}
              href={`https://${company.domain}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center h-16 md:h-[72px] w-full max-w-[140px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 group"
            >
              <motion.img
                src={`https://logo.clearbit.com/${company.domain}`}
                alt={company.name}
                className="h-14 md:h-16 w-auto object-contain max-h-[80px]"
                style={{ filter: logoFilter }}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                  const fallback = target.parentElement?.querySelector(".logo-fallback");
                  if (fallback) (fallback as HTMLElement).style.display = "block";
                }}
              />
              <span className="[font-family:'Inter',Helvetica] font-semibold text-[20px] md:text-[24px] logo-fallback hidden whitespace-nowrap">
                {company.name}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

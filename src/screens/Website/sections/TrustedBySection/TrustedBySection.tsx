import React, { useState } from "react";
import { LogoLoop } from "../../../../components/LogoLoop";
import type { LogoItem } from "../../../../components/LogoLoop";

const LOGO_COMPANIES: Array<{ name: string; domain: string }> = [
  { name: "Liveblocks", domain: "liveblocks.io" },
  { name: "Appwrite", domain: "appwrite.io" },
  { name: "tldraw", domain: "tldraw.com" },
  { name: "Spline", domain: "spline.design" },
  { name: "Pitch", domain: "pitch.com" },
  { name: "Langfuse", domain: "langfuse.com" },
  { name: "Relevance AI", domain: "relevanceai.com" },
  { name: "Nhost", domain: "nhost.io" },
];

const TrustedByLogo = ({
  item,
}: {
  item: LogoItem & { src: string; href?: string; alt?: string };
}) => {
  const [errored, setErrored] = useState(false);

  const inner = errored ? (
    <span className="[font-family:'Poppins',Helvetica] font-semibold text-white/60 text-[22px] md:text-[26px] whitespace-nowrap">
      {(item as { alt?: string }).alt ?? "Logo"}
    </span>
  ) : (
    <img
      src={item.src}
      alt={item.alt ?? ""}
      className="h-[56px] md:h-[64px] w-auto object-contain object-center transition-all duration-500 ease-out opacity-50 hover:opacity-100 brightness-0 invert"
      loading="lazy"
      onError={() => setErrored(true)}
    />
  );

  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center justify-center h-[88px] md:h-[100px] min-w-[160px] md:min-w-[200px] px-6 py-4 no-underline rounded-xl transition-all duration-300 border-b-2 border-transparent hover:border-[#ff1f4f]"
      aria-label={`${item.alt ?? "Logo"} - visit website`}
    >
      {inner}
    </a>
  ) : (
    <div className="flex items-center justify-center h-[88px] md:h-[100px] min-w-[160px] md:min-w-[200px] px-6 py-4">
      {inner}
    </div>
  );
};

export const TrustedBySection = (): JSX.Element => {
  const logos: LogoItem[] = LOGO_COMPANIES.map((c) => ({
    src: `https://logo.clearbit.com/${c.domain}?size=128`,
    alt: c.name,
    href: `https://${c.domain}`,
  }));

  return (
    <section id="trusted-by" className="w-full min-w-0 overflow-x-hidden bg-[#0f0f0f] py-16 md:py-24 border-y border-white/[0.06]">
      <div
        className="flex flex-col items-center gap-6 md:gap-8 translate-y-[-1rem] animate-fade-in opacity-0"
        style={{ "--animation-delay": "0ms" } as React.CSSProperties}
      >
        <div className="container mx-auto px-4 md:px-4 lg:px-12 xl:px-16 max-w-[1562px] flex flex-col items-center gap-3">
          <div className="w-10 h-0.5 bg-[#ff1f4f]" aria-hidden />
          <p className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[16px] sm:text-[17px] md:text-[18px] tracking-[-0.02em] leading-tight text-center break-words px-4">
            Trusted by forward-thinking brands
          </p>
        </div>
      </div>

      {/* Full-width carousel — edge to edge, 36px gap below heading */}
      <div className="w-[100vw] relative left-1/2 -translate-x-1/2 overflow-hidden mt-9">
        <LogoLoop
          logos={logos}
          speed={45}
          direction="left"
          logoHeight={64}
          gap={72}
          fadeOut
          fadeOutColor="#0f0f0f"
          pauseOnHover
          scaleOnHover={false}
          renderItem={(item) => (
            <TrustedByLogo item={item as LogoItem & { src: string; href?: string; alt?: string }} />
          )}
          ariaLabel="Trusted by brands"
          className="[--logoloop-logoHeight:64px] [--logoloop-gap:72px]"
        />
      </div>
    </section>
  );
};

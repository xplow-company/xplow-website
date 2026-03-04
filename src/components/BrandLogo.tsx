import { useState } from "react";

interface BrandLogoProps {
  src: string | undefined;
  alt: string;
  className?: string;
  fallbackClassName?: string;
}

/** Renders brand logo with fallback to brand name when image fails to load. */
export const BrandLogo = ({ src, alt, className = "h-6 w-auto object-contain", fallbackClassName }: BrandLogoProps): JSX.Element => {
  const [failed, setFailed] = useState(false);

  if (!src) {
    return (
      <span className={`[font-family:'Poppins',Helvetica] font-bold text-white truncate ${fallbackClassName || "text-sm"}`}>
        {alt}
      </span>
    );
  }
  if (failed) {
    return (
      <span data-fallback className={`[font-family:'Poppins',Helvetica] font-bold text-white truncate ${fallbackClassName || "text-sm"}`}>
        {alt}
      </span>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
    />
  );
};

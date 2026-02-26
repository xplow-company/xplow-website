import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls window to top when route changes (e.g. navigating to case study). */
export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

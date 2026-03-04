import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/** Scrolls window to top on load/reload and when route changes. */
export const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
};

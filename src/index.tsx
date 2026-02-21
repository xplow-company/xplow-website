import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { Website } from "./screens/Website/Website";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<div className="p-4 text-red-600">Something went wrong. Check the console.</div>}>
      <Website />
    </ErrorBoundary>
  </StrictMode>,
);

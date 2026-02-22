import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "motion/react";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { SplashScreen } from "./components/SplashScreen";
import { Website } from "./screens/Website/Website";

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <SplashScreen
        visible={loading}
        onComplete={() => setLoading(false)}
        fadeOutDelay={2}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="min-h-screen"
      >
        <ErrorBoundary fallback={<div className="p-4 text-red-600">Something went wrong. Check the console.</div>}>
          <Website />
        </ErrorBoundary>
      </motion.div>
    </>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

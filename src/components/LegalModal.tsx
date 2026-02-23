import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export type LegalModalType = "terms" | "privacy" | null;

interface LegalModalProps {
  type: LegalModalType;
  onClose: () => void;
}

const TERMS_CONTENT = (
  <>
    <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl md:text-3xl mb-6">
      Terms & Conditions
    </h2>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Last updated: February 2026
    </p>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-6">
      Welcome to Xplow. By accessing or using our website and services, you agree to be bound by these Terms & Conditions.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">1. Services</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Xplow provides brand strategy, product design, and frontend engineering services. We reserve the right to modify, suspend, or discontinue any part of our services at any time.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">2. Intellectual Property</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      All deliverables, designs, code, and materials created by Xplow remain our property until full payment is received. Upon completion of payment, ownership transfers to the client as specified in individual project agreements.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">3. Confidentiality</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Both parties agree to maintain confidentiality of any proprietary or sensitive information shared during the course of engagement. We may request NDAs for specific projects.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">4. Payment & Cancellation</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Payment terms are outlined in individual project proposals. Cancellation policies may vary by project scope. We typically require 30 days notice for cancellation of ongoing engagements.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">5. Limitation of Liability</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Xplow shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our liability is limited to the amount paid for the specific project in question.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">6. Contact</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      For questions about these Terms & Conditions, please contact us at{" "}
      <a href="mailto:team@xplow.in" className="text-[#ff1f4f] hover:underline">team@xplow.in</a>.
    </p>
  </>
);

const PRIVACY_CONTENT = (
  <>
    <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-2xl md:text-3xl mb-6">
      Privacy Policy
    </h2>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Last updated: February 2026
    </p>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-6">
      Xplow respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">1. Information We Collect</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      We may collect personal information you provide directly, including name, email address, company name, and project details when you contact us or submit inquiries through our website.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">2. How We Use Your Information</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      We use your information to respond to inquiries, deliver projects, communicate about our services, and improve our offerings. We do not sell your personal information to third parties.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">3. Data Storage & Security</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, or destruction. Data is stored securely and retained only as long as necessary.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">4. Cookies & Analytics</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      Our website may use cookies and similar technologies to improve user experience and analyze site traffic. You can control cookie preferences through your browser settings.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">5. Your Rights</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      You have the right to access, correct, or delete your personal information. To exercise these rights or for any privacy-related questions, contact us at{" "}
      <a href="mailto:team@xplow.in" className="text-[#ff1f4f] hover:underline">team@xplow.in</a>.
    </p>

    <h3 className="[font-family:'Inter',Helvetica] font-semibold text-white text-base mt-6 mb-2">6. Changes to This Policy</h3>
    <p className="[font-family:'Inter',Helvetica] text-[#cccccc] text-sm leading-relaxed mb-4">
      We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on this page with a revised date.
    </p>
  </>
);

export function LegalModal({ type, onClose }: LegalModalProps) {
  useEffect(() => {
    if (type) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [type]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (type) {
      window.addEventListener("keydown", handleEscape);
    }
    return () => window.removeEventListener("keydown", handleEscape);
  }, [type, onClose]);

  const content = type === "terms" ? TERMS_CONTENT : type === "privacy" ? PRIVACY_CONTENT : null;

  return (
    <AnimatePresence>
      {type && content && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-[680px] max-h-[85vh] bg-black border border-[#2a2a2a] rounded-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex-shrink-0 flex items-center justify-between p-6 border-b border-[#2a2a2a]">
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#eaeaea] text-sm">
                {type === "terms" ? "Terms & Conditions" : "Privacy Policy"}
              </span>
              <button
                onClick={onClose}
                className="p-2 rounded-full text-[#eaeaea] hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {content}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

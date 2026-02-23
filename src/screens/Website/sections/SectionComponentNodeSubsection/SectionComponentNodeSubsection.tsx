import { useState } from "react";
import { CheckIcon, MailIcon, PhoneIcon, ClockIcon, ChevronDownIcon } from "lucide-react";
import arrowIcon from "@/assets/arrow.svg";

export const SectionComponentNodeSubsection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "product",
    message: "",
    nda: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(
      `New Project Inquiry from ${formData.name || "Website Visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"}\nProject Type: ${formData.projectType}\nNDA Requested: ${formData.nda ? "Yes" : "No"}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:team@xplow.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 4000);
    }, 1200);
  };

  return (
    <section
      id="lets-build"
      className="relative w-full bg-[#FFFFFF] overflow-hidden py-5 md:py-24"
    >
      <div className="container mx-auto px-5 md:px-5 lg:px-16 max-w-[1562px] w-full min-w-0">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14 sm:mb-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#0c0c0c] text-white ring-1 ring-[#e0e0e0] px-[17px] py-[7px] mb-7">
            <span className="relative flex items-center justify-center w-2 h-2">
              <span className="absolute w-[15px] h-[15px] bg-green-500 rounded-full opacity-[0.04]" />
              <span className="relative w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            </span>
            <span className="[font-family:'Inter',Helvetica] text-[11px] tracking-[1.65px] leading-[16.5px] uppercase">
              Currently Accepting Projects
            </span>
          </div>

          <h2 className="[font-family:'poppins',Helvetica] font-bold text-[#0c0c0c] text-[32px] sm:text-[44px] md:text-[52px] lg:text-[60px] tracking-[-2px] leading-[1.1] mb-3">
            Let's start{" "}
            <span className="text-[#ff1f4f]">building.</span>
          </h2>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#999999] text-[15px] leading-[1.6]">
            We take on limited projects to ensure every client gets our full creative and strategic focus.
          </p>
        </div>

        {/* Form card */}
        <div className="max-w-[860px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <form
            id="contact-form"
            onSubmit={handleSubmit}
            className="flex flex-col"
          >
            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              <label htmlFor="name" className="relative block pt-6 pb-3 border-b border-[#e8e8e8] cursor-text">
                <span
                  className={`absolute left-0 transition-all duration-200 [font-family:'Inter',Helvetica] pointer-events-none ${focused === "name" || formData.name
                    ? "top-1.5 text-[10px] tracking-[1px] uppercase text-[#ff1f4f] font-medium"
                    : "top-6 text-[14px] text-[#b0b0b0]"
                    }`}
                >
                  Your name *
                </span>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent [font-family:'Inter',Helvetica] text-[14px] text-[#1a1a1a] pt-1 outline-none border-none"
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1f4f] transition-all duration-300 ${focused === "name" ? "w-full" : "w-0"}`} />
              </label>

              <label htmlFor="email" className="relative block pt-6 pb-3 border-b border-[#e8e8e8] cursor-text">
                <span
                  className={`absolute left-0 transition-all duration-200 [font-family:'Inter',Helvetica] pointer-events-none ${focused === "email" || formData.email
                    ? "top-1.5 text-[10px] tracking-[1px] uppercase text-[#ff1f4f] font-medium"
                    : "top-6 text-[14px] text-[#b0b0b0]"
                    }`}
                >
                  Email address *
                </span>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent [font-family:'Inter',Helvetica] text-[14px] text-[#1a1a1a] pt-1 outline-none border-none"
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1f4f] transition-all duration-300 ${focused === "email" ? "w-full" : "w-0"}`} />
              </label>
            </div>

            {/* Row 2: Company + Project Type */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12">
              <label htmlFor="company" className="relative block pt-6 pb-3 border-b border-[#e8e8e8] cursor-text">
                <span
                  className={`absolute left-0 transition-all duration-200 [font-family:'Inter',Helvetica] pointer-events-none ${focused === "company" || formData.company
                    ? "top-1.5 text-[10px] tracking-[1px] uppercase text-[#ff1f4f] font-medium"
                    : "top-6 text-[14px] text-[#b0b0b0]"
                    }`}
                >
                  Company
                </span>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => setFocused("company")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent [font-family:'Inter',Helvetica] text-[14px] text-[#1a1a1a] pt-1 outline-none border-none"
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1f4f] transition-all duration-300 ${focused === "company" ? "w-full" : "w-0"}`} />
              </label>

              <label htmlFor="project-type" className="relative block pt-6 pb-3 border-b border-[#e8e8e8] cursor-pointer">
                <span
                  className="absolute left-0 top-1.5 text-[10px] tracking-[1px] uppercase text-[#999999] font-medium [font-family:'Inter',Helvetica] pointer-events-none"
                >
                  Project type
                </span>
                <select
                  id="project-type"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  onFocus={() => setFocused("projectType")}
                  onBlur={() => setFocused(null)}
                  className="w-full bg-transparent [font-family:'Inter',Helvetica] text-[14px] text-[#1a1a1a] pt-1 outline-none border-none appearance-none cursor-pointer pr-8"
                >
                  <option value="product">New product build</option>
                  <option value="feature">Feature delivery</option>
                  <option value="advisory">Advisory / audit</option>
                  <option value="ai">AI integration</option>
                </select>
                <ChevronDownIcon className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-[#999999] pointer-events-none" />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1f4f] transition-all duration-300 ${focused === "projectType" ? "w-full" : "w-0"}`} />
              </label>
            </div>

            {/* Row 3: Message */}
            <label htmlFor="message" className="relative block pt-6 pb-3 border-b border-[#e8e8e8] cursor-text">
              <span
                className={`absolute left-0 transition-all duration-200 [font-family:'Inter',Helvetica] pointer-events-none ${focused === "message" || formData.message
                  ? "top-1.5 text-[10px] tracking-[1px] uppercase text-[#ff1f4f] font-medium"
                  : "top-6 text-[14px] text-[#b0b0b0]"
                  }`}
              >
                What are you building?
              </span>
              <textarea
                id="message"
                name="message"
                rows={2}
                value={formData.message}
                onChange={handleChange}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                className="w-full bg-transparent [font-family:'Inter',Helvetica] text-[14px] text-[#1a1a1a] pt-1 outline-none border-none resize-none"
              />
              <div className={`absolute bottom-0 left-0 h-[2px] bg-[#ff1f4f] transition-all duration-300 ${focused === "message" ? "w-full" : "w-0"}`} />
            </label>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-8">
              {/* Left side */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                <label
                  htmlFor="nda"
                  className="flex items-center gap-2 cursor-pointer select-none group"
                >
                  <input
                    id="nda"
                    name="nda"
                    type="checkbox"
                    checked={formData.nda}
                    onChange={handleChange}
                    className="h-4 w-4 rounded-sm border-[#d0d0d0] bg-white text-[#ff1f4f] focus:ring-[#ff1f4f]/20 accent-[#ff1f4f] cursor-pointer"
                  />
                  <span className="[font-family:'Inter',Helvetica] text-[12px] text-[#888888] group-hover:text-[#555555] transition-colors">
                    Send me an NDA
                  </span>
                </label>
                <span className="hidden sm:block w-px h-3.5 bg-[#e0e0e0]" />
                <a
                  href="mailto:team@xplow.in"
                  className="inline-flex items-center gap-1.5 [font-family:'Inter',Helvetica] text-[12px] text-[#aaa] hover:text-[#ff1f4f] transition-colors"
                >
                  <MailIcon className="w-3 h-3" />
                  team@xplow.in
                </a>
                <a
                  href="tel:+918981398598"
                  className="inline-flex items-center gap-1.5 [font-family:'Inter',Helvetica] text-[12px] text-[#aaa] hover:text-[#ff1f4f] transition-colors"
                >
                  <PhoneIcon className="w-3 h-3" />
                  +91 89813 98598
                </a>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-4">
                {isSubmitted && (
                  <span className="[font-family:'Inter',Helvetica] text-green-600 text-[12px] font-medium flex items-center gap-1.5 animate-fade-in">
                    <CheckIcon className="w-3 h-3" />
                    Sent!
                  </span>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#0c0c0c] hover:bg-[#ff1f4f] text-white rounded-full [font-family:'Space_Grotesk',Helvetica] font-bold text-[15px] tracking-[0.02em] border-2 border-transparent hover:border-[#ff1f4f] transition-all duration-200 shadow-sm hover:shadow-[0_4px_24px_-4px_rgba(255,31,79,0.4)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending…" : "Send Request"}
                  <img src={arrowIcon} alt="" className="w-[22px] h-[22px] invert transition-transform duration-200 group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </form>

          {/* Trust bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-8 border-t border-[#f0f0f0]">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              {[
                "Senior engineers & designers only",
                "Weekly demos & delivery plans",
                "Security & performance baked‑in",
              ].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 [font-family:'Inter',Helvetica] text-[11px] text-[#aaaaaa] tracking-[0.2px]">
                  <CheckIcon className="w-3 h-3 text-[#ff1f4f]/70" />
                  {item}
                </span>
              ))}
            </div>
            <div className="inline-flex items-center gap-2">
              <ClockIcon className="w-3.5 h-3.5 text-[#ff1f4f]" />
              <span className="[font-family:'Inter',Helvetica] text-[11px] text-[#999999] font-medium tracking-[0.2px]">
                Response within 24 hours
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

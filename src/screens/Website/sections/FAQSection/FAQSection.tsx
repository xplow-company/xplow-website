import { useState } from "react";
import { ArrowRightIcon, ArrowUpRightIcon, MessageCircleIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const FAQ_CATEGORIES = [
  { id: "working", label: "Working Together", count: 3 },
  { id: "process", label: "Process", count: 3 },
  { id: "investment", label: "Investment", count: 3 },
  { id: "technical", label: "Technical", count: 3 },
] as const;

type CategoryId = (typeof FAQ_CATEGORIES)[number]["id"];

interface FAQItem {
  id: string;
  question: string;
  answerTag?: string;
  answer: string[];
  quote?: string;
}

const FAQ_DATA: Record<CategoryId, FAQItem[]> = {
  working: [
    {
      id: "w1",
      question: "How involved do founders need to be during a project?",
      answerTag: "2-3 hrs/week",
      answer: [
        "We need your brain for strategy, not your time for micromanagement. Expect 2–3 hours per week during discovery, then a 30-minute async review per milestone. We run tight — you'll get Loom walkthroughs, annotated Figma links, and a shared Slack channel. No meetings that could've been an email.",
      ],
      quote: "Most founders tell us we're the lowest-overhead partner they've ever had.",
    },
    {
      id: "w2",
      question: "What does your team structure look like on a project?",
      answerTag: "Flexible",
      answer: [
        "We scope each engagement around your goals: fixed-scope projects (e.g. rebrand, product redesign) or ongoing retainer (design + dev support). You'll work directly with the same small team from kickoff to delivery.",
      ],
    },
    {
      id: "w3",
      question: "We've been burned by agencies before. How are you different?",
      answerTag: "Direct",
      answer: [
        "No account managers or production layers — you work with the people who do the work. We stake our reputation on every pixel and ship. If your question isn't here, just ask.",
      ],
    },
  ],
  process: [
    {
      id: "p1",
      question: "How do you start a new project?",
      answerTag: "Discovery first",
      answer: [
        "We begin with a discovery phase: understanding your market, users, and goals. From there we align on scope, timeline, and deliverables. No surprise phases — you'll see the plan before we start.",
      ],
      quote: "Clients often say our discovery phase alone was worth more than their last agency's entire engagement.",
    },
    {
      id: "p2",
      question: "How do you handle feedback and revisions?",
      answerTag: "Structured",
      answer: [
        "Feedback is collected in structured review points (e.g. end of sprint). We use clear revision rounds so the project stays on track. We'll agree on the number of rounds in the scope.",
      ],
    },
    {
      id: "p3",
      question: "What tools do you use?",
      answerTag: "Modern stack",
      answer: [
        "Figma for design; React/Next.js for frontend; your preferred backend or ours. We'll align on tools during kickoff so handoffs and collaboration are smooth.",
      ],
    },
  ],
  investment: [
    {
      id: "i1",
      question: "What do you charge?",
      answerTag: "Project-based",
      answer: [
        "We quote per project or retainer, not hourly. You'll get a clear proposal with scope, phases, and investment. Pricing depends on scope and timeline — we'll outline options after our first conversation.",
      ],
      quote: "Every founder we've worked with says the ROI was clear within the first milestone.",
    },
    {
      id: "i2",
      question: "Do you offer payment plans?",
      answerTag: "Yes",
      answer: [
        "Yes. We can split fees across milestones (e.g. 50% at kickoff, 50% at delivery) or monthly for retainers. We'll propose terms that work for your cash flow.",
      ],
    },
    {
      id: "i3",
      question: "What's included in the initial proposal?",
      answerTag: "Full scope",
      answer: [
        "Scope of work, deliverables, timeline, and total investment. We don't hide fees — what we quote is what you pay unless scope changes and we agree on a change order.",
      ],
    },
  ],
  technical: [
    {
      id: "t1",
      question: "Do you build in-house or outsource development?",
      answerTag: "In-house",
      answer: [
        "All strategy, design, and front-end development are done in-house. For specialized backend or infra we may partner with vetted experts; you'll always know who's on the team.",
      ],
      quote: "Founders love that they always know exactly who's building their product — no mystery subcontractors.",
    },
    {
      id: "t2",
      question: "Can you work with our existing codebase or design system?",
      answerTag: "Yes",
      answer: [
        "Yes. We audit existing systems and either extend them or propose a migration path. We don't rip and replace without reason — we'll recommend what's best for your goals and timeline.",
      ],
    },
    {
      id: "t3",
      question: "What about ongoing support after launch?",
      answerTag: "Optional",
      answer: [
        "We offer post-launch support and retainer options: bug fixes, iterations, and new features. Many clients move to a retainer after the initial project so we can keep shipping together.",
      ],
    },
  ],
};

export const FAQSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("working");
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

  const items = FAQ_DATA[activeCategory];
  const activeItem = items[activeQuestionIndex];

  return (
    <section id="faq" className="w-full bg-[#0c0c0c] py-5 md:py-20 px-5 md:px-5 lg:px-16">
      <div className="max-w-[1562px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-[#FF1F4F]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#FF1F4F] text-[11px] tracking-[2.42px] leading-[16.5px] uppercase">
                FAQ
              </span>
            </div>
            <h2 className="[font-family:'popins',Helvetica] font-bold text-white text-[40px] md:text-[48px] lg:text-[56px] tracking-[-1.96px] leading-[1.1]">
              Questions we get
              <br />
              <span className="text-[#FF1F4F]">before the handshake.</span>
            </h2>
          </div>
          <p className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-[15px] md:text-base leading-[26px] md:text-right">
            Straight answers. No fluff, no corporate-speak.
            <br />
            If your question isn't here —{" "}
            <a href="mailto:team@xplow.in" className="font-bold text-[#FF1F4F] no-underline">
              just ask.
            </a>
          </p>
        </header>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3">
          {FAQ_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => {
                setActiveCategory(cat.id);
                setActiveQuestionIndex(0);
              }}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium [font-family:'Inter',Helvetica] transition-colors border ${
                activeCategory === cat.id
                  ? "bg-[#3d1a24] text-white border-[#5a2a38]"
                  : "bg-[#1a1a1a] text-[#aaaaaa] border-[#333333] hover:bg-[#222222]"
              }`}
            >
              {cat.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs font-medium ${
                  activeCategory === cat.id ? "bg-[#5a2233] text-[#FF1F4F]" : "bg-[#333333] text-[#888888]"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Two-column: questions list + answer panel */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 lg:min-h-[400px]">
          <nav className="lg:w-[42%] flex flex-col gap-2">
            {items.map((item, index) => {
              const isActive = index === activeQuestionIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveQuestionIndex(index)}
                  className="text-left transition-colors flex items-center gap-3 w-full"
                >
                  <div className="relative shrink-0 flex items-center justify-center w-7">
                    {isActive && (
                      <svg
                        className="absolute left-0"
                        width="14"
                        height="32"
                        viewBox="0 0 14 32"
                        fill="none"
                      >
                        <path
                          d="M13 1C6.5 1 1 7.5 1 16C1 24.5 6.5 31 13 31"
                          stroke="#FF1F4F"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    )}
                    <span
                      className={`[font-family:'Inter',Helvetica] text-[12px] tabular-nums font-medium ${
                        isActive ? "text-[#FF1F4F]" : "text-[#555555]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span
                    className={`[font-family:'Inter',Helvetica] text-[14px] leading-snug flex-1 min-w-0 rounded-xl px-5 py-4 flex items-center border transition-colors ${
                      isActive
                        ? "bg-[#241418] text-white font-medium border-[#3a1f28]"
                        : "text-[#777777] border-transparent hover:bg-[#111111]"
                    }`}
                  >
                    <span className="flex-1">{item.question}</span>
                    {isActive && (
                      <ArrowRightIcon className="w-4 h-4 shrink-0 text-[#FF1F4F] ml-3" />
                    )}
                  </span>
                </button>
              );
            })}
          </nav>

          <div className="hidden lg:block w-px bg-[#1e1e1e] self-stretch" />

          <div className="flex-1 flex flex-col gap-6">
            {activeItem.answerTag && (
              <div className="inline-flex items-center gap-2 rounded-full bg-[#FF1F4F]/20 px-4 py-1.5 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF1F4F] shrink-0" />
                <span className="[font-family:'Inter',Helvetica] font-medium text-[#FF1F4F] text-[13px] tracking-wider">
                  {activeItem.answerTag}
                </span>
              </div>
            )}
            <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[24px] md:text-[28px] leading-[1.25]">
              {activeItem.question}
            </h3>
            <div className="flex flex-col gap-4">
              {activeItem.answer.map((para, i) => (
                <p
                  key={i}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#aaaaaa] text-[15px] leading-[26px]"
                >
                  {para}
                </p>
              ))}
            </div>
            {activeItem.quote && (
              <blockquote className="rounded-xl border border-[#2a2a2a] bg-[#141414] px-6 py-5 flex items-start gap-4">
                <div className="w-[3px] shrink-0 self-stretch rounded-full bg-[#FF1F4F]" />
                <p className="[font-family:'Inter',Helvetica] font-normal italic text-[#888888] text-[15px] leading-[24px]">
                  {activeItem.quote}
                </p>
              </blockquote>
            )}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl bg-[#1a1a1a] border border-[#333333] p-8 md:p-10 flex flex-col md:flex-row md:items-center gap-6 md:gap-8">
          <div className="flex items-center gap-4 flex-1">
            <div className="w-12 h-12 rounded-full border-2 border-[#FF1F4F] flex items-center justify-center shrink-0 bg-transparent">
              <MessageCircleIcon className="w-6 h-6 text-[#FF1F4F]" strokeWidth={2} />
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[20px] md:text-[22px]">
                Still have questions?
              </h3>
              <p className="[font-family:'Inter',Helvetica] font-normal text-[#888888] text-[14px] leading-[22px]">
                We respond within 24 hours. No forms, no chatbots — a real human who understands your project.
              </p>
            </div>
          </div>
          <Button
            asChild
            className="shrink-0 h-12 px-8 rounded-full bg-[#FF1F4F] hover:bg-[#FF1F4F]/90 text-white font-bold [font-family:'Space_Grotesk',Helvetica] border-0"
          >
            <a href="mailto:team@xplow.in" className="inline-flex items-center gap-2">
              Let's Talk
              <ArrowUpRightIcon className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

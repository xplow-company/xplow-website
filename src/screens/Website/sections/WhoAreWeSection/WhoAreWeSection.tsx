import { StarIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const testimonialData = {
  quote:
    "We've worked with six agencies before XPLOW. None of them even came close. The level of strategic thinking behind every design decision is unreal.",
  author: {
    name: "David Park",
    initials: "DP",
    title: "Head of Product, Lumina",
  },
  badge: "6th time's the charm",
};

const clientsList = [
  { id: "01", name: "Samira Patel", isActive: false },
  { id: "02", name: "Marcus Chen", isActive: false },
  { id: "03", name: "Elena Voss", isActive: false },
  { id: "04", name: "David Park", isActive: true },
  { id: "05", name: "Ava Richardson", isActive: false },
];
const ratingData = {
  stars: 5,
  averageRating: "5.0 avg rating",
};

export const WhoAreWeSection = (): JSX.Element => {
  return (
    <section id="who-we-are" className="w-full bg-[#0c0c0c] py-24 px-4 md:px-8 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <header className="flex flex-col gap-8 mb-24 translate-y-[-1rem] animate-fade-in opacity-0">
          <div className="flex items-center gap-4">
            <div className="w-10 h-0.5 bg-[#ff1f4f]" />
            <span className="font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] [font-family:'Inter',Helvetica] uppercase">
              Client Voices
            </span>
          </div>
          <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[56px] tracking-[-1.10px] leading-[61.6px]">
            <span className="text-white">Don't take </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
              our word for it.
            </span>
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_395px] gap-8 lg:gap-12">
          <div className="flex flex-col gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="w-12 h-12 flex items-center justify-center">
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.2 28.8C19.2 25.488 16.512 22.8 13.2 22.8V13.2C21.936 13.2 28.8 20.064 28.8 28.8H19.2ZM40.8 28.8C40.8 25.488 38.112 22.8 34.8 22.8V13.2C43.536 13.2 50.4 20.064 50.4 28.8H40.8Z"
                  fill="#ff1f4f"
                />
              </svg>
            </div>
            <Card className="bg-transparent border-none">
              <CardContent className="p-0 flex flex-col gap-8">
                <blockquote className="[font-family:'Space_Grotesk',Helvetica] font-medium text-[#eaeaea] text-[32px] tracking-[-0.64px] leading-[48px]">
                  "{testimonialData.quote}"
                </blockquote>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12 rounded-full border border-solid border-[#ff1f4f26] bg-[linear-gradient(135deg,rgba(255,31,79,0.2)_0%,rgba(255,31,79,0.05)_100%)]">
                      <AvatarFallback className="bg-transparent [font-family:'Space_Grotesk',Helvetica] font-bold text-[#ff1f4f] text-sm">
                        {testimonialData.author.initials}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <span className="font-normal text-white text-[15px] leading-[22.5px] [font-family:'Inter',Helvetica]">
                        {testimonialData.author.name}
                      </span>
                      <span className="text-[#777777] text-[13px] leading-[19.5px] [font-family:'Inter',Helvetica] font-normal">
                        {testimonialData.author.title}
                      </span>
                    </div>
                  </div>

                  <Badge
                    variant="outline"
                    className="bg-[#ff1f4f14] border-[#ff1f4f26] rounded-full px-[13px] py-[7px] h-auto"
                  >
                    <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[0.33px] leading-[16.5px]">
                      {testimonialData.badge}
                    </span>
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>

          <aside className="flex flex-col gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {Array.from({ length: ratingData.stars }).map((_, index) => (
                  <StarIcon
                    key={index}
                    className="w-4 h-4 fill-[#ff1f4f] text-[#ff1f4f]"
                  />
                ))}
              </div>
              <span className="[font-family:'Inter',Helvetica] font-medium text-[#777777] text-[13px] leading-[19.5px]">
                {ratingData.averageRating}
              </span>
            </div>

            <nav className="flex flex-col gap-1">
              {clientsList.map((client) => (
                <button
                  key={client.id}
                  className={`flex items-center gap-3 pl-3 pr-3 py-2.5 h-[43px] rounded-2xl border border-solid transition-colors ${
                    client.isActive
                      ? "bg-[#ff1f4f14] border-[#ff1f4f26]"
                      : "border-transparent hover:border-[#ff1f4f26]"
                  }`}
                  aria-current={client.isActive ? "true" : undefined}
                >
                  <span
                    className={`[font-family:'Inter',Helvetica] font-normal text-[11px] text-right leading-[16.5px] min-w-[24px] ${
                      client.isActive ? "text-[#ff1f4f]" : "text-[#444444]"
                    }`}
                  >
                    {client.id}
                  </span>
                  <span
                    className={`font-medium text-sm leading-[21px] [font-family:'Inter',Helvetica] ${
                      client.isActive ? "text-white" : "text-[#666666]"
                    }`}
                  >
                    {client.name}
                  </span>
                  {client.isActive && (
                    <div className="ml-auto w-1.5 h-1.5 bg-[#ff1f4f] rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            <div className="w-full h-11 bg-gradient-to-r from-[#ff1f4f]/10 to-transparent rounded-lg" />
          </aside>
        </div>
      </div>
    </section>
  );
};

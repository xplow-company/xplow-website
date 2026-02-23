import w1Image from "@/assets/w1.png";
import w2Image from "@/assets/w2.png";
import w3Image from "@/assets/w3.png";
import w4Image from "@/assets/w4.png";
import { Badge } from "../../../../components/ui/badge";
import { Card, CardContent } from "../../../../components/ui/card";

const projectsData = [
  {
    id: 1,
    category: "SAAS • PRODUCT DESIGN",
    title: "Nexus Platform",
    metric: "+340%",
    image: w1Image,
  },
  {
    id: 2,
    category: "BRAND • IDENTITY",
    title: "Aura Identity",
    metric: "Full Rebrand",
    image: w2Image,
  },
  {
    id: 3,
    category: "APP • DEVELOPMENT",
    title: "Velo Mobile",
    metric: "50K+ DAU",
    image: w3Image,
  },
  {
    id: 4,
    category: "E-COMMERCE • WEB",
    title: "Arcane Store",
    metric: "2.8x CVR",
    image: w4Image,
  },
];

export const WorkSection = (): JSX.Element => {
  return (
    <section id="work" className="flex flex-col items-start gap-y-5 md:gap-y-16 py-5 md:pt-24 md:pb-0 px-5 md:px-5 lg:px-12 xl:px-[125px] w-full bg-transparent">
      <header className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 w-full">
          <div className="flex flex-col items-start gap-8 max-w-[626px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-[#ff1f4f]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] whitespace-nowrap">
                SELECTED WORK
              </span>
            </div>

            <h2 className="[font-family:'Poppins'] font-bold text-[32px] sm:text-[44px] md:text-[52px] lg:text-[56px] tracking-[-1.96px] leading-[1.1]">
              <span className="text-white tracking-[-1.10px]">Work that </span>
              <span className="text-[#ff1f4f] tracking-[-1.10px]">speaks louder.</span>
            </h2>
          </div>
        </div>
      </header>

      {/* Desktop: Bento grid 2x2 — cards with image, gradient overlay, badge, category + title */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-6 w-full max-w-[1312px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            className="overflow-hidden border border-[#3a3a3a] bg-[#262626] hover:border-[#4a4a4a] transition-colors cursor-pointer group w-full rounded-2xl"
          >
            <CardContent className="p-0 relative w-full aspect-[16/9]">
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,0.95)_0%,rgba(12,12,12,0.3)_40%,transparent_70%)] rounded-2xl" />
              <Badge
                variant="secondary"
                className="absolute top-5 left-5 bg-black border-0 text-white hover:bg-black h-8 px-4 rounded-full"
              >
                <span className="[font-family:'Space_Grotesk',Helvetica] font-medium text-xs">
                  {project.metric}
                </span>
              </Badge>
              <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-2 px-6 pb-6">
                <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[1.80px] leading-[15px] uppercase">
                  {project.category}
                </span>
                <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] tracking-[-0.56px] leading-[1.2]">
                  {project.title}
                </h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mobile: original overlay layout */}
      <div className="flex flex-col gap-4 sm:gap-5 w-full max-w-[1312px] mx-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] md:hidden">
        {[
          projectsData.slice(0, 2),
          projectsData.slice(2, 4),
        ].map((row, rowIndex) => (
          <div key={rowIndex} className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full justify-center">
            {row.map((project) => (
              <Card
                key={project.id}
                className="overflow-hidden border-[#2a2a2a] bg-transparent hover:border-[#ff1f4f] transition-colors cursor-pointer group w-full sm:flex-1 min-w-0 aspect-[16/9] sm:aspect-[757/427]"
              >
                <CardContent className="p-0 relative w-full h-full">
                  <div className="relative w-full h-full min-h-0 overflow-hidden">
                    <img
                      src={project.image}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(12,12,12,0.2)_50%,rgba(0,0,0,0)_100%)]" />
                    <div className="absolute top-[287px] left-0 right-0 flex flex-col gap-3 px-8 pb-8">
                      <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[10px] tracking-[1.80px] leading-[15px] whitespace-nowrap">
                        {project.category}
                      </span>
                      <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] tracking-[-0.56px] leading-[33.6px]">
                        {project.title}
                      </h3>
                    </div>
                    <div className="absolute top-5 left-5 flex items-center gap-2">
                      <Badge
                        variant="secondary"
                        className="bg-[#0c0c0c99] border-[#2a2a2a] text-white hover:bg-[#0c0c0c99] h-8 px-[13px] rounded-full"
                      >
                        <span className="[font-family:'Space_Grotesk',Helvetica] font-bold text-xs tracking-[0] leading-[18px]">
                          {project.metric}
                        </span>
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

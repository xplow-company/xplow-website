import { ArrowRightIcon } from "lucide-react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

const projectsData = [
  {
    id: 1,
    category: "SAAS · PRODUCT DESIGN",
    title: "Nexus Platform",
    metric: "+340%",
    gridClass: "col-span-2",
    imageHeight: "h-[425px]",
    contentTop: "top-[287px]",
  },
  {
    id: 2,
    category: "BRAND · IDENTITY",
    title: "Aura Identity",
    metric: "Full Rebrand",
    gridClass: "col-span-1",
    imageHeight: "h-[300px]",
    contentTop: "top-[162px]",
  },
  {
    id: 3,
    category: "APP · DEVELOPMENT",
    title: "Velo Mobile",
    metric: "50K+ DAU",
    gridClass: "col-span-1",
    imageHeight: "h-[300px]",
    contentTop: "top-[162px]",
  },
  {
    id: 4,
    category: "E-COMMERCE · WEB",
    title: "Arcane Store",
    metric: "2.8x CVR",
    gridClass: "col-span-2",
    imageHeight: "h-[425px]",
    contentTop: "top-[287px]",
  },
];
export const WorkSection = (): JSX.Element => {
  return (
    <section id="work" className="flex flex-col items-start gap-20 pt-44 pb-0 px-4 md:px-8 lg:px-[125px] w-full bg-[#0c0c0c]">
      <header className="relative w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 w-full">
          <div className="flex flex-col items-start gap-8 max-w-[626px]">
            <div className="flex items-center gap-4">
              <div className="w-10 h-0.5 bg-[#ff1f4f]" />
              <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[11px] tracking-[2.42px] leading-[16.5px] whitespace-nowrap">
                SELECTED WORK
              </span>
            </div>

            <h2 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-[56px] tracking-[-1.96px] leading-[61.6px]">
              <span className="text-white tracking-[-1.10px]">Work that </span>
              <span className="text-white tracking-[-1.10px]">
                speaks louder.
              </span>
            </h2>
          </div>

          <Button
            variant="ghost"
            className="h-auto p-0 text-[#888888] hover:text-white transition-colors group"
          >
            <span className="[font-family:'Inter',Helvetica] font-medium text-[13px] tracking-[0.52px] leading-[19.5px]">
              All Case Studies
            </span>
            <ArrowRightIcon className="ml-2 w-3.5 h-3.5" />
          </Button>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
        {projectsData.map((project) => (
          <Card
            key={project.id}
            className={`${project.gridClass} overflow-hidden border-[#2a2a2a] bg-transparent hover:border-[#ff1f4f] transition-colors cursor-pointer group`}
          >
            <CardContent className="p-0 relative">
              <div
                className={`relative w-full ${project.imageHeight} bg-cover bg-center`}
              >
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,12,12,1)_0%,rgba(12,12,12,0.2)_50%,rgba(0,0,0,0)_100%)]" />

                <div
                  className={`absolute ${project.contentTop} left-0 right-0 flex flex-col gap-3 px-8 pb-8`}
                >
                  <span className="[font-family:'Inter',Helvetica] font-bold text-[#ff1f4f] text-[10px] tracking-[1.80px] leading-[15px] whitespace-nowrap">
                    {project.category}
                  </span>

                  <h3 className="[font-family:'Space_Grotesk',Helvetica] font-bold text-white text-[28px] tracking-[-0.56px] leading-[33.6px]">
                    {project.title}
                  </h3>
                </div>
                <div className="absolute top-5 left-5">
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
    </section>
  );
};

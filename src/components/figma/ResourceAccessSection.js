// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Calendar, Users } from "lucide-react";
import React from "react";

export default function ResourceAccessSection() {
  // Data for the resource cards
  const resourceCards = [
    {
      title: "Resource Access",
      description:
        "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
      icon: <BookOpen className="w-5 h-5" />,
    },
    {
      title: "Community Forum",
      description:
        "Join our active community forum to discuss industry trends and collaborate with peers.",
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Tech Events",
      description:
        "Stay updated on upcoming tech events, webinars and conferences to enhance your knowledge.",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  return (
    <section className="flex flex-col items-start justify-center gap-[50px] p-20 w-full bg-dark-10 border-t border-b border-dark-15">
      <div className="flex items-center gap-[60px] w-full">
        {/* Logo grid */}
        <div className="relative w-[120px] h-[120px]">
          <div className="grid grid-cols-3 grid-rows-3 w-full h-full">
            {/* This creates a 3x3 grid for the logo elements */}
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
            <div className="w-10 h-10"></div> {/* Empty cell in the middle */}
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
            <img src="" alt="Logo part" className="w-10 h-10" />
          </div>
        </div>

        {/* Text content */}
        <div className="flex flex-col items-start justify-center gap-5 flex-1">
          <div className="flex flex-col items-start gap-2.5 w-full">
            {/* <Badge className="bg-dark-20 text-absolutewhite font-medium px-2 py-1 rounded">
              <span className="[font-family:'Inter-Medium',Helvetica] text-base tracking-[-0.48px] leading-6">
                Learn, Connect, and Innovate
              </span>
            </Badge> */}

            <h2 className="self-stretch [font-family:'Kumbh_Sans-Medium',Helvetica] font-medium text-[44px] tracking-[-1.32px] leading-[57.2px] text-absolutewhite">
              Be Part of the Future Tech Revolution
            </h2>
          </div>

          <p className="text-grey-50 self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-base tracking-[-0.48px] leading-6">
            Immerse yourself in the world of future technology. Explore our
            comprehensive resources, connect with fellow tech enthusiasts, and
            drive innovation in the industry. Join a dynamic community of
            forward-thinkers.
          </p>
        </div>
      </div>

      {/* Resource cards */}
      {/* <div className="flex items-start gap-2.5 p-2.5 bg-dark-08 rounded-[10px] border border-solid border-dark-15 w-full">
        {resourceCards.map((card, index) => (
          <Card
            key={index}
            className="flex-1 bg-dark-10 rounded-[10px] border border-solid border-dark-15"
          >
            <CardContent className="flex flex-col items-start gap-4 p-[30px]">
              <div className="flex items-center gap-4 w-full">
                <h3 className="flex-1 [font-family:'Inter-SemiBold',Helvetica] font-semibold text-lg tracking-[-0.54px] leading-[27px] text-absolutewhite">
                  {card.title}
                </h3>
                <div className="flex items-center justify-center p-3 bg-yellow-55 rounded-full">
                  {card.icon}
                </div>
              </div>
              <p className="text-grey-60 [font-family:'Inter-Regular',Helvetica] font-normal text-base tracking-[-0.48px] leading-6">
                {card.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div> */}
    </section>
  );
}

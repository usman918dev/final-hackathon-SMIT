// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Separator } from "@/components/ui/separator";
import { ArrowUpRight, Facebook, Instagram, Twitter } from "lucide-react";
import React from "react";

export default function FooterSection() {
  // Footer navigation data
  const footerColumns = [
    {
      title: "Home",
      links: [
        { name: "Features", isNew: false },
        { name: "Blogs", isNew: false },
        { name: "Resources", isNew: true },
        { name: "Testimonials", isNew: false },
        { name: "Contact Us", isNew: false },
        { name: "Newsletter", isNew: false },
      ],
    },
    {
      title: "News",
      links: [
        { name: "Trending Stories", isNew: false },
        { name: "Featured Videos", isNew: false },
        { name: "Technology", isNew: false },
        { name: "Health", isNew: false },
        { name: "Politics", isNew: false },
        { name: "Environment", isNew: false },
      ],
    },
    {
      title: "Blogs",
      links: [
        { name: "Quantum Computing", isNew: false },
        { name: "AI Ethics", isNew: false },
        { name: "Space Exploration", isNew: false },
        { name: "Biotechnology", isNew: true },
        { name: "Renewable Energy", isNew: false },
        { name: "Biohacking", isNew: false },
      ],
    },
    {
      title: "Podcasts",
      links: [
        { name: "AI Revolution", isNew: false },
        { name: "AI Revolution", isNew: true },
        { name: "TechTalk AI", isNew: false },
        { name: "AI Conversations", isNew: false },
      ],
    },
  ];

  // Resources data
  const resources = [
    { name: "Whitepapers", icon: <ArrowUpRight size={18} /> },
    { name: "Ebooks", icon: <ArrowUpRight size={18} /> },
    { name: "Reports", icon: <ArrowUpRight size={18} /> },
    { name: "Research Papers", icon: <ArrowUpRight size={18} /> },
  ];

  return (
    <footer className="flex flex-col items-start px-20 py-0 w-full bg-transparent">
      <div className="flex items-start gap-[50px] py-[60px] border-b border-dark-15 w-full">
        {/* Navigation columns */}
        {footerColumns.map((column, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-7 flex-1 grow"
          >
            <h3 className="self-stretch mt-[-1.00px] font-medium text-lg tracking-[-0.54px] leading-[23.4px] text-absolutewhite">
              {column.title}
            </h3>

            <div className="flex flex-col items-start gap-3 self-stretch w-full">
              {column.links.map((link, linkIndex) => (
                <div
                  key={linkIndex}
                  className={`${link.isNew ? "items-center gap-2 flex" : "self-stretch"} w-full`}
                >
                  <div className="font-normal text-dark-40 text-sm tracking-[-0.42px] leading-[18.2px] whitespace-nowrap">
                    {link.name}
                  </div>

                  {/* {link.isNew && (
                    <Badge className="bg-dark-10 text-absolutewhite border-none rounded">
                      <span className="text-xs tracking-[-0.36px] leading-[18px] mt-[-1.00px]">
                        New
                      </span>
                    </Badge>
                  )} */}
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Resources column */}
        <div className="flex flex-col items-start gap-7 flex-1 grow">
          <h3 className="self-stretch mt-[-1.00px] font-medium text-lg tracking-[-0.54px] leading-[23.4px] text-absolutewhite">
            Resources
          </h3>

          {/* <div className="flex flex-col items-start gap-3 self-stretch w-full">
            {resources.map((resource, index) => (
              <Button
                key={index}
                variant="outline"
                className="items-center gap-1 px-3.5 py-2 bg-dark-08 rounded-md border border-solid border-dark-15 h-auto"
              >
                <span className="font-normal text-grey-60 text-sm tracking-[-0.42px] leading-[21px] whitespace-nowrap mt-[-1.00px]">
                  {resource.name}
                </span>
                {resource.icon}
              </Button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Footer bottom section */}
      <div className="flex items-center justify-between py-6 w-full">
        <div className="flex items-center gap-2">
          <span className="font-normal text-dark-40 text-sm tracking-[-0.42px] leading-[18.2px]">
            Terms &amp; Conditions
          </span>
          {/* <Separator orientation="vertical" className="h-full" /> */}
          <span className="font-normal text-dark-40 text-sm tracking-[-0.42px] leading-[18.2px]">
            Privacy Policy
          </span>
        </div>

        <div className="flex items-center gap-3.5">
          <Facebook size={20} className="text-dark-40" />
          <Twitter size={20} className="text-dark-40" />
          <Instagram size={20} className="text-dark-40" />
        </div>

        <div className="font-normal text-dark-40 text-sm tracking-[-0.42px] leading-[18.2px]">
          © 2024 FutureTech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

import React from "react";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import BarChartIcon from "@mui/icons-material/BarChart";
import OpenWithIcon from "@mui/icons-material/OpenWith";

function Cards() {
  const CardsItems = [
    {
      id: 1,
      icon: <AutoAwesomeIcon fontSize="large" className="text-[#0FF1F6]" />,
      h3: "You’re in Control",
      text: "aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.",
    },
    {
      id: 2,
      icon: <BarChartIcon fontSize="large" className="text-[#0FF1F6]" />,
      h3: "Infinitely Scalable",
      text: "Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.",
    },
    {
      id: 3,
      icon: <OpenWithIcon fontSize="large" className="text-[#0FF1F6]" />,
      h3: "Incredibly Flexible",
      text: "Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 mt-20">
      {CardsItems.map((item) => (
        <div
          key={item.id}
          className=" text-black p-8 rounded-xl shadow-lg text-left transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          <div className="mb-4 transform transition-transform duration-300 hover:-translate-y-1">
            {item.icon}
          </div>
          <h3 className="text-2xl font-semibold mb-2 text-[#FFFFFF]">{item.h3}</h3>
          <p className="text-lg text-[#FFFFFF]">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default Cards;

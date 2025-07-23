import React from "react";
import Button from "@mui/material/Button";
import NorthEastIcon from '@mui/icons-material/NorthEast'; // অ্যারো আইকন


function Hero() {
  const Herotext = [
    {
      h5: "AI SDRs (aiDRs)",
      h1: "More <span>leads</span>, less <span>people</span>.",
      text: "Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.",
      button: "Sign Up for the Beta",
    },
  ];

  return (
    <section
      className="relative w-full min-h-[80vh] items-start mb-10 justify-start px-6 md:px-20 bg-cover bg-center text-white flex flex-col   md:items-start lg:items-start  md:justify-start lg:justify-start  "
      style={{ backgroundImage: "url('/hero.png')" }}
    >
      {/* Overlay with bg color and opacity */}
      <div className="absolute inset-0 bg-[#002228] opacity-60 "></div>

      {/* Content wrapper */}
      <div className="relative  max-w-lg space-y-2 mt-48 text-center md:text-left lg:text-left   ">
        {Herotext.map((item, index) => (
          <div key={index}>
            <h5 className="text-[#0FF1F6] text-xl uppercase tracking-wide md:text-xl">
              {item.h5}
            </h5>

            <h1 className="text-6xl font-bold my-4 leading-tight md:text-6xl lg:text-7xl ">
              More{" "}
              <span className=" text-[#0FF1F6] text-4xl md:text-5xl lg:text-6xl ">leads</span>,<br />
              less{" "}
              <span className="text-[#0FF1F6] text-4xl md:text-5xl lg:text-6xl ">people</span>.
            </h1>

            <p className="text-white text-lg  text-md md:text-lg lg:text-xl">{item.text}</p>

            <button className="mt-6 bg-[#0FF1F6] text-[#002228] px-6 py-3 rounded-full font-semibold hover:bg-[#0cd3d7] transition-all duration-300 inline-flex items-center gap-2">
              {item.button}
              <NorthEastIcon/>
            </button>
          </div>
        ))}
      </div>

      
    </section>
  );
}

export default Hero;

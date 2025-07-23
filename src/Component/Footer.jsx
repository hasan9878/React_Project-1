import React from 'react';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import Button from "@mui/material/Button";


function Footer() {
  const Herotext = [
    {
      h5: "GET STARTED",
      h1: "Embrace the new era of outbound.",
      text: (
        <>
          Wizia lets you train, activate, and optimize aiDRs.
          <br className="hidden md:inline" />
          Take your outbound to new levels of performance and efficiency.
        </>
      ),
      button: "Sign Up for the Beta",
    },
  ];

  return (
    <footer className="w-full py-16 px-4 md:px-0 flex justify-center items-center">
      <div className="text-center max-w-3xl">
        {Herotext.map((item, index) => (
          <div key={index} className="space-y-6">
            <h5 className="text-sm font-semibold text-[#0FF1F6] tracking-widest">{item.h5}</h5>
            <h1 className="text-3xl md:text-5xl font-bold text-white">{item.h1}</h1>
            <p className="text-lg text-white">{item.text}</p>
            <button className="mt-6 bg-[#0FF1F6] text-[#002228] px-6 py-3 rounded-full font-semibold hover:bg-[#0cd3d7] transition-all duration-300 inline-flex items-center gap-2">
              {item.button}
              <NorthEastIcon/>
            </button>
          </div>
        ))}
      </div>
    </footer>
  );
}

export default Footer;

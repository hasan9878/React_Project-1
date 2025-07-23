import React from "react";

const logos = [
  "/BackHub logo.png",
  "/CableLabs logo.png",
  "/EasyEuro logo.png",
  "/DBS logo.png",
  "/AMD logo.png", // Odd number, last logo will center
];

function TrustedPartners() {
  return (
    <section className="py-12 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0FF1F6]">
        Our Trusted Partners
      </h2>

      <div
        className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-2
          justify-items-center
        "
      >
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 object-contain"
          />
        ))}
      </div>
    </section>
  );
}

export default TrustedPartners;

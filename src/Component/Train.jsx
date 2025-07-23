import React from "react";

function Train() {

  return (
    <section className="w-full min-h-[70vh] bg-[#002228] text-white flex flex-col md:flex-row overflow-hidden">
      
      
      <div className="w-full md:w-1/2 h-[300px] md:h-auto relative">
        {/* Background Image */}
        <img
          src="public/hero.png"  
          alt="background visual"
          className="w-full h-full object-cover object-left rotate-90 opacity-50 mix-blend-lighten"
        />
      </div>

      
    </section>
  );
}

export default Train;

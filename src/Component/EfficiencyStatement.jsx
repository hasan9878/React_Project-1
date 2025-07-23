import React from 'react';

function EfficiencyStatement() {
  const Efficiencyitems1 = [
    {
      id: 1,
      h1: "Allocate effort where your reps make an inpact.",
      h2: "Let us handle the rest.",
      text: "Keep your reps “in the air” -- out in the field and on the phone where they can build relationships."
    }
  ];

  return (
    <section className="w-full mx-auto mt-10 p-6 px-20">
      {Efficiencyitems1.map((item) => (
        <div key={item.id} className="w-lg md:w-4xl ">
          <h1 className="text-4xl md:text-6xl font-bold text-white">{item.h1}</h1>
          <h2 className="text-4xl md:text-6xl italic text-[#0FF1F6] mt-5">{item.h2}</h2>
          <p className="text-2xl text-[#FFFFFF] mt-7">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default EfficiencyStatement;

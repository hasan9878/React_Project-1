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

  const Efficiencyitems2 = [
    {
      percent: "32%",
      text: "Improvement in Open Rates"
    },
    {
      percent: "75%",
      text: "Improvement in Ramp Time"
    },
    {
      percent: "35%",
      text: "Improvement in Meetings Booked"
    }
  ];

  return (
    <section className="w-full mx-auto mt-10 p-6 px-4 md:px-20">
      {/* Top text section */}
      {Efficiencyitems1.map((item) => (
        <div key={item.id} className="max-w-5xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white">{item.h1}</h1>
          <h2 className="text-4xl md:text-6xl italic text-[#0FF1F6] mt-5">{item.h2}</h2>
          <p className="text-2xl text-white mt-7">{item.text}</p>
        </div>
      ))}

     <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-3 text-left">
  {Efficiencyitems2.map((item, index) => {
    const [beforeBreak, afterBreak] = item.text.split('in');
    return (
      <div key={index}>
        <h3 className="text-4xl font-bold text-[#0FF1F6]">{item.percent}</h3>
        <p className="text-lg text-white mt-1">
          {beforeBreak.trim()} in
          <br className="hidden md:inline" /> {afterBreak.trim()}
        </p>
      </div>
    );
  })}
</div>


    </section>
  );
}

export default EfficiencyStatement;

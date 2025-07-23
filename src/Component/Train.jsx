import React from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

function Train() {
  const yourTrain = [
    {
      h2: "Train your aiDR on your...",
      h3: "prefered email st|",
      text: "You’re in control. Train your aiDR on elements of your Marketing strategy.",
      option: [
        { id: 1, label: "Quick to ramp" },
        { id: 2, label: "Easy to optimize" },
        { id: 3, label: "Quick to scale up" },
        { id: 4, label: "Works with all your existing tools" },
      ],
    },
  ];

  return (
    <section className="relative w-full h-full min-h-screen bg-[#001F25] overflow-hidden flex items-center justify-center text-white ">
      {/* ✅ Full Background Image Rotated */}
      <img
        src="/hero.png"
        alt="background design"
        className="absolute left-0 bottom-0 w-full h-full object-cover rotate-90 opacity-20 pointer-events-none select-none"
      />

      {/* ✅ Foreground Content */}
      <div className="max-w-3xl text-center p-6 relative z-10">
        {yourTrain.map((item) => (
          <div key={item.h2}>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-2">{item.h2}</h2>
            <h3 className="text-xl sm:text-2xl italic text-cyan-400 mb-4">{item.h3}</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-6">{item.text}</p>

            <div className="grid sm:grid-cols-2 gap-4 text-sm sm:text-base">
              {item.option.map((opt) => (
                <div key={opt.id} className="flex items-center gap-2 text-cyan-300">
                  <CheckCircleIcon className="text-cyan-400" fontSize="small" />
                  <span>{opt.label}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Train;

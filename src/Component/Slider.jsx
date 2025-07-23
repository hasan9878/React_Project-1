// Slider.jsx
import React from 'react';

function Slider() {
  const SlideSection = [
    {
      id: 1,
      image: "public/Group 9.png",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
      h2: "John Doe",
      copyr: "Chief Strategy Officer @ Company"
    },
    {
      id: 2,
      image: "public/Group 9.png",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. lorem10",
      h2: "Hary",
      copyr: "Chief Strategy Officer @ Company"
    },
    {
      id: 3,
      image: "public/Group 9.png",
      text: "Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. lorem20",
      h2: "Mary",
      copyr: "Chief Strategy Officer @ Company"
    }
  ];

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg text-center">
      <img
        src={SlideSection[0].image}
        alt="Slide"
        className="mx-auto w-20 h-20 rounded-full object-cover"
      />
      <p className="mt-4 text-gray-700">{SlideSection[0].text}</p>
      <h2 className="mt-4 text-lg font-bold">{SlideSection[0].h2}</h2>
      <p className="text-sm text-gray-500">{SlideSection[0].copyr}</p>
    </div>
  );
}

export default Slider;

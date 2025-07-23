import React, { useState } from 'react';

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

  const [current, setCurrent] = useState(0);
  const totalSlides = SlideSection.length;

  const nextSlide = () => {
    if (current < totalSlides - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg relative text-center">
      <img
        src={SlideSection[current].image}
        alt="Slide"
        className="mx-auto w-20 h-20 rounded-full object-cover"
      />
      <p className="mt-4 text-gray-700">{SlideSection[current].text}</p>
      <h2 className="mt-4 text-lg font-bold">{SlideSection[current].h2}</h2>
      <p className="text-sm text-gray-500">{SlideSection[current].copyr}</p>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        disabled={current === 0}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full ${
          current === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        disabled={current === totalSlides - 1}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full ${
          current === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;

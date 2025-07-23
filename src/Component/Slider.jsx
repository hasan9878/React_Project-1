import React, { useState } from 'react';

function Slider() {
  const SlideSection = [
    {
      id: 1,
      image: "/Group 9.png",
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
    <div className="w-auto mx-auto mt-10 p-6 rounded-lg shadow-lg  relative">
      {/* Slide Content */}
      <div className="text-center">
        <img
          src={SlideSection[current].image}
          alt="Slide"
          className="mx-auto w-auto h-auto rounded-full object-cover"
        />
        <p className="mt-4 text-[white] px-20 md:text-3xl md:px-48 lg:px-52 ">{SlideSection[current].text}</p>
        <h2 className="mt-7 text-2xl font-bold text-[#0FF1F6]">{SlideSection[current].h2}</h2>
        <p className="text-md text-gray-500">{SlideSection[current].copyr}</p>
      </div>

      {/* Arrows */}
      <button
        onClick={prevSlide}
        disabled={current === 0}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full p-2 ml-5 md:ml-10 lg:ml-12 ${
          current === 0 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        disabled={current === totalSlides - 1}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-2 rounded-full mr-5 md:mr-10 lg:mr-12 ${
          current === totalSlides - 1 ? 'opacity-50 cursor-not-allowed' : ''
        }`}
      >
        ▶
      </button>

      {/* Dots */}
      <div className="flex justify-center mt-6 space-x-2">
        {SlideSection.map((_, index) => (
          <span
            key={index}
            className={`h-3 w-3 rounded-full ${
              current === index ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;

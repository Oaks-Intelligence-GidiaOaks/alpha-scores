import React, { useRef, useState } from "react";
import { EventCard, ServiceCard } from "../components";

const Events = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ref = useRef();

  const slides = [0, 1, 2, 3];

  return (
    <div className="py-24 bg-primary">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-secondary  font-roboto">
          LATEST FROM OUR EVENTS & TRAINING
        </h3>

        <h2 className="text-4xl font-pt font-bold text-white">
          Events & Training
        </h2>
      </div>

      <div
        ref={ref}
        id="carousel"
        className="container flex mt-16 gap-5 items-start overflow-x-hidden scrollbar-hide"
      >
        <div ref={ref}>
          <EventCard />
        </div>
        <EventCard />
        <EventCard />
        <EventCard />
      </div>

      <div className="flex mt-5 top-4 justify-center py-2 gap-2">
        {slides.map((item, i) => (
          <div
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`bg-white w-5 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? "w-8" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Events;

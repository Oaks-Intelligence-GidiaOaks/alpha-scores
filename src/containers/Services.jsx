import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components";

const Services = () => {
  const slides = [1, 2, 3, 4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);

  useEffect(() => {
    const carousel = document.querySelector("#carousel");

    let isDragging = false,
      startX,
      startScrollLeft;

    const dragStart = (e) => {
      isDragging = true;
      carousel.classList.add("dragging");
      startX = e.pageX;
      startScrollLeft = carousel.scrollLeft;
    };

    const dragStop = () => {
      isDragging = false;
      carousel.classList.remove("dragging");
    };

    const dragging = (e) => {
      if (!isDragging) return;
      carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    // add an event listener
    carousel.addEventListener("mousedown", dragStart);
    carousel.addEventListener("mouseup", dragStop);
    carousel.addEventListener("mousemove", dragging);

    return () => {
      carousel.removeEventListener("mousemove", dragging);
      carousel.removeEventListener("mousedown", dragStart);
    };
  }, []);

  return (
    <div className="py-24 bg-primary">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-secondary  font-roboto">OUR SERVICES</h3>

        <h2 className="text-4xl font-pt font-bold text-white">All Services</h2>
      </div>

      <div
        ref={ref}
        id="carousel"
        className="container flex mt-16 gap-5 items-start overflow-x-hidden scrollbar-hide"
      >
        <div ref={ref}>
          <ServiceCard />
        </div>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
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

export default Services;

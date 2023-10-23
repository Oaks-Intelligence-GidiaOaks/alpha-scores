import Slider from "react-slick";

import React, { useEffect, useRef, useState } from "react";
import { ServiceCard } from "../components";

const Services = () => {
  const slides = [1, 2, 3, 4];

  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    // accessibility: true,
    adaptiveHeight: true,
    arrows: false,
    draggable: true,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // useEffect(() => {
  //   const carousel = document.querySelector("#carousel");
  //   const firstCardWidth = carousel.querySelector(".card").offsetWidth;
  //   const carouselChildren = [...carousel.children];

  //   let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

  //   // insert the copies of the last few cards to beginning of carousel for infinite scrolling
  //   carouselChildren
  //     .slice(-cardPerView)
  //     .reverse()
  //     .map((card) => {
  //       carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  //     });

  //   // insert the copies of the first few cards to end of carousel for infinite scrolling
  //   carouselChildren.slice(0, cardPerView).map((card) => {
  //     carousel.insertAdjacentHTML("beforeend", card.outerHTML);
  //   });

  //   let isDragging = false,
  //     startX,
  //     startScrollLeft,
  //     timeoutId;

  //   const dragStart = (e) => {
  //     isDragging = true;
  //     carousel.classList.add("dragging");
  //     startX = e.pageX;
  //     startScrollLeft = carousel.scrollLeft;
  //   };

  //   const dragStop = () => {
  //     isDragging = false;
  //     carousel.classList.remove("dragging");
  //   };

  //   const dragging = (e) => {
  //     if (!isDragging) return;
  //     carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
  //   };

  //   const autoPlay = () => {
  //     if (window.innerWidth < 800) return;

  //     // AutoPlay the carousel after every 2500 ms
  //     timeoutId = setTimeout(
  //       () => (carousel.scrolLeft += firstCardWidth),
  //       2500
  //     );
  //   };

  //   autoPlay();

  //   const inifniteScroll = () => {
  //     if (carousel.scrollLeft == 0) {
  //       carousel.classList.add("no-transition");
  //       carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
  //       carousel.classList.remove("no-transition");
  //     } else if (
  //       Math.ceil(carousel.scrollLeft) ==
  //       carousel.scrollWidth - carousel.offsetWidth
  //     ) {
  //       carousel.classList.add("no-transition");
  //       carousel.scrollLeft = carousel.offsetWidth;
  //       carousel.classList.remove("no-transition");
  //     }
  //   };

  //   // add an event listener
  //   carousel.addEventListener("mousedown", dragStart);
  //   document.addEventListener("mouseup", dragStop);
  //   carousel.addEventListener("mousemove", dragging);
  //   carousel.addEventListener("scroll", inifniteScroll);

  //   //

  //   return () => {
  //     carousel.removeEventListener("mousemove", dragging);
  //     carousel.removeEventListener("mousedown", dragStart);
  //   };
  // }, []);

  return (
    <div className="py-24 bg-primary">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-secondary  font-roboto">OUR SERVICES</h3>

        <h2 className="text-4xl font-pt font-bold text-white">All Services</h2>
      </div>

      {/* <div
        ref={ref}
        // id="carousel"
        className="container flex mt-16 gap-5 items-start scrollbar-hide"
      > */}
      <div className="container mt-16 gap-5">
        <Slider {...settings}>
          <ServiceCard header="Finacial Services" img="./images/04.jpg" />
          <ServiceCard header="Specialized Training" img="./images/06.jpg" />
          <ServiceCard header="Consultancy" img="./images/03.jpg" />
          <ServiceCard header="Business Analysis" img="./images/04.jpg" />
        </Slider>
      </div>
      {/* </div> */}

      {/* <div className="flex mt-5 top-4 justify-center py-2 gap-2">
        {slides.map((item, i) => (
          <div
            key={i}
            onClick={() => scrollToSlide(i)}
            className={`bg-white w-5 h-3 rounded-full cursor-pointer ${
              i === currentIndex ? "w-8" : ""
            }`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default Services;

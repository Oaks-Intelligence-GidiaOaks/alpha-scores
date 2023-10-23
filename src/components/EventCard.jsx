import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdDateRange } from "react-icons/md";

const EventCard = () => {
  const style = {
    background:
      " linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.7)), url(./images/06.jpg)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
  };

  return (
    <div
      style={style}
      className="text-white shrink-0 text-sm font-roboto h-[400px] w-80 py-4 px-4 flex flex-col gap-4"
    >
      <div className="mt-auto flex items-center gap-3 ">
        <MdDateRange />
        <span>25 Dec, 2023</span>
      </div>

      <p className="uppercase font-bold text-lg font-pt">
        Climatic Change Training for Beginners
      </p>

      <button className="flex items-center gap-3 border-secondary border w-fit p-3 px-5 rounded ">
        <span>Register</span>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default EventCard;

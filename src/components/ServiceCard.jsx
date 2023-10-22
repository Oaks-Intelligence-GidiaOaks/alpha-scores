import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ServiceCard = () => {
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
      <h3 className="mt-auto text-2xl font-semibold font-pt">
        Financial Advices
      </h3>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum
        voluptate mollitia magni quas ipsa explicabo nemo. Quidem asperiores
        temporibus obcaecati!
      </p>

      <button className="flex items-center gap-3 border-secondary border w-fit p-3 px-5 rounded ">
        <span>Details</span>
        <AiOutlineArrowRight />
      </button>
    </div>
  );
};

export default ServiceCard;

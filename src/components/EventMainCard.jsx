import React from "react";
import { Link } from "react-router-dom";

const EventMainCard = ({ image, date, lead, text }) => {
  return (
    <div className="space-y-4">
      <div className="">
        <img src="./images/e1.jpg" className="" alt="" />
      </div>

      {/*  */}
      <div className="flex items-center  text-grey gap-4">
        <span> ATTENDEES - 80 </span>
        <span> 25 DEC, 2020 </span>
      </div>

      <h3 className="text-3xl font-pt font-bold">
        Cloud based Training on Architecture and Training
      </h3>

      <p className="text-grey">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos obcaecati
        soluta aut cum unde totam accusantium debitis! Nihil, tempore molestias!
      </p>

      <Link to={"/register"}>
        <button className="py-4 font-[500]  rounded  border-secondary">
          REGISTER...
        </button>
      </Link>
    </div>
  );
};

export default EventMainCard;

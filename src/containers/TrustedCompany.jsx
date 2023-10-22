import React from "react";

import { GiTeacher } from "react-icons/gi";
import { MdOutlineReadMore } from "react-icons/md";

const TrustedCompany = () => {
  return (
    <div className="py-16">
      <div className="container flex flex-col md:flex-row gap-10">
        {/* first */}
        <div className="flex-1 space-y-8">
          <h5 className="text-secondary">Welcome To Alpha-Scores</h5>

          <h2
            className={` text-[#0a272c] text-3xl md:text-5xl font-bold font-pt`}
          >
            We are trusted consulting company.
          </h2>

          <p className="text-grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting’s
            the industrey's standard dummy text ever since the 1500 when printed
            galley of type and scrambled type specimen book.
          </p>

          <div className="flex gap-2 items-center font-pt">
            {/* <GiTeacher /> */}
            <span className="text-2xl font-bold">
              Perfect solution of training and consultancy.
            </span>
          </div>

          <button className=" flex w-fit px-6 py-3 text-white rounded items-center gap-2 text-sm bg-secondary">
            <span>Our Services</span>
            <MdOutlineReadMore />
          </button>
        </div>

        {/* second */}
        <div className="flex-1">
          <img src="images/a2.png" className="w-full" alt="" />
        </div>
      </div>
    </div>
  );
};

export default TrustedCompany;

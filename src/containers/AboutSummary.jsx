import React from "react";
import { MdOutlineReadMore } from "react-icons/md";

const AboutSummary = () => {
  return (
    <div className="py-24">
      <div className="container flex flex-col md:flex-row gap-16">
        {/* first */}
        <div className="flex-1 ">
          <img src="images/02.jpg" className="w-full rounded-lg" alt="" />
        </div>

        {/* second */}
        <div className="flex flex-1 flex-col gap-8 text-base lg:text-xl">
          <h5 className="text-secondary text-lg">
            Welcome To Alpha-Scores Training
          </h5>

          <h2 className="font-pt text-3xl lg:text-5xl font-semibold">
            We are trusted consulting company, with{" "}
            <span className="text-secondary">28+ years</span> of experience.
          </h2>

          <p className="text-grey">
            Lorem Ipsum is simply dummy text of the printing and typesetting’s
            the industrey's standard dummy text ever since the 1500 when printed
            galley of type and scrambled type specimen book. One way to
            categorize the activities is in terms of the professional’s area of
            expertise such as competitive analysis, corporate strategy.
          </p>

          <button className="mt-8 flex w-fit px-6 py-3 text-white rounded items-center gap-2 text-sm bg-secondary">
            <span>Explore more</span>
            <MdOutlineReadMore />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutSummary;

import React from "react";

const WhatWeDo = () => {
  const ServiceCard = ({ lead, text, Icon }) => (
    <div className="rounded-md relative drop-shadow-lg group flex items-center gap-6 p-8 bg-white">
      <div className="h-[120px] rounded-full shrink-0 w-[120px] bg-gray-300 grid place-items-center">
        {/* icon */}
      </div>

      <div className="space-y-8">
        <h3 className="text-2xl font-pt font-bold">Financial Advices</h3>

        <p>
          Lorem Ipsum is simply dummy text of the the industreys standard dummy
          text ever scrambled type specimen book.
        </p>

        <button className="border  border-secondary flex w-fit px-6 py-3 group-hover:text-white rounded items-center gap-2 text-sm group-hover:bg-secondary">
          <span>DETAILS</span>
        </button>
      </div>

      <img src="./images/s1.png" className="absolute top-0 left-0" alt="" />
      <img src="./images/s1.png" className="absolute bottom-0 right-0" alt="" />
    </div>
  );

  return (
    <div className="py-24">
      <div className="text-center space-y-4">
        <h5 className="text-secondary">OUR SERVICES</h5>

        <h2 className="font-pt text-3xl md:text-5xl">What We Do?</h2>
      </div>

      <div className="container  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-16 gap-x-6 gap-y-8">
        <ServiceCard Icon={``} lead="" text="" />
        <ServiceCard Icon={``} lead="" text="" />
        <ServiceCard Icon={``} lead="" text="" />
        <ServiceCard Icon={``} lead="" text="" />
      </div>
    </div>
  );
};

export default WhatWeDo;

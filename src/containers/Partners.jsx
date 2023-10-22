import React from "react";
import alphaLogo from "../assets/alphaa.svg";

const Partners = () => {
  const PartnerCard = ({}) => (
    <div className="p-6 border min-w-72">
      <img src={alphaLogo} className="w-full " alt="" />
    </div>
  );

  return (
    <div className="py-24 container">
      <div className="flex flex-col gap-5 text-center">
        <h3 className="text-secondary  font-roboto">HONOTRABLE CUSTOMER</h3>

        <h2 className="text-4xl font-pt font-bold">We Work With Top Brands</h2>
      </div>

      <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-x-0  lg:grid-cols-4 place-items-center gap-0">
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
        <PartnerCard />
      </div>
    </div>
  );
};

export default Partners;

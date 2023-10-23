import React from "react";
import { CustomBanner, EventCard, EventMainCard } from "../components";

const Events = () => {
  return (
    <div className="">
      {/* banner */}
      <CustomBanner image="" lead="Events & Training" nav2="Events" />

      {/*Event cards  */}
      <div className="container px-6 py-24 space-y-6">
        <div className=" md:w-4/6 mx-auto space-y-8">
          <EventMainCard
            date="Nov, 2023"
            image=""
            lead="3-days Pre-COP28 Training for Nigerian Parliamentarians and  Executives on Regulatory policies for Addressing Climate and Environmental Risks"
            partners="PARTNERS: Escrow-Tech Limited, Oaks Intelligence Limited, NICCRA"
            text=""
            venue="Dubai, UAE"
          />
          <EventMainCard
            date="Dec, 2023"
            image=""
            lead="National Delegate, COP28"
            text=""
            venue="Expo City, Dubai, UAE"
          />
          <EventMainCard
            date="Dec, 2023"
            image=""
            lead="3-days Pre-COP28 Training for Nigerian Parliamentarians and  Executives on Regulatory policies for Addressing Climate and Environmental Risks"
            text=""
            venue="Blue Zone, Expo City, Dubai, "
          />
          <EventMainCard
            date="April, 2024"
            image=""
            lead="International Conference on Energy Transitions"
            text=""
            venue="Nigeria."
          />
        </div>
      </div>
    </div>
  );
};

export default Events;

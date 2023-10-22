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
          <EventMainCard />
          <EventMainCard />
          <EventMainCard />
        </div>
      </div>
    </div>
  );
};

export default Events;

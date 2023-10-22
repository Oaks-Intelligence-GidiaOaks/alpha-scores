import React from "react";
import { CustomBanner } from "../components";
import { Subscribe, WhatWeDo } from "../containers";

const Services = () => {
  return (
    <div>
      {/* banner */}
      <CustomBanner image="" lead="Services" nav1="Home" nav2="Services" />

      {/* what we do */}
      <WhatWeDo />

      {/* Subscribe for newsltter */}
      <Subscribe />
    </div>
  );
};

export default Services;

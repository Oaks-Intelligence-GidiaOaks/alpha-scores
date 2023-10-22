import React from "react";
import { CustomBanner } from "../components";
import {
  MissionVision,
  OurSkills,
  Testimnoials,
  TrustedCompany,
} from "../containers";

const About = () => {
  return (
    <div>
      {/* banner */}
      <CustomBanner image="" lead="About us" nav2="About" />

      {/* misson and vision */}
      <MissionVision />

      {/* trusted company */}
      <TrustedCompany />

      {/* our skills */}
      <OurSkills />

      {/* testimnial */}
      <Testimnoials />
    </div>
  );
};

export default About;

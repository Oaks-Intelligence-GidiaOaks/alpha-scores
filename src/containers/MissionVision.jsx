import React from "react";

const MissionVision = () => {
  const MissionCard = ({ lead, text, text2, bgColor }) => (
    <div className={`${bgColor} rounded-lg relative text-white`}>
      <div className={` w-5/6 flex flex-col mx-auto gap-6  px-5 py-12`}>
        <h2 className="text-secondary text-3xl  font-pt font-bold ">
          Our Mission
        </h2>

        <p className="text-gray-400">
          Lorem Ipsum is simply dummy text of the printing and typesetting has
          been the industry's standard dummy text ever since the 1500 when
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. It has survived not only five centuries, but also the
          leap into electronic typesetting.
        </p>

        <p className={``}>
          Lorem Ipsum is simply dummy text of the printing has been the industry
          standard dummy text ever since unknown printer took galley.
        </p>
      </div>

      <img src="./images/a3.png" className={`absolute top-0 right-0`} alt="" />
    </div>
  );

  return (
    <div className="container flex flex-col justify-center md:flex-row gap-8 py-24">
      <MissionCard bgColor="bg-primary" lead="" text="" text2="" />
      <MissionCard bgColor="bg-gray-200" lead="" text="" text2="" />
    </div>
  );
};

export default MissionVision;

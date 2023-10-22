import React from "react";
import logo from "../assets/alphaa.svg";
import { BiLogoFacebook } from "react-icons/bi";
import { GrMail, GrTwitter } from "react-icons/gr";
import { AiFillInstagram } from "react-icons/ai";
import { BsSendFill } from "react-icons/bs";

const Footer = () => {
  const IconItem = ({ Icon }) => (
    <div className="grid place-items-center p-1 rounded-full w-10 h-10 bg-color1 text-white">
      <Icon />
    </div>
  );

  return (
    <div className="bg-dark py-24 text-sm font-pt">
      <div className="container  flex flex-col md:flex-row items-start gap-8 text-white">
        {/* first */}
        <div className="flex flex-col gap-6 flex-1">
          <img src={logo} alt="" className="w-24" />

          <span>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad
            corporis iste beatae, obcaecati numquam temporibus soluta
            dignissimos. Unde, rem asperiores?
          </span>

          <div className="flex gap-5">
            <IconItem Icon={BiLogoFacebook} />
            <IconItem Icon={AiFillInstagram} />
            <IconItem Icon={GrMail} />
            <IconItem Icon={GrTwitter} />
          </div>
        </div>

        {/* second */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg">Company</h4>

          <ul className="flex flex-col gap-2">
            <li>About company </li>
            <li>Our services </li>
            <li>Contact us</li>
            <li>Events </li>
            <li> company </li>
          </ul>
        </div>

        {/* third */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg">Recent Event</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            ullam?
          </p>

          <ul className="flex flex-col gap-2">
            <li>About company </li>
            <li>Our services </li>
            <li>Contact us</li>
            <li>Events </li>
            <li> company </li>
          </ul>
        </div>

        {/* fourth */}
        <div className="flex flex-col gap-6 flex-1">
          <h4 className="font-bold text-lg">Newsletter</h4>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae,
            ullam?
          </p>

          <div className="flex gap-3 p-1 items-center rounded px-3 bg-[#28343e]">
            <input
              type="text"
              className="outline-none  py-2 bg-transparent flex-1"
            />

            <div className="p-1 grid place-items-center bg-secondary rounded">
              <BsSendFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

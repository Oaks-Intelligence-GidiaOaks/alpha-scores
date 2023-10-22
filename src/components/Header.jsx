import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/alphaa.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [sideNavShown, setSideNavShown] = useState(false);

  const HeaderItem = ({ text, route }) => (
    <NavLink to={route}>
      <span>{text}</span>
    </NavLink>
  );

  const toggleSideNav = () => {
    setSideNavShown(!sideNavShown);
  };

  return (
    <div className="bg-color1 text-white font-[500]">
      <div className="flex items-center container p-2 py-3 font-roboto text-sm">
        <div
          onClick={toggleSideNav}
          className="p-2 cursor-pointer bg-secondary text-white text-xl grid place-items-center  w-10 h-10 md:hidden"
        >
          <AiOutlineMenu />
        </div>

        <img src={logo} alt="" className="w-32 mx-auto md:mx-0 " />

        <div className="md:flex items-center gap-5 mx-auto hidden">
          <HeaderItem route="/" text="Home" />
          <HeaderItem route="/about" text="About us" />
          <HeaderItem route="/services" text="Services" />
          <HeaderItem route="/events" text="Events & Training" />
        </div>

        <button className="ml-auto p-2 px-3 text-center  bg-secondary rounded-md text-white hidden md:block">
          Contact us
        </button>

        {/* sidebar */}
        <div
          className={`bg-primary h-screen fixed  top-0 left-0 w-3/5 p-5 px-6 md:hidden ${
            sideNavShown ? "block" : "hidden"
          }`}
        >
          <div
            onClick={toggleSideNav}
            className="p-2  cursor-pointer ml-auto border text-white text-xl grid place-items-center  w-10 h-10 "
          >
            <AiOutlineClose />
          </div>

          <div className="flex flex-col h-2/3 mt-8 gap-8 ">
            <HeaderItem route="/" text="Home" />
            <HeaderItem route="/about" text="About us" />
            <HeaderItem route="/services" text="Services" />
            <HeaderItem route="/events" text="Events & Training" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = () => {
  return (
    <div id="layout" className="font-roboto z-30">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;

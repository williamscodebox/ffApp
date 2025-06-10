import React from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./Overview";

const Menu = () => {
  return (
    <div className="flex flex-row justify-between mt-10">
      {/* <div>Current Standings</div> */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <div className="w-[100%] lg:w-[90%]">
        <Overview />
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./Overview";

const Menu = () => {
  return (
    <div className="flex flex-row justify-between mt-10">
      {/* <div>Current Standings</div> */}
      <div>
        <Sidebar />
      </div>
      <div className="w-[90%]">
        <Overview />
      </div>
    </div>
  );
};

export default Menu;

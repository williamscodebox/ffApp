import React, { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./Overview";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
      {/* <div>Current Standings</div> */}
      <div>
        <Sidebar />
      </div>
      <div className="w-[90%]">
        {/* <Overview /> */}
        <div className="flex justify-center text-2xl text-white bg-gray-700 h-[200vh] pt-10">
          Welcome
        </div>
      </div>
    </div>
  );
};

export default Menu;

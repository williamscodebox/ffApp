import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Overview from "./Overview";

const Menu = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
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

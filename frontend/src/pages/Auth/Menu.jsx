import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";
import ScoreBoard from "@/components/ScoreBoard";
import DemoPage from "../User/TableScoreBoard/page";
import Tester from "@/components/Tester";

const Menu = () => {
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
      <div>
        <Sidebar />
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col items-center text-2xl text-white bg-gray-700 h-screen pt-10">
          {/* <div>
            <p>ScoreBoard</p>
          </div> */}
          <div>
            <p>Welcome to the Rankings</p>
          </div>
          {/* <ScoreBoard /> */}
          <div className="w-[70%] flex justify-center">
            <DemoPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

import React from "react";
import { useEffect } from "react";
import Overview from "../../Auth/Overview";
import AdminSidebar from "@/components/AdminSidebar";
import DemoPage from "../TableScoreBoard/page";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
      <div>
        <AdminSidebar />
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col items-center text-2xl text-white bg-gray-700 h-screen pt-10">
          {/* <div>
            <p>ScoreBoard</p>
          </div> */}
          <div>
            <p className="flex justify-center">Admin</p>
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

export default Admin;

import React from "react";
import { useEffect } from "react";
import Overview from "../../Auth/Overview";
import AdminSidebar from "@/components/AdminSidebar";

const Admin = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-row justify-between mt-10">
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>
      <div className="w-[100%] lg:w-[90%]">
        <h1 className="flex justify-center text-2xl font-semibold mt-4">
          Admin
        </h1>
        {/* <Overview /> */}
      </div>
    </div>
  );
};

export default Admin;

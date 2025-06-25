import { useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import AdminOverview from "./AdminOverview";

const AdminWeek = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
      <div className="hidden lg:flex">
        <AdminSidebar />
      </div>
      <div className="w-[100%] lg:w-[90%]">
        <AdminOverview />
      </div>
    </div>
  );
};

export default AdminWeek;

import { useValues } from "../../../providers/ValueContext";
import AdminWeeklies from "./AdminWeeklies";

const AdminOverview = () => {
  const { values } = useValues();

  return (
    <div className="mb-5 picks-bg">
      <div className="pt-5 pb-4">
        <div className="border-2 pt-5 mr-20 ml-20 pb-5 bg-gray-700 rounded-2xl text-white font-normal opacity-90">
          <p className="text-3xl ml-30 inline-block bg-amber-400">
            ----- Admin Page -----
          </p>
          <p className="text-3xl ml-20">
            Games for the week of {values[0] + " " + values[6]}
          </p>
          <AdminWeeklies />
        </div>
      </div>
    </div>
  );
};

export default AdminOverview;

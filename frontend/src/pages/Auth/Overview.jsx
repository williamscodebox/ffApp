import Weeklies from "./Weeklies";
import { week } from "../../../data/data";
import { useValues } from "../../providers/ValueContext";

const Overview = () => {
  const { values } = useValues();

  return (
    <div className="mb-5 picks-bg">
      <div className="pt-5 pb-4">
        <div className="border-2 pt-5 mr-20 ml-20 pb-5 bg-gray-700 rounded-2xl text-white font-normal opacity-90">
          <p className="text-3xl ml-20">
            Games for the week of {values[0] + " " + values[6]}
          </p>

          <Weeklies />
        </div>
      </div>
    </div>
  );
};

export default Overview;

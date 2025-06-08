import Weeklies from "./Weeklies";
import { week } from "../../../data/data";

const Overview = () => {
  return (
    <div className="mt-20">
      <p className="text-3xl ml-20">
        Games for the week of {week[0][0] + " " + week[0][1]} -{" "}
        {week[0][0] + " " + week[0][7]}
      </p>
      <Weeklies />
    </div>
  );
};

export default Overview;

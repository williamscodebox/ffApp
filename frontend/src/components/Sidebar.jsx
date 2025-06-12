import { Link } from "react-router-dom";
import { useValues } from "../providers/ValueContext";
import { makeWeek } from "../../data/data";

function Sidebar() {
  const { updateValues } = useValues();

  const handleClick = (w, m) => {
    // w is for week and m is for month
    const update = makeWeek(w, m);
    console.log(update);
    updateValues(update);
  };

  return (
    <div className="bg-gray-900 text-white w-[10rem] h-full p-4 pt-10 fixed">
      <h1 className="text-xl">Dashboard</h1>
      <ul className="mt-6 space-y-4">
        <li>
          <Link
            to="/Menu"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            // onClick={handleTwo}
          >
            <span className="hidden sm:block">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Week"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => handleClick(0, 0)}
          >
            <span className="hidden sm:block">Week 1</span>
          </Link>
        </li>
        <li>
          <Link
            to="/Week"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => handleClick(1, 0)}
          >
            <span className="hidden sm:block">Week 2</span>
          </Link>
        </li>{" "}
        <li>
          <Link
            to="/Week"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => handleClick(2, 0)}
          >
            <span className="hidden sm:block">Week 3</span>
          </Link>
        </li>{" "}
        <li>
          <Link
            to="/Week"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            onClick={() => handleClick(3, 0)}
          >
            <span className="hidden sm:block">Week 4</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

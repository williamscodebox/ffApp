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

  const pattern = [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
    [4, 1],
    [5, 1],
    [6, 1],
    [7, 1],
    [8, 1],
    [9, 2],
    [10, 2],
    [11, 2],
    [12, 2],
  ];

  return (
    <div className="bg-gray-900 text-white w-[10rem] h-full p-4 pt-10 ">
      {/*add fixed above to the div css and then add scroll bar to sidebar*/}
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

        {pattern.map((item) => {
          return (
            <li>
              <Link
                to="/Week"
                className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
                onClick={() => handleClick(item[0], item[1])}
              >
                <span className="hidden sm:block">Week {item[0] + 1}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Sidebar;

import { Link } from "react-router-dom";
import { useValues } from "../providers/ValueContext";

function Sidebar() {
  const { updateValues } = useValues();

  const handleTwo = () => {
    updateValues([
      "Sept 11",
      "Sept 12",
      "Sept 13",
      "Sept 14",
      "Sept 15",
      "Sept 16",
      "Sept 17",
    ]);
  };

  return (
    <div className="bg-gray-900 text-white w-[10rem] h-full p-4 pt-10 fixed">
      <h1 className="text-xl">Dashboard</h1>
      <ul className="mt-6 space-y-4">
        <li>
          {" "}
          <Link
            to="/Week"
            className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
            onClick={handleTwo}
          >
            <span className="hidden sm:block">Home</span>
          </Link>
          {/* <a href="/menu" className="hover:text-gray-200">
            Home
          </a> */}
        </li>
        <li>
          <a href="/Week" className="hover:text-gray-200">
            Settings
          </a>
        </li>
        <li>
          <a href="" className="hover:text-gray-200" onClick={handleTwo}>
            Week 2
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const WelcomeCard = () => {
  return (
    <div className="mt-30 mr-32 w-50 h-40 bg-gray-800 border-1 border-gray-300 rounded-2xl z-40 p-6 shadow-2xl text-xl text-white font-normal opacity-90">
      WelcomeCard
      <div className="flex items-center">
        <Link
          to="/menu"
          className="flex items-center text-white transition-all duration-300 hover:translate-x-2"
        >
          <AiOutlineHome className="mr-2" size={26} />
          <span className="hidden sm:block">Menu</span>
        </Link>
      </div>
    </div>
  );
};

export default WelcomeCard;

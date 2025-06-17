import { useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import { useSelector } from "react-redux";

const Menu = () => {
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-row justify-between mt-10">
      <div>
        <Sidebar />
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col items-center text-2xl text-white bg-gray-700 h-[200vh] pt-10">
          <div>
            <p>Welcome {userInfo.username}</p>
          </div>
          <div>
            <p>Here are your stats</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;

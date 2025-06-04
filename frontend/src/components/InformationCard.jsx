import React from "react";

const InformationCard = () => {
  return (
    <div className="relative top-[5rem] left-[8rem] w-[80%] h-[25rem] bg-gray-800 p-6 pl-30 border-1 border-gray-300 rounded-2xl z-40 shadow-2xl text-xl text-white font-normal opacity-90">
      <h1 className="text-2xl font-bold">
        Welcome to the 2025 NFL Regular season Football Pool
      </h1>
      <p className="text-xl text-white font-normal">
        Brought to you by CodeSrev Entertainment
      </p>
      <p className="mt-6 text-2xl font-bold">What to expect:</p>
      <p className="mt-2">18 Weeks, 32 Teams</p>
      <p>Picks to be Completed every week by Tuesday Evening</p>
      <p>Each game pick only the team you choose will win</p>
      <p>
        The final game of each week pick your team as well as include scores
      </p>
      <p>50% of proceeds to be donated to local foodbank</p>
      <p>Winner will receive the other 50% as the prize pot</p>
      <p>Good luck to all</p>
      <p>Have fun and enjoy the football season</p>
    </div>
  );
};

export default InformationCard;

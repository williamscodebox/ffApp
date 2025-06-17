import { useEffect, useState } from "react";

const GameCard = ({ teamA, teamB, date, setSelections, selections }) => {
  const gameKey = `${date}-${teamA}-${teamB}`;
  const [selectedTeam, setSelectedTeam] = useState(selections?.[gameKey] || "");
  //console.log("GameCard rendered with selections:", selections[gameKey] || "");
  //console.log("GameCard date:", gameKey);

  useEffect(() => {
    setSelectedTeam(selections?.[gameKey] || "");
  }, [selections, date]);

  const handleSelection = (team) => {
    const gameKey = `${date}-${teamA}-${teamB}`;
    setSelectedTeam(team);
    setSelections((prev) => ({ ...prev, [gameKey]: team }));
  };

  return (
    <div className="flex flex-row gap-2 text-2xl items-center justify-between w-[80%] ml-20">
      <div className="w-[35%]">
        <p>{date}</p>
      </div>
      <div className="flex flex-row items-center w-[40%]">
        <div className="flex justify-end w-[58%]">
          <button
            onClick={() => handleSelection(teamA)}
            className={`border-1 p-2 pt-1 pb-1.5 text-xl w-35 rounded-2xl ${
              selectedTeam === teamA ? "bg-green-600" : "bg-gray-800"
            } text-white hover:cursor-pointer`}
          >
            {teamA}
          </button>
        </div>
        <div className="flex items-center justify-center w-[42%]">
          <p>vs</p>
        </div>
        <div className="w-[58%]">
          <button
            onClick={() => handleSelection(teamB)}
            className={`border-1 p-2 pt-1 pb-1.5 text-xl w-35 rounded-2xl ${
              selectedTeam === teamB ? "bg-green-600" : "bg-gray-800"
            } text-white hover:cursor-pointer`}
          >
            {teamB}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameCard;

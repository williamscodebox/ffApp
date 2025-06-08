import { teams, day, week } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";

const Weeklies = () => {
  return (
    <div className="flex flex-col mt-8 gap-5">
      <GameCard
        teamA={teams[16]}
        teamB={teams[18]}
        date={day[0] + " " + week[0][0] + " " + week[0][1]}
      />{" "}
      <GameCard
        teamA={teams[13]}
        teamB={teams[15]}
        date={day[1] + " " + week[0][0] + " " + week[0][2]}
      />{" "}
      <GameCard
        teamA={teams[27]}
        teamB={teams[24]}
        date={day[3] + " " + week[0][0] + " " + week[0][4]}
      />
    </div>
  );
};

export default Weeklies;

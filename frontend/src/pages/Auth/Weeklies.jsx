import { teams, day, week } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";

const Weeklies = () => {
  return (
    <div>
      Weeklies <p>{teams[1]}</p>
      <GameCard
        teamA={teams[16]}
        teamB={teams[18]}
        date={day[0] + " " + week[0][0] + " " + week[0][1]}
      />
    </div>
  );
};

export default Weeklies;

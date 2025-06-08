import { teams, day, week } from "../../../data/data.js";

const GameMaker = () => {
  const game = {
    date: week[(0)[0]] + week[(0)[1]],
    dayOf: day[0],
    TeamsPlaying: [teams[16], teams[18]],
    time: "8:20pm",
  };

  const gameMaker = (week, day, teamA, teamB, time) => {
    date = week - 1;
  };
  return <div>GameMaker</div>;
};

export default GameMaker;

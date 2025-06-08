import { teams, day, week, schedule } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";

const Weeklies = () => {
  const value = [
    "Sept 4",
    "Sept 5",
    "Sept 6",
    "Sept 7",
    "Sept 8",
    "Sept 9",
    "Sept 10",
  ];
  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col gap-6">
        {schedule.map((item) => {
          // console.log(JSON.stringify(item.date));
          console.log(JSON.stringify(item.date) === JSON.stringify(value));
          if (
            value.some(
              (choice) => JSON.stringify(choice) === JSON.stringify(item.date)
            )
          ) {
            console.log("fuck you");
            return (
              <GameCard
                key={item.date + item.TeamsPlaying[0] + item.TeamsPlaying[1]}
                teamA={item.TeamsPlaying[0]}
                teamB={item.TeamsPlaying[1]}
                date={item.time + " " + item.dayOf + " " + item.date}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Weeklies;

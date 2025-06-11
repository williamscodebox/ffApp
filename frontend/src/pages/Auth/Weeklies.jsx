import { useEffect } from "react";
import { teams, day, week, schedule } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";
import { useDispatch, useSelector } from "react-redux";

const Weeklies = () => {
  const { value } = useSelector((state) => state.team);
  console.log(value);

  // const dispatch = useDispatch();
  // dispatch(setValues());
  // use this code above to set the dates in the global value state to render the week.
  // get the values from props in the selection or from an onClick in the links set

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

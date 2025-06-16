import { useEffect, useState } from "react";
import { schedule } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";
import { useValues } from "../../providers/ValueContext.jsx";
import { useSelector } from "react-redux";
import { useCreateSelectionsMutation } from "../../redux/api/selections.js";

const Weeklies = () => {
  const [selections, setSelections] = useState({});
  const [createSelections] = useCreateSelectionsMutation();
  const { userInfo } = useSelector((state) => state.auth);

  const { values } = useValues();
  const value = values;

  const saveToDatabase = async () => {
    console.log("Selections saved:", selections);
    console.log(userInfo._id);
    const userId = userInfo._id;
    const selectionsArray = Object.entries(selections).map(
      ([gameKey, team]) => ({
        gameKey,
        team,
      })
    );
    console.log("Selections Array:", selectionsArray);
    try {
      await createSelections({ selectionsArray, userId }).unwrap();
      console.log("Selections saved successfully!");
    } catch (error) {
      console.error("Error saving selections:", error);
    }
  };

  // useEffect(() => {
  //   console.log("Current context value:", values);
  // }, [value]); // Will log whenever `value` changes

  //console.log(value);

  // const dispatch = useDispatch();
  // dispatch(setValues());
  // use this code above to set the dates in the global value state to render the week.
  // get the values from props in the selection or from an onClick in the links set

  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col gap-6">
        {schedule.map((item) => {
          // console.log(JSON.stringify(item.date));
          // console.log(JSON.stringify(item.date) === JSON.stringify(value));
          if (
            value.some(
              (choice) => JSON.stringify(choice) === JSON.stringify(item.date)
            )
          ) {
            return (
              <GameCard
                key={item.date + item.TeamsPlaying[0] + item.TeamsPlaying[1]}
                teamA={item.TeamsPlaying[0]}
                teamB={item.TeamsPlaying[1]}
                date={item.time + " " + item.dayOf + " " + item.date}
                setSelections={setSelections}
              />
            );
          }
        })}
        <button
          onClick={saveToDatabase}
          className="mt-4 p-3 bg-blue-500 text-white rounded"
        >
          Save Selections
        </button>
      </div>
    </div>
  );
};

export default Weeklies;

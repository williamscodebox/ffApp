import { useEffect, useState } from "react";
import { schedule } from "../../../data/data.js";
import GameCard from "../../components/GameCard.jsx";
import { useValues } from "../../providers/ValueContext.jsx";
import { useSelector } from "react-redux";
import {
  useCreateSelectionsMutation,
  useDeleteSelectionsMutation,
  useFetchSelectionsQuery,
  useUpdateSelectionsMutation,
} from "../../redux/api/selections.js";

const Weeklies = () => {
  const [selections, setSelections] = useState({});
  const [createSelections] = useCreateSelectionsMutation();
  const [updateSelections] = useUpdateSelectionsMutation();
  const [deleteSelections] = useDeleteSelectionsMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [hasSelections, setHasSelections] = useState(false);

  const { values, weekValue } = useValues();
  const value = values;

  const {
    data: fetchedSelections,
    isLoading,
    error,
  } = useFetchSelectionsQuery({
    userId: userInfo?._id,
    week: weekValue,
  });

  const saveToDatabase = async () => {
    if (!userInfo?._id) {
      console.error("User ID is missing, cannot save selections.");
      return;
    }
    //console.log("Selections saved:", selections);
    //console.log(userInfo._id);
    const userId = userInfo._id;
    const week = weekValue;
    const selectionsArray = Object.entries(selections).map(
      ([gameKey, team]) => ({
        gameKey,
        team,
      })
    );
    //console.log("Selections Array:", selectionsArray);
    try {
      await createSelections({
        selectionsArray,
        userId,
        week,
      }).unwrap();
      console.log(`Selections saved successfully for Week ${weekValue + 1}!`);
    } catch (error) {
      console.error("Error saving selections:", error);
    }
  };

  useEffect(() => {
    setSelections({});
    //console.log("Current context value:", values);
  }, [value]); // Will log whenever `value` changes

  useEffect(() => {
    if (fetchedSelections) {
      const formattedSelections = fetchedSelections.selections.reduce(
        (acc, selection) => {
          acc[selection.gameKey] = selection.team;
          return acc;
        },
        {}
      );
      setSelections(formattedSelections);
      // console.log("Fetched selections:", fetchedSelections);
      setHasSelections(
        fetchedSelections?.selections?.length > 0 &&
          fetchedSelections?.week === weekValue
      );
    }
  }, [fetchedSelections, value]);

  if (isLoading) return <p>Loading selections...</p>;
  if (error) console.error("Error fetching selections:", error);

  //console.log(value);

  return (
    <div className="flex flex-col mt-8">
      <div className="flex flex-col gap-6">
        {schedule.map((item) => {
          // console.log(JSON.stringify(item.date));
          // console.log(JSON.stringify(item.date) === JSON.stringify(value));
          // if (value.some((choice) => choice === item.date)) {
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
                selections={selections}
              />
            );
          }
        })}

        {hasSelections ? (
          <>
            <button
              onClick={""} // Placeholder for any future functionality
              className="mt-4 p-3 bg-yellow-500 text-white rounded"
            >
              Update Selections
            </button>
            <button
              onClick={""} // Placeholder for any future functionality
              className="mt-4 p-3 bg-red-500 text-white rounded"
            >
              Delete Selections
            </button>
          </>
        ) : (
          <button
            onClick={saveToDatabase}
            className="mt-4 p-3 bg-blue-500 text-white rounded"
          >
            Save Selections
          </button>
        )}
      </div>
    </div>
  );
};

export default Weeklies;

import { useEffect, useState } from "react";
import { schedule } from "../../../../data/data.js";
import GameCard from "../../../components/GameCard.jsx";
import { useValues } from "../../../providers/ValueContext.jsx";
import { useSelector } from "react-redux";
import //   useCreateSelectionsMutation,
//   useFetchSelectionsQuery,

"../../../redux/api/selections.js";

const AdminWeeklies = () => {
  const [selections, setSelections] = useState({});
  //   const [createSelections] = useCreateSelectionsMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [hasSelections, setHasSelections] = useState(false);
  const [queryTimestamp, setQueryTimestamp] = useState(Date.now());

  const { values, weekValue } = useValues();
  const value = values;

  //   const {
  //     data: fetchedSelections,
  //     isLoading,
  //     error,
  //     refetch: refetchSelections,
  //   } = useFetchSelectionsQuery(
  //     {
  //       userId: userInfo?._id,
  //       week: weekValue,
  //       t: queryTimestamp,
  //     },
  //     {
  //       refetchOnMountOrArgChange: true,
  //       keepUnusedDataFor: 0,
  //     }
  //   );

  const saveToResults = async () => {
    if (!userInfo?.isAdmin) {
      console.error("User is not admin, cannot save results.");
      return;
    }
    const userId = userInfo._id;
    const week = weekValue;
    const selectionsArray = Object.entries(selections).map(
      ([gameKey, team]) => ({
        gameKey,
        team,
      })
    );
    if (selectionsArray.length === 0) {
      console.warn("No results to save.");
      return;
    }
    try {
      await createSelections({
        selectionsArray,
        userId,
        week,
      }).unwrap();
      setHasSelections(true);
      console.log(`Results saved successfully for Week ${weekValue + 1}!`);
    } catch (error) {
      console.error("Error saving Results:", error);
    }
  };

  //   useEffect(() => {
  //     setSelections({});
  //     setHasSelections(false);
  //     refetchSelections();
  //   }, [weekValue]);

  //   useEffect(() => {
  //     if (
  //       fetchedSelections?.selections?.length > 0 &&
  //       fetchedSelections?.week === weekValue
  //     ) {
  //       console.log("Fetched selections:", fetchedSelections.selections);
  //       const formattedSelections = fetchedSelections.selections.reduce(
  //         (acc, selection) => {
  //           acc[selection.gameKey] = selection.team;
  //           return acc;
  //         },
  //         {}
  //       );
  //       setSelections(formattedSelections);
  //       setHasSelections(true);
  //     } else if (
  //       fetchedSelections?.week === weekValue ||
  //       fetchedSelections === null ||
  //       fetchedSelections === undefined
  //     ) {
  //       // explicit handling when the selection was deleted and refetch returns nothing
  //       setSelections({});
  //       setHasSelections(false);
  //     }
  //   }, [fetchedSelections, weekValue]);

  //   if (isLoading) return <p>Loading selections...</p>;
  //   if (error) {
  //     console.error(
  //       `Error fetching selections for week ${weekValue + 1}:`,
  //       error
  //     );
  //   }

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

        <button
          onClick={saveToResults}
          className="mt-4 p-3 bg-blue-500 text-white rounded"
        >
          Save Results
        </button>
      </div>
    </div>
  );
};

export default AdminWeeklies;

import { useEffect, useState } from "react";
import { schedule } from "../../../../data/data.js";
import GameCard from "../../../components/GameCard.jsx";
import { useValues } from "../../../providers/ValueContext.jsx";
import { useSelector } from "react-redux";
import {
  useCreateResultsMutation,
  useFetchResultsQuery,
} from "@/redux/api/results.js";
import { toast } from "react-toastify";

const AdminWeeklies = () => {
  const [selections, setSelections] = useState({});
  const [createResults] = useCreateResultsMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [hasSelections, setHasSelections] = useState(false);
  const [queryTimestamp, setQueryTimestamp] = useState(Date.now());

  const { values, weekValue } = useValues();
  const value = values;

  const {
    data: fetchedResults,
    isLoading,
    error,
    refetch: refetchResults,
  } = useFetchResultsQuery(
    {
      week: weekValue,
      t: queryTimestamp,
    },
    {
      refetchOnMountOrArgChange: true,
      keepUnusedDataFor: 0,
    }
  );

  const saveToResults = async () => {
    if (!userInfo?.isAdmin) {
      console.error("User is not admin, cannot save results.");
      return;
    }
    const week = weekValue;
    const selectionsArray = Object.entries(selections).map(
      ([gameKey, team]) => ({
        gameKey,
        team,
      })
    );
    if (selectionsArray.length === 0) {
      console.warn("No results to save.");
      toast.error("No results entered.");
      return;
    }
    try {
      await createResults({
        selectionsArray,
        week,
      }).unwrap();
      setHasSelections(true);
      toast.success("Results saved");
      console.log(`Results saved successfully for Week ${weekValue + 1}!`);
    } catch (error) {
      console.error("Error saving Results:", error);
      toast.error(error.data.message);
    }
  };

  useEffect(() => {
    setSelections({});
    setHasSelections(false);
    refetchResults();
  }, [weekValue]);

  useEffect(() => {
    if (
      fetchedResults?.winners?.length > 0 &&
      fetchedResults?.week === weekValue
    ) {
      console.log("Fetched Results:", fetchedResults.winners);
      const formattedResults = fetchedResults.winners.reduce((acc, winner) => {
        acc[winner.gameKey] = winner.team;
        return acc;
      }, {});
      setSelections(formattedResults);
      setHasSelections(true);
    } else if (
      fetchedResults?.week === weekValue ||
      fetchedResults === null ||
      fetchedResults === undefined
    ) {
      // explicit handling when the selection was deleted and refetch returns nothing
      setSelections({});
      setHasSelections(false);
    }
  }, [fetchedResults, weekValue]);

  if (isLoading) return <p>Loading results...</p>;
  if (error) {
    console.error(`Error fetching results for week ${weekValue + 1}:`, error);
    toast.error(error.data.message);
  }

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

import React, { use, useState } from "react";
import { useEffect } from "react";
import AdminSidebar from "@/components/AdminSidebar";
import {
  useFetchAllSelectionsQuery,
  useLazyFetchAllSelectionsQuery,
} from "@/redux/api/selections.js";
import {
  useFetchResultsQuery,
  useLazyFetchResultsQuery,
} from "@/redux/api/results.js";
import { useUpdateLeaderboardMutation } from "@/redux/api/leaderboard.js";
import { useSelector } from "react-redux";
import Dropdown from "@/components/Dropdown";
import { set } from "mongoose";
import { calculateWeeklyScore } from "../../../../data/scoreScript.js";
import { useBulkCreateWeeklyMutation } from "@/redux/api/weekly.js";
import { toast } from "react-toastify";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [triggerFetch, { data: fetchedSelections, isLoading, error }] =
    useLazyFetchAllSelectionsQuery();
  const [
    triggerFetchResults,
    { data: fetchedResults, isLoading: resultsLoading, error: resultsError },
  ] = useLazyFetchResultsQuery();
  const [createWeeklyBulk] = useBulkCreateWeeklyMutation();
  const [updateLeaderboard] = useUpdateLeaderboardMutation();

  const [selectedWeek, setSelectedWeek] = React.useState(0);
  const [selectedResultsWeek, setSelectedResultsWeek] = React.useState(0);
  const [selectedRunWeek, setSelectedRunWeek] = React.useState(0);
  const [userSelections, setUserSelections] = useState({});
  const [adminResults, setAdminResults] = useState({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const runQuery = async () => {
    if (!userInfo?.isAdmin || selectedWeek === null) {
      console.error("User is not admin, cannot run query.");
      return;
    }
    try {
      const response = await triggerFetch({
        week: selectedWeek,
      }).unwrap();
      console.log("Selections fetched successfully");
      setUserSelections(response);
    } catch (err) {
      console.error("Error fetching selections:", err);
    }
  };
  const runResultsQuery = async () => {
    if (!userInfo?.isAdmin || selectedResultsWeek === null) {
      console.error("User is not admin, cannot run query.");
      return;
    }
    try {
      const response = await triggerFetchResults({
        week: selectedResultsWeek,
      }).unwrap();
      console.log("Results fetched successfully");
      setAdminResults(response);
      //console.log("Fetched results:", response);
    } catch (err) {
      console.error("Error fetching resultss:", err);
    }
  };
  const runScores = async () => {
    if (!userInfo?.isAdmin) {
      console.error("User is not admin, cannot run query.");
      return;
    }
    // console.log(calculateWeeklyScore(userSelections, adminResults));
    const weeklyScores = userSelections.selections.map((selectionBlock) =>
      calculateWeeklyScore(selectionBlock, adminResults)
    );

    if (adminResults.winners.length === 0 || !adminResults) {
      console.warn("No weekly to run.");
      toast.error("No weekly to run.");
      return;
    }
    try {
      await createWeeklyBulk(weeklyScores).unwrap();

      toast.success("Weekly scores saved");
      console.log(
        `Weekly scores saved successfully for Week ${
          parseInt(userSelections.week, 10) + 1
        }!`
      );
    } catch (error) {
      console.error("Error saving Weekly:", error);
      toast.error(error.data.message);
    }
  };
  const runLeaderboard = async () => {
    if (!userInfo?.isAdmin) {
      console.error("User is not admin, cannot run query.");
      return;
    }

    try {
      await updateLeaderboard();

      toast.success("Leaderboard updated");
      console.log(
        `Leaderboard successfully updated for Week ${
          parseInt(userSelections.week, 10) + 1
        }!`
      );
    } catch (error) {
      console.error("Error updating Leaderboard:", error);
      toast.error(error.data.message);
    }
  };

  return (
    <div className="flex flex-row justify-between mt-10">
      <div>
        <AdminSidebar />
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col items-center text-2xl text-white bg-gray-700 h-screen pt-10">
          <div>
            <p className="flex justify-center">Admin</p>
          </div>

          <div className="flex  justify-center gap-5">
            <button
              onClick={runQuery}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              Run Query
            </button>
            <div className="flex items-center mt-3">
              <Dropdown onSelectWeek={setSelectedWeek} />
            </div>
            <button
              onClick={() => console.log(userSelections)}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              log Selections
            </button>
          </div>
          <div className="flex  justify-center gap-5">
            <button
              onClick={runResultsQuery}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              Grab Results
            </button>
            <div className="flex items-center mt-3">
              <Dropdown onSelectWeek={setSelectedResultsWeek} />
            </div>
            <button
              onClick={() => console.log(adminResults)}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              log Results
            </button>
          </div>
          <div className="flex  justify-center gap-5">
            <button
              onClick={runScores}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              Run Results
            </button>
          </div>
          <div className="flex  justify-center gap-5">
            <button
              onClick={runLeaderboard}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              Update Leaderboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

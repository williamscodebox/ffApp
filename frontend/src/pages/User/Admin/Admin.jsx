import React from "react";
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
import { useSelector } from "react-redux";
import Dropdown from "@/components/Dropdown";

const Admin = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const [triggerFetch, { data: fetchedSelections, isLoading, error }] =
    useLazyFetchAllSelectionsQuery();
  const [
    triggerFetchResults,
    { data: fetchedResults, isLoading: resultsLoading, error: resultsError },
  ] = useLazyFetchResultsQuery();
  const [selectedWeek, setSelectedWeek] = React.useState(0);
  const [selectedResultsWeek, setSelectedResultsWeek] = React.useState(0);
  const [selectedRunWeek, setSelectedRunWeek] = React.useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const {
  //   data: fetchedSelections,
  //   isLoading,
  //   error,
  //   refetch: refetchSelections,
  // } = useFetchAllSelectionsQuery(
  //   {
  //     week: 0,
  //   },
  //   {
  //     refetchOnMountOrArgChange: true,
  //     keepUnusedDataFor: 0,
  //   }
  // );

  // const runQuery = async () => {
  //   if (!userInfo?.isAdmin) {
  //     console.error("User is not admin, cannot run query.");
  //     return;
  //   }
  //   try {
  //     await refetchSelections();
  //     console.log("Selections re-fetched:", fetchedSelections);
  //   } catch (err) {
  //     console.error("Failed to refetch selections:", err);
  //   }
  // };
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
      console.log("Fetched selections:", response);
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
      console.log("Fetched results:", response);
    } catch (err) {
      console.error("Error fetching resultss:", err);
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
          </div>
          <div className="flex  justify-center gap-5">
            <button
              onClick={""}
              className="mt-4 p-3 bg-blue-500 text-white rounded"
            >
              Run Results
            </button>
            <div className="flex items-center mt-3">
              <Dropdown onSelectWeek={setSelectedRunWeek} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;

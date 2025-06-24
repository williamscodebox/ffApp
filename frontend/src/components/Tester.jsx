import { useFetchLeaderboardQuery } from "@/redux/api/leaderboard";
import React from "react";

const Tester = () => {
  const { data, isLoading, error } = useFetchLeaderboardQuery();
  console.log("Data:", data);

  if (isLoading) return <p></p>;
  if (error) return <p>Error loading leaderboard: {error.message}</p>;

  return (
    <div>
      <h2>Tester</h2>
      <p>Top user: {data?.[0]?.username ?? "No users yet"}</p>
      <p>Top score: {data?.[0]?.score?.total ?? "No scores yet"}</p>
      <p>{data?.[0]?.score?.weekScores?.Week_1}</p>
    </div>
  );
};

export default Tester;

import React from "react";
import ScrollTriggered from "../components/ScrollTriggered";
import ScrollCard from "../components/ScrollCard";
import { useDispatch, useSelector } from "react-redux";

const ErrorPage = () => {
  const { teams } = useSelector((state) => state.team);
  const dispatch = useDispatch();
  return (
    <div>
      {/* <ScrollCard /> */}
      {teams[2]}
    </div>
  );
};

export default ErrorPage;

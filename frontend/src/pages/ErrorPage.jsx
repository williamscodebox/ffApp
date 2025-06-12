import React from "react";
import ScrollTriggered from "../components/ScrollTriggered";
import ScrollCard from "../components/ScrollCard";
import { useDispatch, useSelector } from "react-redux";
import { makeWeek } from "../../data/data";

const ErrorPage = () => {
  // const check = week[3].map((item) => {
  //   if (typeof item === "object") {
  //     console.log("fuck YA");
  //     console.log(item);
  //     item.shift();
  //     console.log(item);
  //   }
  // });

  const week1 = makeWeek(0, 0);
  console.log(week1);
  const week2 = makeWeek(1, 0);
  console.log(week2);
  const week4 = makeWeek(3, 0);
  console.log(week4);
  const week13 = makeWeek(12, 2);
  console.log(week13);

  return (
    <div>
      <ScrollCard />
    </div>
  );
};

export default ErrorPage;

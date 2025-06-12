import React from "react";
import ScrollTriggered from "../components/ScrollTriggered";
import ScrollCard from "../components/ScrollCard";
import { useDispatch, useSelector } from "react-redux";
import { makeWeek, schedule } from "../../data/data";
import { useValues } from "../providers/ValueContext";

const ErrorPage = () => {
  const { values } = useValues();
  const value = [
    "Oct 30",
    "Nov 1",
    "Nov 2",
    "Nov 3",
    "Nov 4",
    "Nov 5",
    "Nov 6",
  ];
  // const check = week[3].map((item) => {
  //   if (typeof item === "object") {
  //     console.log("fuck YA");
  //     console.log(item);
  //     item.shift();
  //     console.log(item);
  //   }
  // });

  // const week1 = makeWeek(0, 0);
  // console.log(week1);
  // const week2 = makeWeek(1, 0);
  // console.log(week2);
  // const week4 = makeWeek(3, 0);
  // console.log(week4);
  // const week13 = makeWeek(12, 2);
  // console.log(week13);

  schedule;

  return (
    <div>
      {" "}
      {schedule.map((item) => {
        console.log(JSON.stringify(item.date));
        console.log(JSON.stringify(value));

        if (
          value.some(
            (choice) => JSON.stringify(choice) === JSON.stringify(item.date)
            // console.log(JSON.stringify(item.date) === JSON.stringify(choice));
          )
        ) {
          return <div>go</div>;
        }
      })}
      <ScrollCard />
    </div>
  );
};

export default ErrorPage;

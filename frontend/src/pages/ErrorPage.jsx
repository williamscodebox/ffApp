import ScrollCard from "../components/ScrollCard";
import { schedule } from "../../data/data";
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

  return (
    <div>
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

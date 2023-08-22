import React from "react";
import SummaryCards from "./SummaryCards";
import Lists from "./Lists";
import TopChoices from "./TopChoices";
import { useState, useEffect } from "react";
const Summary = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "short",
  };

  const formattedDateTime = currentDateTime.toLocaleString(undefined, options);
  return (
    <div className="flex w-96 justify-">
      <div className="">
        <div className="flex flex-col">
          <div className="flex flex-row pb-2">
            <h1 className="font-bold text-5xl pr-2">Hello, </h1>
            <h1 className="font-bold text-libraryOrange text-5xl">Rene!</h1>
          </div>
          <div>
            <p className="font-regular font-bold">{formattedDateTime}</p>
          </div>
          <SummaryCards />
          <Lists />
          <TopChoices />
        </div>
      </div>
    </div>
  );
};
export default Summary;

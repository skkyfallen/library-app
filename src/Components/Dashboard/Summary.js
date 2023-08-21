import React from "react";
import SummaryCards from "./SummaryCards";
import Lists from "./Lists";
import TopChoices from "./TopChoices";
const Summary = () => {
  return (
    <div className="flex w-96 justify-">
      <div className="">
        <div className="flex flex-col">
          <div className="flex flex-row pb-2">
            <h1 className="font-bold text-5xl pr-2">Hello, </h1>
            <h1 className="font-bold text-libraryOrange text-5xl">Rene!</h1>
          </div>
          <div>
            <p className="font-regular font-bold">
              Jan 12 2023 | Thursday , 11:00am
            </p>
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

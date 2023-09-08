import React from "react";
import SummaryCards from "./SummaryCards";
import Lists from "./Lists";
import TopChoices from "./TopChoices";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
const Summary = () => {
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
      "Content-Type": "multipart/form-data",
    },
  };
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    const retrieveName = () => {
      axios
        .get("https://wild-gray-pigeon-shoe.cyclic.cloud/user/id", config)
        .then((response) => {
          console.log(response.data.data.libraryName);
          setUserName(response.data.data.libraryName);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    retrieveName();
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
            {userName  ? (
              <h1 className="font-bold text-libraryOrange text-5xl">{userName}</h1>
            ):(
              <h1 className="font-bold text-libraryOrange text-5xl"><ClipLoader/></h1>
            )}
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

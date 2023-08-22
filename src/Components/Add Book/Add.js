import React from "react";
import AddForm from "./AddForm";
const Add = () => {
  const [currentDateTime, setCurrentDateTime] = React.useState(new Date());

  React.useEffect(() => {
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
    <div className="flex mt-7 ">
      <div className="bg-gray w-full ml-5 mr-5 h-screen rounded-xl p-5">
        <div>
          <div className="flex flex-row pb-2 ">
            <h1 className="font-bold text-5xl pr-2">Hello, </h1>
            <h1 className="font-bold text-libraryOrange text-5xl">Rene!</h1>
          </div>
          <div>
            <p className="font-regular font-bold">{formattedDateTime}</p>
            <p className="font-bold text-4xl text-libraryOrange pt-4">
              Need to add a book?
            </p>
            <p className="font-bold text-slate-400">
              Enter the book details down below!
            </p>
            <AddForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;

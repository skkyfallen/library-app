import React from "react";
import BorrowForm from "./BorrowForm";
const Borrow = () => {
  return (
    <div className="flex mt-7 ">
      <div className="bg-gray w-full ml-5 mr-5 h-screen rounded-xl p-5">
        <div>
          <div className="flex flex-row pb-2 ">
            <h1 className="font-bold text-5xl pr-2">Hello, </h1>
            <h1 className="font-bold text-libraryOrange text-5xl">Rene!</h1>
          </div>
          <div>
            <p className="font-regular font-bold">
              Jan 12 2023 | Thursday , 11:00am
            </p>
            <p className="font-bold text-4xl text-libraryOrange pt-4">
              Someone wants to borrow a book?
            </p>
            <p className="font-bold text-slate-400">
              Enter their details down below!
            </p>
            <BorrowForm/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Borrow;

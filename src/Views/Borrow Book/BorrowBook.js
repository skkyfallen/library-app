import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Borrow from "../../Components/Borrow/Borrow";
const BorrowBook = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Borrow />
      </div>
    </div>
  );
};

export default BorrowBook;

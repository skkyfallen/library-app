import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Return from "../../Components/Return/Return";
const ReturnBook = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Return />
      </div>
    </div>
  );
};

export default ReturnBook;

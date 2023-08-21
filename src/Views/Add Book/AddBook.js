import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import Add from "../../Components/Add Book/Add";
const AddBook = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Add />
      </div>
    </div>
  );
};

export default AddBook;

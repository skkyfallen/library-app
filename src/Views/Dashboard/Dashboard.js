import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Header from "../../Components/Header/Header";
import MainDash from "../../Components/Dashboard/MainDash";

const Dashboard = () => {
  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <MainDash />
      </div>
    </div>
  );
};

export default Dashboard;

import React from "react";
import { GoPeople } from "react-icons/go";
const SummaryCards = () => {
  return (
    <div className="flex">
      <div className="bg-white rounded-xl h-40   lg:w-44 2xl:w-96 md:w-64 mt-10 mr-10">
        <div className="flex flex-row items-center justify-between">
          <p className="font-regular font-bold text-4xl p-5">1223</p>
          <div className="border border-libraryOrange bg-libraryOrange rounded-full p-2 mr-3">
            <GoPeople size={40} color={"#ffffff"} />
          </div>
        </div>
        <p className="font-regular font-bold text-xl p-5">Total Visitors</p>
      </div>
      <div className="bg-white rounded-xl  h-40  lg:w-56 2xl:w-96 md:w-64 mt-10 mr-10">
        <div className="flex flex-row items-center justify-between">
          <p className="font-regular font-bold text-4xl p-5">1223</p>
          <div className="border border-libraryOrange bg-libraryOrange rounded-full p-2 mr-3">
            <GoPeople size={40} color={"#ffffff"} />
          </div>
        </div>
        <p className="font-regular font-bold text-xl p-5">Total Visitors</p>
      </div>
      <div className="bg-white rounded-xl h-40  lg:w-44 2xl:w-96 md:w-64 mt-10 mr-10">
        <div className="flex flex-row items-center justify-between">
          <p className="font-regular font-bold text-4xl p-5">1223</p>
          <div className="border border-libraryOrange bg-libraryOrange rounded-full p-2 mr-3">
            <GoPeople size={40} color={"#ffffff"} />
          </div>
        </div>
        <p className="font-regular font-bold text-xl p-5">Total Visitors</p>
      </div>
      <div className="bg-white rounded-xl h-40  lg:w-44 2xl:w-96 md:w-64 mt-10 mr-10 ">
        <div className="flex flex-row items-center justify-between">
          <p className="font-regular font-bold text-4xl p-5">1223</p>
          <div className="border border-libraryOrange bg-libraryOrange rounded-full p-2 mr-3">
            <GoPeople size={40} color={"#ffffff"} />
          </div>
        </div>
        <p className="font-regular font-bold text-xl p-5">Total Visitors</p>
      </div>
    </div>
  );
};

export default SummaryCards;

import React from "react";
import { LuLayoutDashboard, LuSettings } from "react-icons/lu";
import { IoIosRefresh } from "react-icons/io";
import { GoBook } from "react-icons/go";
import { BsPeople } from "react-icons/bs";
import { MdOutlineLiveHelp } from "react-icons/md";
import { useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="bg-red-50 w-24 flex justify-center h-full ">
      <nav className="w-24  h-[100px] flex justify-center">
        <ul className="pt-5">
          <p className="font-bold">LOGO</p>
          <li className="pt-16">
            <LuLayoutDashboard size={25} color={"#9c9a9a"} />
          </li>
          <li className="pt-8">
            <IoIosRefresh size={25} color={"#9c9a9a"} />
          </li>
          <li className="pt-8">
            <GoBook size={25} color={"#9c9a9a"} />
          </li>
          <li className="pt-8">
            <BsPeople size={25} color={"#9c9a9a"} />
          </li>
          <li className="pt-8">
            <LuSettings size={25} color={"#9c9a9a"} />
          </li>
          <li className="pt-8">
            <MdOutlineLiveHelp color={"#9c9a9a"} size={25} />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

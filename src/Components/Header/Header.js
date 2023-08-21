import React from "react";
import HeaderSearch from "./HeaderSearch";
import UserDetails from "./UserDetails";
const Header = () => {
  return (
    <div className="flex justify-center h-20  flex-1   ">
      <header className="flex items-center justify-around   h-20 overflow-hidden w-[94VW]">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <HeaderSearch />
        <UserDetails />
      </header>
    </div>
  );
};

export default Header;

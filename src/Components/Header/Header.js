import React from "react";
import HeaderSearch from "./HeaderSearch";
import UserDetails from "./UserDetails";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const authToken = localStorage.getItem("authToken");
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  return (
    <div className="flex justify-center h-20  flex-1   ">
      <header className="flex items-center justify-around   h-20 overflow-hidden w-[94VW]">
        <h1 className="font-bold text-2xl">Dashboard</h1>
        <HeaderSearch />
        <UserDetails />
        {authToken ? (
          <Button
            onClick={handleLogout}
            variant="contained"
            style={{ backgroundColor: "#F65867" }}
          >
            Logout
          </Button>
        ) : (
          <Button
            onClick={handleLogout}
            variant="contained"
            style={{ backgroundColor: "#F65867" }}
          >
            Login / SignUp
          </Button>
        )}
      </header>
    </div>
  );
};

export default Header;

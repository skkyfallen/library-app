import React from "react";
import { IoMdNotifications } from "react-icons/io";
const UserDetails = () => {
  return (
    <div className="flex flex-row">
      <IoMdNotifications size={30} />
      <div className="flex flex-col">
        <p className="font-regular">Andrea Hutchinson</p>
        <p className="font-regular text-slate-400">Librarian</p>
      </div>
    </div>
  );
};

export default UserDetails;

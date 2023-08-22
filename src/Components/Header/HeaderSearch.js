import React from "react";
import axios from "axios";
import { useState } from "react";
const HeaderSearch = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState("data");
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const handleChange = (event) => {
    const newValue = event.target.value;
    setSearch(newValue);
    sendSearch(newValue);
  };
  const sendSearch = (data) => {
    axios
      .get(
        `https://wild-gray-pigeon-shoe.cyclic.cloud/book?author=${data}`,
        config
      )
      .then((response) => {
        console.log(response.data);
        console.log(data);
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search Books..."
        className="  rounded-2xl border border-gray bg-gray font-regular text-sm p-5 w-96 h-12"
        value={search}
        onChange={handleChange}
      />
      {/* {data ? (
        <div className="absolute bg-white">
          {data.map((item) => (
            <div key={item.id}>
              <p>{item.author}</p>
              <p>{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>'hEEL</div>
      )} */}
    </div>
  );
};

export default HeaderSearch;

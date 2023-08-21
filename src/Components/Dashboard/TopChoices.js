import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ClipLoader from "react-spinners/ClipLoader";
const TopChoices = () => {
  const [books, setBooks] = useState("");
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  useEffect(() => {
    const getBooks = axios
      .get("https://wild-gray-pigeon-shoe.cyclic.cloud/book", config)
      .then((response) => {
        console.log(response.data.data);
        setBooks(response.data.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }, []);
  
};

export default TopChoices;

import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";

const BorrowForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [bookId, setBookId] = useState("");
  const authToken = localStorage.getItem("authToken");
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://wild-gray-pigeon-shoe.cyclic.cloud/book/borrow",
        {
          name: name,
          email: email,
          returnDate: returnDate,
          bookId: bookId,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  return (
    <div>
      <form className="bg-white mt-5 flex flex-col justify-around h-96 font-regular">
        <TextField
          variant="filled"
          label="Full name"
          style={{ fontFamily: "bold", width: 350 }}
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Email address"
          style={{ fontFamily: "bold", width: 350 }}
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Return Date"
          style={{ fontFamily: "bold", width: 350 }}
          type="text"
          placeholder="MM-DD-YYYY"
          value={returnDate}
          onChange={(event) => setReturnDate(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Book ID"
          style={{ fontFamily: "bold", width: 350, outline: "false" }}
          value={bookId}
          onChange={(event) => setBookId(event.target.value)}
        />
        <Button
          variant="contained"
          style={{ backgroundColor: "#F65867", width: 350 }}
          onClick={handleSubmit}
        >
          Submit?
        </Button>
      </form>
    </div>
  );
};

export default BorrowForm;

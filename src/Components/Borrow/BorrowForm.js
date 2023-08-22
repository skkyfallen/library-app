import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
const BorrowForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [bookId, setBookId] = useState("");
  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
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
        toast.success("Book Borrowed Successfully");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.response);
        toast.error(error.response.data.message);
        setLoading(false);
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
        {loading === true ? (
          <ClipLoader color={"#F65867"} />
        ) : (
          <Button
            variant="contained"
            style={{ backgroundColor: "#F65867", width: 350 }}
            onClick={handleSubmit}
          >
            Submit?
          </Button>
        )}
      </form>
      <ToastContainer />
    </div>
  );
};

export default BorrowForm;

import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
const ReturnForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [bookId, setBookId] = useState("");
  const [numberOfCopies, setNumberOfCopies] = useState("");
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
        "https://wild-gray-pigeon-shoe.cyclic.cloud/book/return",
        {
          email: email,
          id: bookId,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        toast.success("Successful!");
      })
      .catch((error) => {
        console.log(error.response);
        setLoading(false);
        toast.error(error.response.data.message);
      });
  };
  return (
    <div>
      <form className="bg-white mt-5 flex flex-col justify-around h-96 font-regular">
        <TextField
          variant="filled"
          label="Email"
          style={{ fontFamily: "bold", width: 350 }}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Book Id"
          style={{ fontFamily: "bold", width: 350 }}
          type="email"
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

export default ReturnForm;

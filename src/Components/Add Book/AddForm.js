import React from "react";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ClipLoader from "react-spinners/ClipLoader";
const AddForm = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [numberOfCopies, setNumberOfCopies] = useState("");
  const authToken = localStorage.getItem("authToken");
  const [loading, setLoading] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
  const handleSubmit = (event) => {
    setLoading(true);
    event.preventDefault();
    axios
      .post(
        "https://wild-gray-pigeon-shoe.cyclic.cloud/book/create",
        {
          author: author,
          title: title,
          availableCopies: numberOfCopies,
        },
        config
      )
      .then((response) => {
        console.log(response.data);
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
          label="Author"
          style={{ fontFamily: "bold", width: 350 }}
          value={author}
          onChange={(event) => setAuthor(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Title"
          style={{ fontFamily: "bold", width: 350 }}
          type="email"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
        <TextField
          variant="filled"
          label="Available Copies"
          style={{ fontFamily: "bold", width: 350 }}
          type="text"
          value={numberOfCopies}
          onChange={(event) => setNumberOfCopies(event.target.value)}
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

export default AddForm;

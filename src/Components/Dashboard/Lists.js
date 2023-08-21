import React from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
  TableContainer,
} from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import dummyData from "../../assets/dummyData";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
const Lists = () => {
  const navigate = useNavigate();
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
  const handleBorrowClick = () => {
    navigate("/dashboard/borrowBook");
  };
  return (
    <>
      <div className="flex flex-row">
        <div className="flex flex-col pr-32">
          <div className="flex flex-row items-center">
            <p className="font-bold text-2xl pt-10 pb-5">Recently Borrowed</p>
            <Button
              onClick={handleBorrowClick}
              variant="contained"
              style={{
                paddingBottom: 10,
                marginTop: 20,
                marginLeft: 320,
                backgroundColor: "#F65867",
              }}
            >
              Borrow Book
            </Button>
          </div>

          <TableContainer
            component={Paper}
            className="w-34 h-96"
            style={{ width: 690, height: 440, overflow: "hidden" }}
          >
            <Table style={{}}>
              <TableHead className="flex flex-col " style={{}}>
                <TableRow className="">
                  <TableCell>
                    <p className="font-bold">Name</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">Email</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">Book ID</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">Title</p>
                  </TableCell>
                  <TableCell>
                    <p className="font-bold">Return Date</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dummyData.map((item) => (
                  <TableRow key={item.userId}>
                    <TableCell>
                      <p className="font-regular">{item.name}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-regular">{item.email}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-regular">{item.userId}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-regular">{item.title}</p>
                    </TableCell>
                    <TableCell>
                      <p className="font-regular">{item.return_date}</p>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div>
          <div>
            <p className="font-bold text-3xl pt-10">Top Choices</p>
            <div>
              {books ? (
                <div className="flex flex-col pl-10 pt-5">
                  {books.map((book) => (
                    <div className="flex flex-col mb-10">
                      <p className="font-bold">{book.title}</p>
                      <p className="font-regular text-slate-400">
                        {book.author}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div>
                  {" "}
                  <ClipLoader className="relative left-20 top-3" />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Lists;

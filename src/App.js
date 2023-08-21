import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Views/Auth/SignUp";
import Login from "./Views/Auth/Login";
import Dashboard from "./Views/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Borrow from "./Components/Borrow/Borrow";
import BorrowBook from "./Views/Borrow Book/BorrowBook";
import AddBook from "./Views/Add Book/AddBook";
import ReturnBook from "./Views/Return Book/ReturnBook";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/borrowBook" element={<BorrowBook />} />
        <Route path="/dashboard/addBook" element={<AddBook />} />
        <Route path="/dashboard/returnBook" element={<ReturnBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

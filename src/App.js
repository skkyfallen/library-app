import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Views/Auth/SignUp";
import Login from "./Views/Auth/Login";
import Dashboard from "./Views/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

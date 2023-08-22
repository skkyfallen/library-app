import React from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
const SignUp = () => {
  const [loading, setloading] = React.useState(false);
  const [libraryName, setLibraryName] = React.useState("");
  const [email, setemail] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [image, setImage] = React.useState(null);
  const navigate = useNavigate();
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  const handleContinue = (event) => {
    event.preventDefault();
    setloading(true);
    const formData = new FormData();
    formData.append("name", libraryName);
    formData.append("email", email);
    formData.append("number", phone);
    formData.append("password", password);
    formData.append("image", image);
    axios
      .post(
        "https://wild-gray-pigeon-shoe.cyclic.cloud/user/signup",
        formData,
        config
      )
      .then((response) => {
        console.log(response.data);
        setloading(false);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.response);
        setloading(false);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className="h-screen bg-libraryOrange flex items-center justify-center font-bold ">
      <form className="bg-libraryOrange shadow-lg rounded-2xl   w-7/12  flex flex-row justify-between sm:h-4/6">
        <div>
          <h1 className="text-white font-regular text-3xl flex p-10 sm:p-2 sm:texl-xl">
            Get Started with
          </h1>
          <h1 className="text-white text-4xl p-10 sm:p-3 sm:text-2xl">
            Library - Manager
          </h1>
          <p className="text-white text-xl px-10 sm:px-3 sm:py-20 ">
            Your all in one Library Assistant
          </p>
          <p className="text-white xl:px-10 xl:text-2xl xl:py-20 sm:px-3 sm-text-xl">
            To manage all your priceless books
            <br />, track and maintain them
          </p>
          <p>
            <NavLink
              to="/login"
              className="text-black xl:p-10 hover:text-white text-lg sm:p-3"
            >
              Already Have an account?
            </NavLink>{" "}
          </p>
          <div className="border-2 border-white ml-5 mr-2"></div>
        </div>
        <div className="bg-white w-7/12 rounded-xl">
          <h1 className="text-black font-bold xl:text-3xl pt-10 pl-10 sm:pt-2 sm:pl-2 sm:text-2xl">
            Sign Up
          </h1>
          <p className="xl:p-5 sm:p-2 ">Library Name</p>
          <input
            type="text"
            value={libraryName}
            onChange={(event) => setLibraryName(event.target.value)}
            placeholder="Enter the library name"
            className="p-5 ml-5 w-8/12 sm:h-10 xl:h-14  rounded-lg bg-slate-100"
          />
          <p className="xl:p-5 sm:p-2">Email-address</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            placeholder="example@email.com"
            className="xl:p-5 sm:p-2 ml-5 w-8/12 sm:h-10 xl:h-14 rounded-lg bg-slate-100"
          />
          <p className="xl:p-5 sm:p-2">Phone-Number</p>
          <input
            type="text"
            value={phone}
            onChange={(event) => setphone(event.target.value)}
            placeholder="Enter your phone number"
            className="xl:p-5 sm:p-2  ml-5 w-8/12 sm:h-10  xl:h-14 rounded-lg bg-slate-100"
          />
          <p className="xl:p-5 sm:p-2">Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            placeholder="Enter your password"
            className="xl:p-5 sm:p-2 ml-5 w-8/12 sm:h-10 xl:h-14 rounded-lg bg-slate-100"
          />
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setImage(event.target.files[0])}
            className="xl:px-10 sm:px-0 xl:pb-10 sm:pb-0 sm:pt-2"
          />
          {loading === true ? (
            <button>
              <ClipLoader className="relative xl:left-20 sm:left-0 sm:absolute top-3" />
            </button>
          ) : (
            <button onClick={handleContinue}>
              <BiSolidRightArrowCircle
                size={40}
                className="relative left-10 top-3"
                color={"#fffff"}
              />
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default SignUp;

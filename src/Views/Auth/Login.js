import React from "react";
import axios from "axios";
import "./styles.css";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = React.useState("");
  const [password, setpassword] = React.useState("");
  const [loading, setloading] = React.useState(false);

  const handleContinue = (event) => {
    event.preventDefault();
    setloading(true);
    axios
      .post("https://wild-gray-pigeon-shoe.cyclic.cloud/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data.body.token);
        const loginToken = response.data.body.token;
        localStorage.setItem("authToken", loginToken);
        setloading(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log(error.response);
        setloading(false);
        toast.error("Login Failed, check your details", {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };
  return (
    <div className="h-screen bg-libraryOrange flex items-center justify-center font-bold ">
      <form className="bg-libraryOrange shadow-lg rounded-2xl  w-7/12  flex flex-row justify-between h-96">
        <div>
          <h1 className="text-white font-regular text-3xl flex p-10">
            Drop Back In
          </h1>
          <h1 className="text-white text-4xl p-10 ">Library - Manager</h1>
          <div className="border-2 border-white ml-5 mr-2"></div>
        </div>
        <div className="bg-white w-7/12 rounded-xl">
          <h1 className="text-black font-bold text-3xl  p-10">Login</h1>

          <p className="p-5">Email-address</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            placeholder="example@email.com"
            className="p-5 ml-5 w-8/12  h-14 rounded-lg bg-slate-100"
          />
          <p className="p-5">Password</p>
          <input
            type="password"
            value={password}
            onChange={(event) => setpassword(event.target.value)}
            placeholder="Enter your password"
            className="p-5 ml-5 w-8/12  h-14 rounded-lg bg-slate-100"
          />
          {loading === true ? (
            <button>
              <ClipLoader className="relative left-20 top-3" />
            </button>
          ) : (
            <button onClick={handleContinue}>
              <BiSolidRightArrowCircle
                size={40}
                className="relative left-10 top-3"
                color={"#F65867"}
              />
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;

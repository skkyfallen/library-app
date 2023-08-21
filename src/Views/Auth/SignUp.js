import React from "react";
import "./styles.css";
import { BiSolidRightArrowCircle } from "react-icons/bi";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
const SignUp = () => {
  const [loading, setloading] = React.useState(false);
  const [firstname, setfirstname] = React.useState("");
  const [lastname, setlastname] = React.useState("");
  const [email, setemail] = React.useState("");
  const [phone, setphone] = React.useState("");
  const [password, setpassword] = React.useState("");

  const handleContinue = (event) => {
    event.preventDefault();
    setloading(true);
    axios
      .post("https://wild-gray-pigeon-shoe.cyclic.cloud/user/signup", {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phoneNumber: phone,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        setloading(false);
      })
      .catch((error) => {
        console.log(error.response);
        setloading(false);
      });
  };
  return (
    <div className="h-screen bg-formBlack flex items-center justify-center font-bold ">
      <form className="bg-formGrey shadow-lg rounded-2xl h-5/6 w-7/12  flex flex-row justify-between">
        <div>
          <h1 className="text-white font-regular text-3xl flex p-10">
            Get Started with
          </h1>
          <h1 className="text-white text-4xl p-10 ">Library - Manager</h1>
          <p className="text-white text-xl px-10">
            Your all in one Library Assistant
          </p>
          <p className="text-white px-10 text-2xl py-32">
            To manage all your priceless books
            <br />, track and maintain them
          </p>
          <div className="border-2 border-white ml-5 mr-2"></div>
        </div>
        <div className="bg-white w-7/12 rounded-xl">
          <h1 className="text-black font-bold text-3xl p-10">Sign Up</h1>
          <p className="p-5">First name</p>
          <input
            type="text"
            value={firstname}
            onChange={(event) => setfirstname(event.target.value)}
            placeholder="Enter your first name"
            className="p-5 ml-5 w-8/12  h-14 rounded-lg bg-slate-100"
          />
          <p className="p-5">Last Name</p>
          <input
            type="text"
            value={lastname}
            onChange={(event) => setlastname(event.target.value)}
            placeholder="Enter your last name"
            className="p-5 ml-5 w-8/12  h-14 rounded-lg bg-slate-100"
          />
          <p className="p-5">Email-address</p>
          <input
            type="email"
            value={email}
            onChange={(event) => setemail(event.target.value)}
            placeholder="example@email.com"
            className="p-5 ml-5 w-8/12  h-14 rounded-lg bg-slate-100"
          />
          <p className="p-5">Phone-Number</p>
          <input
            type="text"
            value={phone}
            onChange={(event) => setphone(event.target.value)}
            placeholder="Enter your phone number"
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
                className="relative left-20 top-3"
                color={"#fffff"}
              />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();
  const [errormsg, seterrorMsg] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/login",
        formData
      );
      navigation("/welcome");
      console.log("Responce", response);
    } catch (error) {
      console.log(error);
      seterrorMsg("Invalid Credentials");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <h1>Login</h1>
      {errormsg && <div>{errormsg}</div>}
      <form onSubmit={handlesubmit}>
        <div className="d-flex flex-column">
          <input
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handlechange}
          ></input>
          <input
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handlechange}
          ></input>
          <button type="submit">Login</button>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
};

export default Login;

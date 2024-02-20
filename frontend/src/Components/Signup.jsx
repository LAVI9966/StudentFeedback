import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setformData] = useState({
    usertype: "student",
    firstname: "",
    lastname: "",
    semester: "1",
    email: "",
    password: "",
    cpassword: "",
  });
  const [errorMsg, seterrorMsg] = useState("");
  const navigation = useNavigate();
  const handlechange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const responce = await axios.post(
        "http://localhost:8080/signin",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      navigation("/welcome");
      console.log("response ", responce);
    } catch (error) {
      console.log(error);
      seterrorMsg("An error Occurs");
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <h1>Signin</h1>
      {errorMsg && <div>{errorMsg}</div>}
      <form onSubmit={handlesubmit}>
        <div className="d-flex flex-column">
          <select
            name="usertype"
            value={formData.usertype}
            onChange={handlechange}
          >
            <option value="admin">Admin</option>
            <option value="student">Student</option>
          </select>
          <input
            placeholder="FirstName"
            name="firstname"
            value={formData.firstname}
            onChange={handlechange}
          />
          <input
            placeholder="LastName"
            name="lastname"
            value={formData.lastname}
            onChange={handlechange}
          />
          <select
            name="semester"
            value={formData.semester}
            onChange={handlechange}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handlechange}
          />
          <input
            placeholder="PassWord"
            name="password"
            value={formData.password}
            onChange={handlechange}
          />
          <input
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handlechange}
          />
          <button type="submit">Submit</button>
        </div>
      </form>
      <Footer></Footer>
    </>
  );
};

export default Signup;

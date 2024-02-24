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
      if (formData.usertype == "student") {
        navigation("/courselist");
      } else {
        navigation("/admin");
      }
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
      <form onSubmit={handlesubmit} class="max-w-md mx-auto">
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select User Type
        </label>
        <select
          name="usertype"
          value={formData.usertype}
          onChange={handlechange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="admin">Admin</option>
          <option value="student">Student</option>
        </select>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            First Name
          </label>
          <input
            placeholder="FirstName"
            name="firstname"
            value={formData.firstname}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Last Name
          </label>
          <input
            placeholder="LastName"
            name="lastname"
            value={formData.lastname}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <label
          for="countries"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select Semester
        </label>
        <select
          name="semester"
          value={formData.semester}
          onChange={handlechange}
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Email
          </label>
          <input
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Password
          </label>
          <input
            placeholder="PassWord"
            name="password"
            value={formData.password}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Confirm Password
          </label>
          <input
            placeholder="Confirm Password"
            name="cpassword"
            value={formData.cpassword}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <Footer></Footer>
    </>
  );
};

export default Signup;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import axios from "axios";

const Login = () => {
  const [formData, setformData] = useState({
    email: "",
    password: "",
    usertype: "student",
  });
  const navigation = useNavigate();
  const [errormsg, seterrorMsg] = useState("");

  const handlechange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    if (formData.usertype == "student") {
      try {
        const response = await axios.post(
          "http://localhost:8080/login",
          formData
        );
        const user = response.data.usertype;
        if (user === "admin") {
          seterrorMsg("Invalid Credentials");
        }
        if (user === "student") {
          navigation("/courselist");
        }
        console.log("Responce", response);
      } catch (error) {
        console.log(error);
        seterrorMsg("Invalid Credentials");
      }
    } else if (formData.usertype === "faculty") {
      try {
        const response = await axios.post(
          "http://localhost:8080/loginfaculty",
          formData
        );
        console.log(response);
        if (response.data.message === "Done") {
          navigation("/facultyhome");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.post(
          "http://localhost:8080/login",
          formData
        );
        const user = response.data.usertype;
        if (user === "student") {
          seterrorMsg("Invalid Credentials");
        }
        if (user === "admin") {
          navigation("/admin");
        }

        console.log("Responce", response);
      } catch (error) {
        console.log(error);
        seterrorMsg("Invalid Credentials");
      }
    }
  };
  return (
    <>
      <Navbar></Navbar>
      <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
        Login
      </h1>
      {errormsg && <div>{errormsg}</div>}

      <form onSubmit={handlesubmit} class="max-w-sm mx-auto">
        <div class="mb-5">
          <select
            name="usertype"
            value={formData.usertype}
            onChange={handlechange}
          >
            <option value="student">Student</option>
            <option value="faculty">Faculty</option>
            <option value="admin">Admin</option>
          </select>
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Your email
          </label>
          <input
            type="email"
            id="email"
            for="email"
            placeholder="Enter email"
            name="email"
            value={formData.email}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-5">
          <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            Your password
          </label>
          <input
            type="password"
            id="password"
            for="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handlechange}
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>

      <Footer></Footer>
    </>
  );
};

export default Login;

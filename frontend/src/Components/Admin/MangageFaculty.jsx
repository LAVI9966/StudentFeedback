import React, { useState } from "react";
import axios from "axios";
import Facultydetail from "./Facultydetail";

const MangageFaculty = () => {
  const [facultydata, setfacultydata] = useState({
    username: "",
    fullname: "",
    fid: "",
    department: "",
    email: "",
    password: "",
  });
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8080/addfaculty",
        facultydata,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleformdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setfacultydata({ ...facultydata, [name]: value });
  };
  return (
    <>
      <h1>ye page data store kar raha he</h1>
      <h1>faculty add</h1>
      <form onSubmit={handlesubmit}>
        <label>Username</label>
        <input
          type="text"
          onChange={handleformdata}
          name="username"
          value={facultydata.username}
        />
        <label>Full Name</label>
        <input
          type="text"
          onChange={handleformdata}
          name="fullname"
          value={facultydata.fullname}
        />
        <label>Fid</label>
        <input
          type="text"
          onChange={handleformdata}
          name="fid"
          value={facultydata.fid}
        />
        <label>Department</label>
        <input
          type="text"
          onChange={handleformdata}
          name="department"
          value={facultydata.department}
        />
        <label>email</label>
        <input
          type="text"
          onChange={handleformdata}
          name="email"
          value={facultydata.email}
        />
        <label>Password</label>
        <input
          type="text"
          onChange={handleformdata}
          name="password"
          value={facultydata.password}
        />
        <button type="submit" onClick={handleformdata}>
          Add faculty
        </button>
      </form>
      <Facultydetail></Facultydetail>
    </>
  );
};

export default MangageFaculty;

import React, { useState } from "react";
import axios from "axios";
import Facultydetail from "./Facultydetail";
import { useParams } from "react-router-dom";

const MangageFaculty = () => {
  const { cd } = useParams();
  const data = JSON.parse(cd);
  console.log("llllllllllllllll", data);

  const [facultydata, setfacultydata] = useState({
    fullname: "",
    courseid: data.cid,
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
      console.log("added");
    } catch (error) {
      console.log(error);
    }
  };
  const fun = (fetch) => {
    fetch();
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
        <label>Full Name</label>
        <input
          type="text"
          onChange={handleformdata}
          name="fullname"
          value={facultydata.fullname}
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
      <Facultydetail data={data}></Facultydetail>
    </>
  );
};

export default MangageFaculty;

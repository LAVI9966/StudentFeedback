import React from "react";
import { useState } from "react";
import axios from "axios";

const Addcourse = () => {
  const [coursedata, setcoursedata] = useState({
    coursename: "",
    coursecode: "",
    semester: "",
  });
  const handleformdata = async (e) => {
    e.preventDefault();
    const respose = await axios.post(
      "http://localhost:8080/addcourse",
      coursedata
    );
    console.log(respose);
    console.log("helo");
  };

  const handledata = (e) => {
    const { name, value } = e.target;
    setcoursedata({ ...coursedata, [name]: value });
    console.log(e.target.value);
  };
  return (
    <>
      <h1>Add Course Details</h1>
      <form onSubmit={handleformdata}>
        <label htmlFor="">Course name</label>
        <input
          name="coursename"
          value={coursedata.coursename}
          onChange={handledata}
        ></input>
        <label htmlFor="">Course code</label>
        <input
          name="coursecode"
          value={coursedata.coursecode}
          onChange={handledata}
        ></input>
        <label htmlFor="">Semester</label>
        <input
          name="semester"
          value={coursedata.semester}
          onChange={handledata}
        ></input>
        <button type="submit">Add Course</button>
      </form>
    </>
  );
};

export default Addcourse;

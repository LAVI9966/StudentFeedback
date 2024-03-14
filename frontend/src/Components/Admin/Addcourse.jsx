import React from "react";
import { useState } from "react";

const Addcourse = () => {
  const [coursedata, setcoursedata] = useState({
    coursename: "",
    coursecode: "",
  });
  const handleformdata = (e) => {
    e.preventDefault();
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
        <button type="submit">Add Course</button>
      </form>
    </>
  );
};

export default Addcourse;

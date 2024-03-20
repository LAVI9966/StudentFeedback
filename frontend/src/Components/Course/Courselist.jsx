import React, { useEffect, useState } from "react";
import Course from "./Course.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import axios from "axios";
const Courselist = () => {
  const [coursedata, setcoursedata] = useState([]);
  useEffect(() => {
    const fetchcourse = async () => {
      const response = await axios.get("http://localhost:8080/fetchcourse");
      console.log(response.data);
      setcoursedata(response.data);
    };
    fetchcourse();
  }, []);
  console.log(coursedata);
  return (
    <>
      <Navbar></Navbar>
      {coursedata.map((cou) => {
        return (
          <div className="courselistcard">
            <Course
              key={cou.coursecode}
              name={cou.coursename}
              code={cou.coursecode}
            />
          </div>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default Courselist;

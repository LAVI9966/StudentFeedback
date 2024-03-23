import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Course from "./Course.jsx";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
import axios from "axios";

const Courselist = () => {
  const location = useLocation();
  const datatomanage = location.state?.datatomanage;

  console.log(`Semester: ${datatomanage.sem}`);
  const [coursedata, setcoursedata] = useState([]);
  useEffect(() => {
    const fetchcourse = async () => {
      const response = await axios.get(
        `http://localhost:8080/fetchcourse?semester=${datatomanage.sem}`
      );
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
              key={cou._id}
              C_id={cou._id}
              name={cou.coursename}
              code={cou.coursecode}
              datatomanage={datatomanage}
            />
          </div>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default Courselist;

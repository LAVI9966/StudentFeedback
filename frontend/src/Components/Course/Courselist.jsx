import React from "react";
import Course from "./Course.jsx";
import coursedata from "./coursedata.js";
import Navbar from "../Navbar.jsx";
import Footer from "../Footer.jsx";
const Courselist = () => {
  return (
    <>
      <Navbar></Navbar>
      {coursedata.map((cou) => {
        return (
          <div className="courselistcard">
            <Course key={cou.code} name={cou.name} code={cou.code} />
          </div>
        );
      })}
      <Footer></Footer>
    </>
  );
};

export default Courselist;

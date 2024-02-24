import React from "react";
import Course from "./Course.jsx";
import coursedata from "./coursedata.js";
const Courselist = () => {
  return (
    <>
      {coursedata.map((cou) => {
        return <Course key={cou.code} name={cou.name} code={cou.code} />;
      })}
    </>
  );
};

export default Courselist;

import React, { useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
const Facultydetail = () => {
  const [displaydata, setdisplaydata] = useState("Data");

  const fetch = async () => {
    const response = await axios.get("http://localhost:8080/fetchfaculty");
    console.log(response);
    const to_display = JSON.stringify(response);
    setdisplaydata(to_display);
  };

  return (
    <div>
      Facultydetail
      <button onClick={fetch}>===fetch===</button>
      {displaydata}
    </div>
  );
};

export default Facultydetail;

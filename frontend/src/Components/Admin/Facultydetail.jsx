import React, { useEffect, useState } from "react";
import axios from "axios";
import { json } from "react-router-dom";
import ManageFacultyCard from "./ManageFacultyCard";
import { useContext } from "react";
import { FacultyContext } from "./Facultycontex";

const indev = {
  background: "red",
};

const Facultydetail = ({ fun }) => {
  const [displaydata, setdisplaydata] = useState([]);

  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
    const response = await axios.get("http://localhost:8080/fetchfaculty");
    console.log(response);
    // const to_display = JSON.stringify(response);
    const data = await response.data;
    setdisplaydata(data);
    console.log("fetch call hua");
  };
  fun(fetch);
  const handledelete = async (id) => {
    const delreponse = await axios.delete(
      `http://localhost:8080/deletefaculty/${id}`
    );
  };
  return (
    <div>
      Facultydetail
      <button onClick={fetch}>===fetch===</button>
      <div style={indev}>
        {displaydata.map((item) => (
          <ManageFacultyCard
            handledelete={handledelete}
            item={item}
          ></ManageFacultyCard>
        ))}
      </div>
    </div>
  );
};

export default Facultydetail;

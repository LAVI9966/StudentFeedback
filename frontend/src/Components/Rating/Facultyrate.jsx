import React, { useState } from "react";
import FacultyRating from "./FacultyRating";
import axios from "axios";
import { useParams } from "react-router-dom";

const Facultyrate = () => {
  const { fc } = useParams();
  const fdata = JSON.parse(fc);
  const intialvalue = [
    { id: 1, rating: 0 },
    { id: 2, rating: 0 },
    { id: 3, rating: 0 },
    { id: 4, rating: 0 },
    { id: 5, rating: 0 },
  ];
  const [facultyratingarr, setfacultyratingarr] = useState(intialvalue);

  const handleratings = (event, cid) => {
    const newratings = facultyratingarr.map((item) => {
      if (cid === item.id) {
        return { ...item, rating: event.target.value };
      }
      return item;
    });
    setfacultyratingarr(newratings);
    // console.log(newratings);
  };
  const sendRating = async () => {
    const response = await axios.post("http://localhost:8080/facultyrate", {
      facultyratingarr,
      fdata,
    });
    console.log(response.data);
    // window.location.reload();
    setfacultyratingarr(intialvalue);
  };
  return (
    <>
      {facultyratingarr.map((faculty) => (
        <FacultyRating
          key={faculty.id}
          id={faculty.id}
          handleratings={handleratings}
        />
      ))}
      <button onClick={sendRating} className="btn btn-primary">
        Submit
      </button>
    </>
  );
};

export default Facultyrate;

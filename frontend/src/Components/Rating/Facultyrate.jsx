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
    console.log(facultyratingarr);
    try {
      const response = await axios.post("http://localhost:8080/facultyrate", {
        facultyratingarr,
        fdata,
      });
      console.log(response.data);
      window.location.reload();
      setfacultyratingarr(intialvalue);
    } catch (error) {
      console.log(error);
    }
  };
  const ratecon = [
    {
      heading: "Teaching Methods",
      description:
        "Did the teacher effectively use a variety of teaching methods and strategies ?",
    },
    {
      heading: "Clarity and Communication",
      description:
        "Was the teacher's communication clear and easy to understand?",
    },
    {
      heading: "Availability and Responsiveness",
      description:
        "Did the teacher make themselves available for questions and support ?",
    },
    {
      heading: "Knowledge and Expertise",
      description: "Did the teacher demonstrate",
    },
    {
      heading: "Demo 5",
      description: "Demo Description 5",
    },
  ];
  return (
    <>
      {facultyratingarr.map((faculty, i) => (
        <FacultyRating
          key={faculty.id}
          id={faculty.id}
          content={ratecon[i]}
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

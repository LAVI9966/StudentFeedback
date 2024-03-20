import React, { useState } from "react";
import CourseRating from "./CourseRating";
import { useParams } from "react-router-dom";
import axios from "axios";

const Courserate = () => {
  const { cd } = useParams();
  const cdata = JSON.parse(cd);

  const intialvalue = [
    { id: 1, rating: 0 },
    { id: 2, rating: 0 },
    { id: 3, rating: 0 },
    { id: 4, rating: 0 },
    { id: 5, rating: 0 },
  ];
  const [courseratingarr, setcourseratingarr] = useState(intialvalue);

  const handleratings = (event, cid) => {
    const newratings = courseratingarr.map((item) => {
      if (cid === item.id) {
        return { ...item, rating: event.target.value };
      }
      return item;
    });
    setcourseratingarr(newratings);
    console.log("course code is ", cdata.code);
    console.log(newratings);
  };
  const sendRating = async () => {
    try {
      const response = await axios.post("http://localhost:8080/courserate", {
        courseratingarr,
        cdata,
      });
      console.log(response.data);
      // window.location.reload();
      setcourseratingarr(intialvalue);
    } catch (error) {
      console.log(error);
    }
  };
  const ratecon = [
    {
      heading: "Overall Course Experience",
      description:
        "On a scale of 1-5 , how Would you rate your ocerall experience in this course",
    },
    {
      heading: "Course Content",
      description:
        "Did the course content align with your expectations and goals?",
    },
    {
      heading: "Course Goals and Outcome",
      description:
        "Did you feel that you achieved the learning objectives and goals of this course?",
    },
    {
      heading: "Course Structure and Organization",
      description: "How well was the course organized and structured?",
    },
    {
      heading: "Demo 5",
      description: "Demo Description 5",
    },
  ];
  return (
    <>
      <h1>
        You Are Rating {cdata.name} subject code {cdata.code}
      </h1>
      {courseratingarr.map((course, i) => (
        <CourseRating
          key={course.id}
          id={course.id}
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

export default Courserate;

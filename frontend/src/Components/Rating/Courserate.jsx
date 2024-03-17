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
  return (
    <>
      {courseratingarr.map((course) => (
        <CourseRating
          key={course.id}
          id={course.id}
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

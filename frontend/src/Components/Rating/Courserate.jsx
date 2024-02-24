import React, { useState } from "react";
import CourseRating from "./CourseRating";

const Courserate = () => {
  const [courseratingarr, setcourseratingarr] = useState([
    { id: "1", rating: 0 },
    { id: "2", rating: 0 },
    { id: "3", rating: 0 },
    { id: "4", rating: 0 },
    { id: "5", rating: 0 },
  ]);
  const handleratings = (event, cid) => {
    // console.log(event.target.value);
    // console.log("Id is ", cid);
    const newratings = courseratingarr.map((item) => {
      if (item.id === cid) {
        item.rating = event.target.value;
      }
    });
    setcourseratingarr(newratings);
    console.log(newratings);
  };
  return (
    <>
      <CourseRating id="1" handleratings={handleratings}></CourseRating>;
      <CourseRating id="2" handleratings={handleratings}></CourseRating>;
      <CourseRating id="3" handleratings={handleratings}></CourseRating>;
      <CourseRating id="4" handleratings={handleratings}></CourseRating>;
      <CourseRating id="5" handleratings={handleratings}></CourseRating>;
    </>
  );
};

export default Courserate;

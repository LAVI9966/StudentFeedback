import React, { useEffect, useState } from "react";
import axios from "axios";
import CourseFeedbackCard from "./CourseFeedbackCard";

const CourseFeedback = () => {
  const [data, setdata] = useState(null);
  const [subjects, setsubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/fetchcourseratings"
        );
        setdata(response.data);
        // const response = fetch("http://localhost:8080/fetchcourseratings")
        //   .then((res) => res.json())
        //   .then((obj) => setdata(obj));
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log("This is data aprt ", data);
  console.log("This is subject part ", subjects);
  useEffect(() => {
    if (data) {
      const newSubjects = data.map((item) => ({
        name: item.name,
        code: item.code,
        ratings: item.rating.map((ratingItem) => ratingItem.rating),
      }));

      setsubjects(newSubjects);
    }
  }, [data]);
  console.log(subjects);
  let result = {};
  subjects.forEach((item) => {
    if (!result[item.name]) {
      result[item.name] = { name: item.name, totalratings: 0, ratingigot: 0 };
    }
    result[item.name].totalratings += item.ratings.length * 5;
    result[item.name].ratingigot += item.ratings.reduce(
      (acc, curr) => acc + curr,
      0
    );
  });
  result = Object.values(result);
  console.log("Result array ", result);
  const finalratings = [];
  result.map((item) => {
    const rating = (item.ratingigot / item.totalratings) * 5;
    const d = {
      name: item.name,
      calcurat: rating,
    };
    finalratings.push(d);
    console.log(
      `The course name is ${item.name} and the final rating is ${rating}`
    );
  });
  console.log(finalratings);
  return (
    <>
      {finalratings.map((item) => {
        return (
          <CourseFeedbackCard
            name={item.name}
            rating={item.calcurat}
            result={result}
          ></CourseFeedbackCard>
        );
      })}
    </>
  );
};

export default CourseFeedback;

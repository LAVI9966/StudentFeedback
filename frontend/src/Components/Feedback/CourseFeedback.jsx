import React, { useEffect, useState } from "react";
import axios from "axios";

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
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  console.log(data);
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
  console.log(result);
  return <>CourseFeddback Redner here fo all user same</>;
};

export default CourseFeedback;

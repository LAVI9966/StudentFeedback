import React, { useEffect, useState } from "react";
import Addcourse from "./Addcourse";
import axios from "axios";
import Course from "./Course";
const Coursesad = () => {
  const [coursedata, setcoursedata] = useState([]);
  const [formdata, setformData] = useState({
    sem: "1",
  });

  useEffect(() => {
    const fetchcourse = async () => {
      const response = await axios.get(
        `http://localhost:8080/fetchcourse?semester=${formdata.sem}`
      );
      console.log(response.data);
      setcoursedata(response.data);
    };
    fetchcourse();
  }, []);
  const handlechange = (e) => {
    const newsem = e.target.value;
    const { name, value } = e.target;
    setformData({ ...formdata, [name]: value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const response = await axios.get(
      `http://localhost:8080/fetchcourse?semester=${formdata.sem}`
    );
    console.log(response.data);
    setcoursedata(response.data);
  };
  console.log(coursedata);
  return (
    <>
      <div>
        <h1>----------Add Courses------------ </h1>
        <Addcourse></Addcourse>

        <h1>courses on the basis of semester</h1>
        <form onSubmit={handlesubmit}>
          <select name="sem" id="" value={formdata.sem} onChange={handlechange}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </select>
          <button type="submit">Fetch</button>
        </form>
        <div>
          {coursedata.map((item) => {
            return (
              <Course
                coursecode={item.coursecode}
                coursename={item.coursename}
                semester={item.semester}
                cid={item._id}
              ></Course>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Coursesad;

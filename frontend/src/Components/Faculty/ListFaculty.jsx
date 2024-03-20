import React, { useEffect, useState } from "react";
import Faculty from "./Faculty";
const ListFaculty = () => {
  const [facultydata, setfaultydata] = useState([]);
  useEffect(() => {
    const fetchfaculty = () => {
      const response = fetch("http://localhost:8080/fetchfaculty")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setfaultydata(data);
        });
    };
    fetchfaculty();
  }, []);
  console.log(facultydata);
  return (
    <>
      {facultydata.map((fac) => {
        return <Faculty name={fac.username} empid={fac.fid} />;
      })}
    </>
  );
};

export default ListFaculty;

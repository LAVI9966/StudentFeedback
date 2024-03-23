import React, { useEffect, useState } from "react";
import Faculty from "./Faculty";
import { useParams } from "react-router-dom";
const ListFaculty = () => {
  const { cd } = useParams();
  const data = JSON.parse(cd);
  console.log("hihh", data);
  const [facultydata, setfaultydata] = useState([]);
  useEffect(() => {
    const fetchfaculty = () => {
      const response = fetch(`http://localhost:8080/fetchfaculty/${data.C_id}`)
        .then((res) => res.json())
        .then((data1) => {
          console.log(data1);
          setfaultydata(data1);
        });
    };
    fetchfaculty();
  }, []);
  console.log("faculty fetched data ", facultydata);
  return (
    <>
      {facultydata.map((fac) => {
        return <Faculty data={data} fac={fac} />;
      })}
    </>
  );
};

export default ListFaculty;

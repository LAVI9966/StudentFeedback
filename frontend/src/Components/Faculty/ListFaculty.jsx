import React from "react";
import Faculty from "./Faculty";
const ListFaculty = () => {
  const facultydata = [
    { id: 1, name: "Narendra sir", empid: "0827c1" },
    { id: 2, name: "praveen sir", empid: "0827c2" },
    { id: 3, name: "poonam mam", empid: "0827c3" },
    { id: 4, name: "shradhdha mama", empid: "0827c4" },
  ];
  return (
    <>
      {facultydata.map((fac) => {
        return <Faculty name={fac.name} empid={fac.empid} />;
      })}
    </>
  );
};

export default ListFaculty;

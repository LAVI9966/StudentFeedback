import React from "react";
import axios from "axios";
const ManageFacultyCard = ({ item, handledelete }) => {
  console.log("item ", item);
  const id = item._id;

  return (
    <>
      <div>
        {" "}
        <label htmlFor="">this is username =</label>
        {item.username}
      </div>
      ;
      <div>
        <label htmlFor="">this is fullname =</label>
        {item.fullname}
      </div>
      ;
      <div>
        <label htmlFor="">this is email= </label>
        {item.email}
      </div>
      <div>
        <button
          onClick={() => {
            handledelete(id);
          }}
        >
          DELETE
        </button>
      </div>
      ;
    </>
  );
};

export default ManageFacultyCard;

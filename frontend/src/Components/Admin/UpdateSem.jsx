import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

const UpdateSem = () => {
  const { datatomanage } = useParams();
  console.log(datatomanage);
  const datatomanag = JSON.parse(datatomanage);

  const [data, setdata] = useState({
    sem: "1",
  });

  const handlechange = (e) => {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    console.log(datatomanage);
    try {
      const responce = await axios.put(`http://localhost:8080/updatesem`, {
        data,
        datatomanag,
      });
      console.log(responce);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1>Update sem</h1>
      <form onSubmit={handlesubmit}>
        <select name="sem" onChange={handlechange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
        </select>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateSem;

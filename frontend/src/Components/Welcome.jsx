import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Welcome = () => {
  const calwelcomepage = async () => {
    const history = useNavigate();
    try {
      const res = await axios.get("http://localhost:8080/welcome", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });

      const data = await res.json();
      if (!res.status === 200) {
        throw new Error(res.error);
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  useEffect(() => {
    calwelcomepage();
  });
  return <div>Welcome</div>;
};

export default Welcome;

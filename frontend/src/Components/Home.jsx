import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Welcome to Student Feedback System</h1>
      <h3>Give your valueable feedback</h3>
      <h6>for Future reference</h6>
      <Link to="/login">
        <button className="btn btn-warning">Get Started</button>
      </Link>
    </>
  );
};

export default Home;

import React from "react";

import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <>
      <Link to="coursefeedback">
        <button className="btn btn-primary">Course Feedback</button>
      </Link>
      <Link to="facultyfeedback">
        <button className="btn btn-primary">Faculty Feedback</button>
      </Link>
    </>
  );
};

export default Feedback;

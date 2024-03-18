import React from "react";
import { Link } from "react-router-dom";

const Course = ({ name, code }) => {
  const cd = {
    name,
    code,
  };
  return (
    <>
      <div class="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {name}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{code}</p>
        <Link to={`/courserate/${JSON.stringify(cd)}`}>
          <button className="btn btn-primary">Rate Course</button>
        </Link>
        <Link to="/listfaculty">
          <button className="btn btn-primary">View Faculty</button>
        </Link>
      </div>
    </>
  );
};

export default Course;

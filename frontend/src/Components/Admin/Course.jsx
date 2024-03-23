import React from "react";
import { Link } from "react-router-dom";

const Course = ({ coursename, coursecode, semester, cid }) => {
  const cd = {
    coursename,
    coursecode,
    semester,
    cid,
  };
  return (
    <>
      <div class="max-w-sm w-full p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {coursename}
          </h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {coursecode}
        </p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          semester = {semester}
        </p>
        <Link to={`/addfaculty/${JSON.stringify(cd)}`}>
          <button className="btn btn-primary">Add Faculty</button>
        </Link>
      </div>
    </>
  );
};

export default Course;

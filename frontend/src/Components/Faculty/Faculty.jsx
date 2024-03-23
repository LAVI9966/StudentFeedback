import React from "react";
import { Link } from "react-router-dom";

const Faculty = ({ data, fac }) => {
  const fc = {
    data,
    fac,
  };
  return (
    <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
          {fac.fullname}
        </h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        Semester = {data.datatomanage.sem}
      </p>
      <Link to={`/facultyrate/${JSON.stringify(fc)}`}>
        <button className="btn btn-primary">Rate</button>
      </Link>
    </div>
  );
};

export default Faculty;

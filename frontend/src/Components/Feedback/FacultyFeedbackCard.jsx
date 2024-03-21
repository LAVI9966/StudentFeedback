import React from "react";
import DisplayChart from "./DisplayChart";

const CourseFeedbackCard = ({ name, rating, result }) => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <DisplayChart ratings={result}></DisplayChart>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Subject : {name}</h5>
              <p class="card-text">
                The OverAll Rating For this Faculty is {rating}
              </p>

              <p class="card-text">
                Course theached by this faculty :{" "}
                <button className="btn btn-primary">View Faculty</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseFeedbackCard;

import React from "react";
const CourseFeedbackCard = ({ name, rating }) => {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="..." class="img-fluid rounded-start" alt="..." />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Subject : {name}</h5>
              <p class="card-text">
                The OverAll Rating For this Faculty is {rating}
              </p>
              <p class="card-text">
                Last updated 3 mins ago :{" "}
                <button className="btn btn-primary">View </button>
              </p>
              <p class="card-text">
                Faculty Who teach this Subject :{" "}
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

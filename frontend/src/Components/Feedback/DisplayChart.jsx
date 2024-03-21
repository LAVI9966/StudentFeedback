import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PopupRatings from "./PopupRatings";

const DisplayChart = ({ ratings }) => {
  const totalRating = ratings.totalratings;
  const userRating = ratings.ratingigot;
  const percentage = (userRating / totalRating) * 100;
  console.log(ratings);
  return (
    <div>
      <div style={{ width: 250, height: 250 }}>
        <CircularProgressbar value={percentage} text={`${percentage}%`} />;
      </div>
      <h2>OverAll Rating Percentag</h2>
      <h1>
        View On Indivisualy Points{" "}
        <button className="btn btn-primary">
          <PopupRatings></PopupRatings>
        </button>
      </h1>
      {/* <p>Total Rating: {totalRating}</p>
      <p>User Rating: {userRating}</p> */}
    </div>
  );
};

export default DisplayChart;

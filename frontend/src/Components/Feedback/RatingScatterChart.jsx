import React from "react";
import { Scatter } from "react-chartjs-2";
// import { Chart as ChartJS } from "chart.js/auto";

const RatingScatterChart = ({ ratings }) => {
  const ratingPoints = [
    {
      heading: "Overall Course Experience",
      description:
        "On a scale of 1-5 , how Would you rate your ocerall experience in this course",
    },
    {
      heading: "Course Content",
      description:
        "Did the course content align with your expectations and goals?",
    },
    {
      heading: "Course Goals and Outcome",
      description:
        "Did you feel that you achieved the learning objectives and goals of this course?",
    },
    {
      heading: "Course Structure and Organization",
      description: "How well was the course organized and structured?",
    },
    {
      heading: "Demo 5",
      description: "Demo Description 5",
    },
  ];
  const data = {
    datasets: [
      {
        label: "Rating Distribution",
        data: ratings.map((rating, index) => ({
          x: index + 1,
          y: rating,
        })),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Rating Points",
        },
        ticks: {
          stepSize: 1,
          callback: (value) => ratingPoints[value - 1]?.heading || "",
        },
      },
      y: {
        title: {
          display: true,
          text: "Rating",
        },
        suggestedMin: 1,
        suggestedMax: 5,
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return <Scatter data={data} options={options} />;
};

export default RatingScatterChart;

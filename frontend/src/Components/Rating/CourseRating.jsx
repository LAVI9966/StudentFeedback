import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const CourseRating = ({ id, handleratings }) => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">Controlled</Typography>
      <Rating
        name="simple-controlled"
        value={value}
        onClick={(event) => {
          handleratings(event, id);
        }}
        onChange={(event, newValue) => {
          setValue(newValue);
          console.log(newValue);
        }}
      />
    </Box>
  );
};

export default CourseRating;

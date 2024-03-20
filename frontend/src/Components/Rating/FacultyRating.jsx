import React, { useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";

const FacultyRating = ({ id, handleratings, content }) => {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        "& > legend": { mt: 2 },
      }}
    >
      <Typography component="legend">{content.heading}</Typography>
      <p>{content.description}</p>
      <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          // console.log(newValue);
        }}
        onClick={(event) => {
          handleratings(event, id);
        }}
      />
    </Box>
  );
};

export default FacultyRating;

import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

interface AddRideFrom {}

const AddRideFrom = ({}: AddRideFrom) => {
  const [clickedDrop, setClickedDrop] = useState(false);

  const handleClick = () => {
    setClickedDrop(!clickedDrop);
  };

  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        border: "1px solid #ffff",
      }}
    ></Box>
  );
};

export default AddRideFrom;

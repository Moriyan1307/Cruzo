import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IDateAttributes } from "@/utils/types";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";

import { Mont, Roboto, theme } from "@/utils/styleUtils";
import AddDateTab from "../Tabs/AddDateTab";

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

import { Box } from "@mui/material";
import React from "react";
import { theme } from "../../Utils/styleUtils";

function RideLog() {
  return (
    <Box
      sx={{
        height: "90%",
        width: "100%",
        padding: "10px",
      }}
    >
      <Box
        sx={{
          height: "8%",
          border: "0.5px solid #fff",
          backgroundColor: theme.box,
          borderRadius: "10px",
        }}
      ></Box>
    </Box>
  );
}

export default RideLog;

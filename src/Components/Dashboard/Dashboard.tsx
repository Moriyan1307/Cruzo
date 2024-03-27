import { Box } from "@mui/material";
import React from "react";
import { hrPad, vrPad } from "@/Utils/styleUtils";

function dashboard() {
  return (
    <Box
      sx={{
        ...hrPad,
        ...vrPad,
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box sx={{ border: "2px solid #000" }}>RIdeShare</Box>
    </Box>
  );
}

export default dashboard;

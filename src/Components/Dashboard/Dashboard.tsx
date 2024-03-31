import { Box } from "@mui/material";
import React from "react";
import { hrPad, theme, vrPad } from "@/Utils/styleUtils";
import Header from "../Header/Header";
import RideLog from "../RIdeLog/RideLog";

function dashboard() {
  return (
    <Box
      sx={{
        ...hrPad,
        ...vrPad,
        height: "100vh",
        width: "100vw",
        backgroundColor: theme.primary,
      }}
    >
      <Header />
      <RideLog />
    </Box>
  );
}

export default dashboard;

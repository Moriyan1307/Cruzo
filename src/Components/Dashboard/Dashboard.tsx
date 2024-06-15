import { Box } from "@mui/material";
import React from "react";
import { hrPad, theme, vrPad } from "../../Utils/styleUtils";
import RideLog from "@/components/RideLogMain/RideLogMain";

import Header from "../Header/Header";

interface Dashboard {}

const Dashboard = ({}: Dashboard) => {
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
};

export default Dashboard;

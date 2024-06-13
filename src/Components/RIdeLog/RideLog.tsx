import { Box, colors } from "@mui/material";
import React from "react";
import { theme } from "../../utils/styleUtils";
import AddIcon from "@mui/icons-material/Add";
import AddDateTab from "../Tabs/AddDateTab";
import DateCard from "../Cards/DateCard";
import { IDateAttributes } from "@/utils/types";

const dateData: IDateAttributes[] = [
  {
    date: "3/17",
    day: "Monday",
    rideDetails: [
      {
        from: "DFW",
        to: "Liv+",
        miles: 6,
        phone: 789,
        amount: 10,
        toll: 2,
      },
      {
        from: "Plano",
        to: "Liv+",
        miles: 6,
        phone: 789,
        amount: 10,
        toll: 2,
      },
    ],
  },
  {
    date: "3/18",
    day: "Tuesday",
    rideDetails: [
      {
        from: "dfw",
        to: "Liv+",
        miles: 6,
        phone: 789,
        amount: 10,
        toll: 2,
      },
    ],
  },
  {
    date: "3/19",
    day: "Wednesday",
    rideDetails: [
      {
        from: "dfw",
        to: "Liv+",
        miles: 6,
        phone: 789,
        amount: 10,
        toll: 2,
      },
    ],
  },
];
interface RideLog {}

const RideLog = ({}: RideLog) => {
  return (
    <Box
      sx={{
        height: "90%",
        width: "100%",
        padding: "10px",

        overflowY: "scroll",
      }}
    >
      <AddDateTab type={"Add Date"} />
      {dateData.map((res, index) => {
        return <DateCard key={index} dateData={res} />;
      })}
    </Box>
  );
};

export default RideLog;

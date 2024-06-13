import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../utils/styleUtils";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IDateAttributes } from "@/utils/types";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import RideCard from "./RideCard";

interface DateCard {
  dateData: IDateAttributes;
}

const DateCard = ({ dateData }: DateCard) => {
  const [clickedDrop, setClickedDrop] = useState(false);

  const handleClick = () => {
    setClickedDrop(!clickedDrop);
  };

  console.log(dateData);

  let dateTab = (
    <Box
      sx={{
        height: "100px",
        width: "95%",
        margin: "auto",
        marginTop: "20px",
        borderRadius: "15px",
        backgroundColor: theme.box,
        display: "flex",
      }}
      onClick={handleClick}
    >
      <Box
        sx={{
          height: "100%",
          width: "70%",
          color: "white",
          display: "flex",
        }}
      >
        <Box
          sx={{
            fontSize: "27px",
            margin: "auto",
          }}
        >
          {dateData.date}
        </Box>
        <Box
          sx={{
            fontSize: "27px",
            margin: "auto",
            width: "50%",
          }}
        >
          {dateData.day}
        </Box>
      </Box>
      <Box
        sx={{
          height: "100%",
          width: "30%",
          display: "flex",
        }}
      >
        <Box
          sx={{
            height: "45px",
            width: "45px",
            border: "0.5px solid #fff",
            display: "flex",
            margin: "auto",
            borderRadius: "50%",
          }}
        >
          {clickedDrop ? (
            <ArrowDropUpIcon
              sx={{ color: "#fff", fontSize: 40, margin: "auto" }}
            />
          ) : (
            <ArrowDropDownIcon
              sx={{ color: "#fff", fontSize: 40, margin: "auto" }}
            />
          )}
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      {clickedDrop ? (
        <Box
          sx={{
            height: "auto",
            border: "0.5px solid #fff",
          }}
        >
          {dateTab}

          {dateData.rideDetails.map((res, index) => {
            return <RideCard key={index} rideDetails={res} />;
          })}
        </Box>
      ) : (
        dateTab
      )}
    </>
  );
};

export default DateCard;

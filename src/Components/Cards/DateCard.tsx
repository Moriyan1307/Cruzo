import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { IDateAttributes } from "../../Utils/types/index";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import RideCard from "./RideCard";
import { Mont, Roboto, theme } from "../../Utils/styleUtils";
import AddDateTab from "../Tabs/AddDateTab";
import AddRideFrom from "../Forms/AddRideFrom";

interface DateCard {
  dateData: IDateAttributes;
}

const DateCard = ({ dateData }: DateCard) => {
  const [clickedDrop, setClickedDrop] = useState(false);
  const [showAddRideForm, setShowAddRideForm] = useState(false);

  const handleClick = () => {
    setClickedDrop(!clickedDrop);
  };

  const handleDataFromChild = () => {
    setShowAddRideForm(!showAddRideForm);
  };

  useEffect(() => {}, [dateData]);

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
        color: theme.white,
      }}
      onClick={handleClick}
      className={Roboto.className}
    >
      <Box
        sx={{
          height: "100%",
          width: "70%",

          color: "white",
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            fontSize: "27px",
            margin: "auto",
            width: "30%",
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
            border: "1px solid #fff",
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
            color: theme.white,
            fontSize: theme.fontSecondary,
          }}
          className={Mont.className}
        >
          {dateTab}

          <Box
            sx={{
              height: "60px",

              width: "95%",
              margin: "auto",
              display: "flex",
              justifyContent: "space-around",
              marginBottom: "25px",
            }}
          >
            <Box
              sx={{
                height: "100%",
                width: "45%",
                borderRadius: "10px",
                marginTop: "10px",

                backgroundColor: theme.box,
                display: "flex",
              }}
            >
              <Box sx={{ margin: "auto" }}>Upcoming</Box>
            </Box>
            <Box
              sx={{
                height: "100%",
                width: "45%",
                borderRadius: "10px",
                marginTop: "10px",
                backgroundColor: theme.box,
                display: "flex",
              }}
            >
              {" "}
              <Box sx={{ margin: "auto" }}>Completed</Box>
            </Box>
          </Box>

          <Box onClick={() => setShowAddRideForm(!showAddRideForm)}>
            <AddDateTab width="90%" type={"Add Ride"} />
          </Box>

          {showAddRideForm && (
            <AddRideFrom
              handleFormClick={handleDataFromChild}
              id={dateData.id}
              type="ADD"
              rideDetails={dateData.rideDetails[0]}
            />
          )}

          {dateData.rideDetails.length > 0 ? (
            dateData.rideDetails.map((res, index) => (
              <RideCard key={index} rideDetails={res} id={dateData.id} />
            ))
          ) : (
            <Box sx={{ display: "flex", height: "20vh" }}>
              <Box sx={{ margin: "auto" }}>
                {" "}
                No Rides Added!
                <br />
                Please Add Ride To Get Started
              </Box>
            </Box>
          )}
        </Box>
      ) : (
        dateTab
      )}
    </>
  );
};

export default DateCard;

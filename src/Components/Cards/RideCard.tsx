import { Box, TextField, Typography, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../Utils/styleUtils";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { IRideAttributes } from "../../Utils/types";
import { Roboto_Condensed, Montserrat } from "next/font/google";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import dayjs from "dayjs";
import EditIcon from "@mui/icons-material/Edit";
import AddRideFrom from "../Forms/AddRideFrom";

const Roboto = Roboto_Condensed({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
});
const Mont = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

interface RideCard {
  rideDetails: IRideAttributes;
  id: string;
}

const RideCard = ({ rideDetails, id }: RideCard) => {
  const timestamp = rideDetails.time;
  const date = timestamp.toDate();
  const time = dayjs(date).format("h:mm A");

  const [showAddRideForm, setShowAddRideForm] = useState(false);

  const handleDataFromChild = () => {
    setShowAddRideForm(!showAddRideForm);
  };

  console.log(rideDetails);

  return (
    <>
      {showAddRideForm && (
        <AddRideFrom
          handleFormClick={handleDataFromChild}
          id={id}
          type="EDIT"
          rideDetails={rideDetails}
        />
      )}

      <Box
        sx={{
          width: "90%",
          margin: "auto",
          marginTop: "20px",
          display: "flex",
          color: theme.white,
          justifyContent: "space-between",
        }}
      >
        <Typography sx={{ fontSize: theme.fontSecondary }}>
          {rideDetails.name}
        </Typography>
        <Box sx={{ display: "flex" }}>
          <AccessTimeIcon sx={{ fontSize: 28, margin: "0", padding: "0" }} />
          <Typography
            sx={{ fontSize: theme.fontSecondary, marginLeft: "10px" }}
          >
            {time}
          </Typography>
        </Box>
      </Box>

      <Box
        className={Mont.className}
        sx={{
          height: "150px",
          width: "95%",
          margin: "auto",
          marginTop: "10px",
          borderRadius: "15px",
          backgroundColor: theme.box,
          border: `0.5px solid ${theme.green}`,
          display: "flex",
          flexDirection: "column",
          color: theme.white,
          fontSize: theme.fontSize,
        }}
      >
        <Box
          sx={{
            height: "50%",

            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "32%",

              display: "flex",
            }}
          >
            <Box sx={{ margin: "auto" }}>{rideDetails.from}</Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "32%",

              display: "flex",
            }}
          >
            <Box
              sx={{ margin: "auto", fontFamily: "sans-serif" }}
              className={Mont.className}
            >
              {rideDetails.miles} {"mi"}
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "32%",

              display: "flex",
            }}
          >
            <Box sx={{ margin: "auto" }}>{rideDetails.to}</Box>
          </Box>
        </Box>
        <Box
          sx={{
            height: "50%",

            width: "100%",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {" "}
          <Box
            sx={{
              height: "100%",
              width: "32%",

              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
              }}
            >
              <PersonIcon sx={{ fontSize: 35 }} /> <p>{" ."} 2</p>
            </Box>
          </Box>
          <Box
            sx={{
              height: "100%",
              width: "32%",

              display: "flex",
            }}
          >
            <Box
              sx={{
                margin: "auto",
                display: "flex",
              }}
            >
              {"$ "}
              {rideDetails.amount}
            </Box>
          </Box>
          <Box sx={{ height: "100%", width: "32%", display: "flex" }}>
            <Box
              onClick={() => setShowAddRideForm(!showAddRideForm)}
              sx={{
                margin: "auto",
                display: "flex",
                justifyContent: "space-around",
                //border: "1px solid #fff",
                width: "80%",
                borderRadius: "10px",
                background: "#2b2b2b",
                boxShadow: "-3px -3px 4px #121212, 1px 1px 1px #444444",
              }}
            >
              <EditIcon sx={{ fontSize: 35, margin: "5px" }} />{" "}
              {/* <Typography sx={{ fontSize: theme.fontSecondary }}>
                Edit
              </Typography> */}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default RideCard;

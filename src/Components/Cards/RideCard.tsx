import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../Utils/styleUtils";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { IRideAttributes } from "../../Utils/types";
import { Roboto_Condensed, Montserrat } from "next/font/google";

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
}

const RideCard = ({ rideDetails }: RideCard) => {
  console.log(rideDetails);
  const [first, setfirst] = useState();

  return (
    <Box
      className={Mont.className}
      sx={{
        height: "150px",
        width: "95%",
        margin: "auto",
        marginTop: "20px",
        borderRadius: "15px",
        backgroundColor: theme.box,
        border: `0.5px solid ${theme.green}`,
        display: "flex",
        flexDirection: "column",
        color: theme.white,
        fontSize: "25px",
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
        <Box sx={{ height: "100%", width: "32%" }}></Box>
      </Box>
    </Box>
  );
};

export default RideCard;

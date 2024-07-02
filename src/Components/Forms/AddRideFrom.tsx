// import { Box, Button } from "@mui/material";
// import React, { useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { collection, addDoc } from "firebase/firestore";
// import { db } from "../../../firebase";
// import { theme } from "@/Utils/styleUtils";

// interface AddRideFrom {
//   handleFormClick: () => void;
// }

// const AddRideFrom = ({ handleFormClick }: AddRideFrom) => {
//   const sendDataToParent = () => {
//     handleFormClick();
//   };

//   return (
//     <Box
//       sx={{
//         position: "absolute",
//         height: "100%",
//         width: "95%",
//         margin: "auto",
//         transform: "translate(-50%,-50%)",
//         top: "50%",
//         left: "50%",
//         background: "rgb(0,0,0,0.5)",
//         display: "flex",
//         color: theme.white,
//         fontSize: theme.fontSize,
//       }}
//     >
//       <Box
//         sx={{
//           height: "40%",
//           width: "100%",

//           margin: "auto",
//           background: theme.box,
//           borderRadius: "15px",
//           display: "flex",
//           flexDirection: "column",
//         }}
//       >
//         <Box
//           sx={{
//             height: "50%",

//             width: "100%",
//           }}
//         >
//           <CloseIcon
//             sx={{ fontSize: 30, margin: "20px" }}
//             onClick={sendDataToParent}
//           />
//           <p style={{ marginTop: "20px", marginLeft: "25%" }}> Select Date :</p>
//         </Box>
//         <Box sx={{ margin: "auto", color: "#000", padding: "20px" }}></Box>
//         <Button sx={{ margin: "auto", width: "40%" }}>OK</Button>
//       </Box>
//     </Box>
//   );
// };

// export default AddRideFrom;

import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { doc, updateDoc, arrayUnion, Timestamp } from "firebase/firestore";
import { db } from "../../../firebase";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { IRideAttributes } from "@/Utils/types";

const theme = createTheme({
  palette: {
    mode: "dark", // Dark mode
    primary: {
      main: "#bb86fc", // A soft purple, good for dark themes
    },
    secondary: {
      main: "#03dac6", // A teal that contrasts well with dark backgrounds
    },
    error: {
      main: "#cf6679", // Error red, should be easily visible
    },
    background: {
      default: "#121212", // Deep gray, typical for dark mode
      paper: "#242424",
    },
    text: {
      primary: "#ffffff", // Bright enough for readability
      secondary: "#e0e0e0", // Slightly dimmer for less crucial text elements
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    fontSize: 14, // Base font size
    h1: {
      fontSize: "2.125rem", // 34px
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.75rem", // 28px
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem", // 16px
    },
    button: {
      textTransform: "none", // Buttons with normal casing
    },
  },
  spacing: 8, // Default spacing multiplier
  shape: {
    borderRadius: 4, // Reduced border radius for a sharper look
  },
});

interface AddRideFormProps {
  handleFormClick: () => void;
  id: string;
  type?: string;
  rideDetails: IRideAttributes;
}

const AddRideForm = ({
  handleFormClick,
  id,
  type,
  rideDetails,
}: AddRideFormProps) => {
  // State for each input field
  const [amount, setAmount] = useState<number | undefined>(0);
  const [from, setFrom] = useState<string>("");
  const [name, setName] = useState<string | undefined>("");
  const [to, setTo] = useState<string>("");
  const [toll, setToll] = useState<number>(0);
  const [phone, setPhone] = useState<number>(0);
  const [miles, setMiles] = useState<number>(0);
  const [time, setTime] = useState<Dayjs | null>(dayjs());

  useEffect(() => {
    if (type === "EDIT") {
      setName(rideDetails.name);
      setFrom(rideDetails.from);
      setTo(rideDetails.to);
      setToll(rideDetails.toll);
      setAmount(rideDetails.amount);
      setMiles(rideDetails.miles);
      setPhone(rideDetails.phone);
      setTime(dayjs((rideDetails.time as Timestamp).toDate()));
    }
  }, []);

  const handleSubmit = async () => {
    const docRef = doc(db, "dateData", id);

    try {
      await updateDoc(docRef, {
        rideDetails: arrayUnion({
          amount: amount,
          from: from,
          to: to,
          phone: phone,
          toll: toll,
          miles: miles,
          time: time ? Timestamp.fromDate(time.toDate()) : null,
          name: name,
        }),
      });
      console.log("Ride details updated successfully");
    } catch (error) {
      console.error("Error updating document: ", error);
    }
    handleFormClick();
  };

  console.log(time?.toDate());

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          position: "absolute",

          height: "100%",
          width: "95%",
          margin: "auto",
          transform: "translate(-50%, -50%)",
          top: "50%",
          left: "50%",
          background: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          flexDirection: "column",
          padding: theme.spacing(2),
          // borderRadius: theme.shape.borderRadius
          color: theme.palette.common.white,
        }}
      >
        <Box
          sx={{
            margin: "auto",
            width: { xs: "100%", sm: "85%" },
            background: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius,
            padding: theme.spacing(2),
          }}
        >
          <Typography
            variant="h6"
            sx={{ textAlign: "center", marginBottom: "20px" }}
          >
            {type == "ADD" ? <>Add Ride Details</> : <>Edit Ride Details</>}
          </Typography>

          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ marginBottom: theme.spacing(2), width: "100%" }}
          />
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="From"
              variant="outlined"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />
            <TextField
              label="To"
              variant="outlined"
              value={to}
              onChange={(e) => setTo(e.target.value)}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />
          </Box>

          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Amount"
              type="number"
              variant="outlined"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value))}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />

            <TextField
              label="Miles"
              type="number"
              variant="outlined"
              value={miles}
              onChange={(e) => setMiles(parseFloat(e.target.value))}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              value={time}
              onChange={(newTime) => setTime(newTime)}
              label="Ride Time"
              sx={{ marginBottom: theme.spacing(2), width: "100%" }}
            />
          </LocalizationProvider>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Toll"
              type="number"
              variant="outlined"
              fullWidth
              value={toll}
              onChange={(e) => setToll(parseFloat(e.target.value))}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />
            <TextField
              label="Phone"
              type="number"
              variant="outlined"
              fullWidth
              value={phone}
              onChange={(e) => setPhone(parseInt(e.target.value, 10))}
              sx={{ marginBottom: theme.spacing(2), width: "48%" }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              margin: "20px",
            }}
          >
            <Button
              sx={{
                margin: "auto",
                width: { xs: "40%", sm: "30%" },
                height: { xs: "50px", sm: "40px" },
                color: "white",
                backgroundColor: "black",
                border: "0.5px solid #e0e0e0",
                "&:hover": {
                  backgroundColor: "red",
                },
              }}
              onClick={handleFormClick}
              startIcon={<CloseIcon />}
            >
              Cancel
            </Button>
            <Button
              sx={{
                margin: "auto",
                width: { xs: "40%", sm: "30%" },
                height: { xs: "50px", sm: "40px" },
                border: "0.5px solid #e0e0e0",
                color: "white",
                backgroundColor: "black",

                "&:hover": {
                  backgroundColor: "green",
                },
              }}
              onClick={handleSubmit}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default AddRideForm;

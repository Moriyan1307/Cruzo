import { Box, Button, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "@mui/icons-material/Close";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { theme } from "@/Utils/styleUtils";

interface AddDateFormProps {
  handleFormClick: () => void;
}

const AddDateForm: React.FC<AddDateFormProps> = ({ handleFormClick }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  const getDayOfWeek = (selectedDate: Date | null) => {
    if (selectedDate === null) {
      return "No date selected";
    }
    const day = selectedDate?.getDay();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[day];
  };

  const handleSubmit = async (e: any) => {
    const day = getDayOfWeek(selectedDate);
    console.log(day);

    try {
      const docRef = await addDoc(collection(db, "dateData"), {
        day: day,
        date: selectedDate,
        rideDetails: [],
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    handleFormClick();
  };
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.8)",
      }}
    >
      <Box
        sx={{
          width: "90%",
          maxWidth: "500px",
          bgcolor: theme.box,
          borderRadius: "16px",
          padding: 4,
          boxShadow: 24,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <IconButton
          onClick={handleFormClick}
          sx={{ alignSelf: "flex-end", color: "white" }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" sx={{ color: "white", marginBottom: 2 }}>
          Select Date
        </Typography>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          dateFormat="MM/dd/yyyy"
          inline
        />

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px",
            width: "80%",
          }}
        >
          {" "}
          <Button
            sx={{
              margin: "auto",
              width: { xs: "40%", sm: "30%" },
              height: { xs: "40px", sm: "40px" },
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
            onClick={handleSubmit}
            variant="contained"
            sx={{
              margin: "auto",
              width: { xs: "40%", sm: "30%" },
              height: { xs: "40px", sm: "40px" },
              border: "0.5px solid #e0e0e0",
              color: "white",
              backgroundColor: "black",

              "&:hover": {
                backgroundColor: "green",
              },
            }}
          >
            Confirm
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddDateForm;

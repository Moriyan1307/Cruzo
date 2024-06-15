import { Box, Button, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Mont, Roboto, theme } from "@/Utils/styleUtils";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CloseIcon from "@mui/icons-material/Close";
import { db } from "../../firebase/firebase";
import { collection, addDoc } from "firebase/firestore";

interface AddDateForm {
  handleFormClick: () => void;
}

const AddDateForm = ({ handleFormClick }: AddDateForm) => {
  const [clickedDrop, setClickedDrop] = useState(false);

  const handleClick = () => {
    setClickedDrop(!clickedDrop);
  };

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  console.log(selectedDate?.getDay());

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

  const sendDataToParent = () => {
    handleFormClick();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        height: "100%",
        width: "95%",
        margin: "auto",
        transform: "translate(-50%,-50%)",
        top: "50%",
        left: "50%",
        background: "rgb(0,0,0,0.5)",
        display: "flex",
        color: theme.white,
        fontSize: theme.fontSize,
      }}
    >
      <Box
        sx={{
          height: "40%",
          width: "100%",

          margin: "auto",
          background: theme.box,
          borderRadius: "15px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            height: "50%",

            width: "100%",
          }}
        >
          <CloseIcon
            sx={{ fontSize: 30, margin: "20px" }}
            onClick={sendDataToParent}
          />
          <p style={{ marginTop: "20px", marginLeft: "25%" }}> Select Date :</p>
        </Box>
        <Box sx={{ margin: "auto", color: "#000", padding: "20px" }}>
          <DatePicker
            selected={selectedDate}
            dateFormat="MM/dd/yyyy"
            onChange={handleDateChange}
          />
        </Box>
        <Button onClick={handleSubmit} sx={{ margin: "auto", width: "40%" }}>
          OK
        </Button>
      </Box>
    </Box>
  );
};

export default AddDateForm;

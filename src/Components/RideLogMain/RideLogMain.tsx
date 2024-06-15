import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddDateTab from "../Tabs/AddDateTab";
import DateCard from "../Cards/DateCard";
import { IDateAttributes } from "../../Utils/types/index";
import { collection, addDoc } from "firebase/firestore";
import AddDateForm from "../Forms/AddDateForm";
import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";

interface RideLogMain {}

export default function RideLogMain() {
  const [showAddDateForm, setShowAddDateFrom] = useState(false);
  const [dateData1, setDateData1] = useState<IDateAttributes[]>([
    { date: "", day: "", rideDetails: [] },
  ]);

  const handleDataFromChild = () => {
    setShowAddDateFrom(false);
  };

  const fetchDateData = async () => {
    const querySnapshot = await getDocs(collection(db, "dateData"));

    const newData: IDateAttributes[] = []; // Prepare an array to collect new data

    querySnapshot.forEach((doc) => {
      const seconds = doc.data().date?.seconds;
      const day = doc.data().day;
      const rideDetails = doc.data().rideDetails;

      const date = new Date(seconds * 1000);

      const readableDate = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        hour12: true, // Use 12-hour format with AM/PM
      });
      console.log(doc.data());

      newData.push({
        date: readableDate,
        day: day, // Assuming 'day' is also stored in the document
        rideDetails: rideDetails,
      });
    });

    setDateData1(newData);
  };

  useEffect(() => {
    fetchDateData(); // Call the async function
  }, []);

  return (
    <Box
      sx={{
        height: "90%",
        width: "100%",
        padding: "10px",
        overflowY: "scroll",
        position: "relative",
      }}
    >
      <Box onClick={() => setShowAddDateFrom(!showAddDateForm)}>
        <AddDateTab width="95%" type={"Add Date"} />
      </Box>

      {showAddDateForm && <AddDateForm handleFormClick={handleDataFromChild} />}

      {dateData1.map((res, index) => {
        console.log(res);
        return <DateCard key={index} dateData={res} />;
      })}
    </Box>
  );
}

import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddDateTab from "./AddDateTab";
import DateCard from "../Cards/DateCard";
import { IDateAttributes } from "../../Utils/types/index";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import AddDateForm from "../Forms/AddDateForm";
import { getDocs } from "firebase/firestore";
import { db } from "../../../firebase";
import { newDate } from "react-datepicker/dist/date_utils";

interface RideLogMain {}

export default function RideLogMain() {
  const [showAddDateForm, setShowAddDateFrom] = useState(false);
  const [dateData1, setDateData1] = useState<IDateAttributes[]>([
    { id: "", date: "", day: "", rideDetails: [] },
  ]);

  const newData: IDateAttributes[] = []; // Prepare an array to collect new data

  const handleDataFromChild = () => {
    setShowAddDateFrom(false);
  };

  // const fetchDateData = async () => {
  //   const querySnapshot = await getDocs(collection(db, "dateData"));
  //   const newData = querySnapshot.docs.map((doc) => {
  //     const data = doc.data();
  //     const seconds = data.date?.seconds;
  //     const date = new Date(seconds * 1000);
  //     const readableDate = date.toLocaleString("en-US", {
  //       month: "short",
  //       day: "numeric",
  //       hour12: true,
  //     });

  //     return {
  //       id: doc.id,
  //       date: readableDate,
  //       day: data.day,
  //       rideDetails: data.rideDetails,
  //     };
  //   });

  //   // Directly update state with the mapped data
  //   setDateData1(newData);
  // };

  // useEffect(() => {
  //   fetchDateData();
  // }, [dateData1]);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "dateData"),
      (querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          const seconds = data.date?.seconds;
          const date = new Date(seconds * 1000);
          const readableDate = date.toLocaleString("en-US", {
            month: "short",
            day: "numeric",
            hour12: true,
          });

          return {
            id: doc.id,
            date: readableDate,
            day: data.day,
            rideDetails: data.rideDetails,
          };
        });

        setDateData1(newData);
      },
      (error) => {
        console.error("Error fetching real-time data:", error);
      }
    );

    return () => unsub();
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

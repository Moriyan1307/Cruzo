import { Box, colors } from "@mui/material";
import React, { useEffect, useState } from "react";
import { theme } from "../../Utils/styleUtils";
import AddIcon from "@mui/icons-material/Add";

interface AddDateTab {
  type: string;
  width: string;
}

const AddDateTab = ({ type, width }: AddDateTab) => {
  return (
    <Box
      sx={{
        height: "80px",
        backgroundColor: theme.box,
        borderRadius: "10px",
        display: "flex",
        margin: "auto",
        marginTop: "10px",
        width: `${width}`,
      }}
    >
      <Box
        sx={{
          margin: "auto",
          display: "flex",
          justifyContent: "space-around",
          width: { xs: "55%", sm: "60%" },
        }}
      >
        <Box
          sx={{
            height: "50px",
            width: "50px",
            background: theme.innerBox,
            display: "flex",
            borderRadius: "10px",
          }}
        >
          <AddIcon
            sx={{
              fontSize: 40,
              color: "white",
              margin: "auto",
            }}
          />
        </Box>

        <h2
          style={{
            color: theme.white,
            fontSize: "28px",
            margin: "auto",
          }}
        >
          {type}
        </h2>
      </Box>
    </Box>
  );
};

export default AddDateTab;

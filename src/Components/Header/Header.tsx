import { Box } from "@mui/material";
import React from "react";
import { hrPad, vrPad } from "@/Utils/styleUtils";
import logo from "../../../public/logo.png";
import Image from "next/image";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const handleMenu = () => {};

  return (
    <Box
      sx={{
        height: "10%",
        width: "100%",
        borderBottom: "0.5px solid #fff",
        display: "flex",
      }}
    >
      <Box sx={{ width: "20%", display: "flex" }}>
        <Box sx={{ margin: "auto" }} onClick={handleMenu}>
          <MenuIcon sx={{ color: "#fff", fontSize: 50 }} />
        </Box>
      </Box>
      <Box sx={{ width: "80%", display: "flex" }}>
        <Box
          sx={{
            height: { xs: "50%", sm: "60%" },
            width: { xs: "70%", sm: "50%" },
            margin: "auto",
          }}
        >
          <Image src={logo} alt="" />
        </Box>
      </Box>
    </Box>
  );
}

export default Header;

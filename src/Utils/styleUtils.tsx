import { Roboto_Condensed, Montserrat } from "next/font/google";

export const hrPad = {
  px: {
    xs: "0%",
    lg: "30%",
  },
};
export const vrPad = {
  py: {
    xs: "0%",
    lg: "0%",
  },
};

export const theme = {
  primary: "#0C0A09",
  green: "#22C55E",
  box: "#1c1c1c",
  innerBox: "#3A3A3A",
  blue: "#1876D1",
  white: "#fff",
  fontSize: "25px",
  fontSecondary: "20px",
};

export const Roboto = Roboto_Condensed({
  weight: ["300"],
  subsets: ["latin"],
  style: ["normal"],
});
export const Mont = Montserrat({
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

import Image from "next/image";
import { Inter, Roboto } from "next/font/google";
import Dashboard from "../Components/Dashboard/Dashboard";
import { Box } from "@mui/material";
import { hrPad, theme, vrPad } from "@/Utils/styleUtils";
import Header from "../Components/Header/Header";
import RideLog from "@/components/RideLogMain/RideLog";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
        <Head>
          <title>Cruzo</title>
          <meta
            name="description"
            content="Your Next.js application description"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Box
        sx={{
          ...hrPad,
          ...vrPad,
          height: "100vh",
          width: "100vw",
          backgroundColor: theme.primary,
        }}
      >
        <Header />
      </Box>
    </>
  );
}

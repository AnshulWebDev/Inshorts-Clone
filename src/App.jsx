import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box,styled } from "@mui/material";
import Articals from "./components/Articals";

//style
const Container=styled(Box)`
    width:60%;
    margin:30px auto 0 auto;

`

const App = () => {
  return (
    <Box>
      <Header />
      <Container>
        <InfoHeader />
        <Articals/>
      </Container>
    </Box>
  );
};

export default App;

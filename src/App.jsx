import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box,styled } from "@mui/material";

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
      </Container>
    </Box>
  );
};

export default App;

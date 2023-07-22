import React from "react";
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";
import { Box,styled } from "@mui/material";
import Articals from "./components/Articals";

//style
const Container = styled(Box)(({ theme }) => ({
  width: '59%',
  margin: '50px auto 0 auto',
  [theme.breakpoints.down('md')]: {
    width: '75%'
  },
  [theme.breakpoints.down('sm')]: {
    width: '85%'
  }
}));

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

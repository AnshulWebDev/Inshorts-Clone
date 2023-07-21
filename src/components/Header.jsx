import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
const StyledHeader = styled(AppBar)`
  background: white;
  height: 70px;
`;

const MenuIcon=styled(Menu)`
    color:black
`

const Header = () => {
  return (
    <StyledHeader>
      <Toolbar>
         <MenuIcon/>

         <img src={url} alt="" />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

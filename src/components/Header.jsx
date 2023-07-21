import React from "react";
import { AppBar, Toolbar, styled } from "@mui/material";
import { Menu } from "@mui/icons-material";

// image 
const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';


// style 
const StyledHeader = styled(AppBar)`
  background: white;
  height: 70px;
`;

const MenuIcon=styled(Menu)`
    color:black
`

const Image=styled('img')({
    height:'60px',
    margin:'auto'

})

const Header = () => {
  return (
    <StyledHeader position="static">
      <Toolbar>
         <MenuIcon/>
            <Image src={url} alt="" />
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;

import React from 'react'
import {Box,Typography,styled} from '@mui/material'

//image
const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

const InfoHeader = () => {
  return (
    <Box>
        <Typography>
            For the best experience use inshorts app on your smartphone
        </Typography>
        <Box>
            <img src={appleStore} alt="applestore" />
            <img src={googleStore} alt="googlestore" />
        </Box>
    </Box>
  )
}

export default InfoHeader
import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import { getNews } from '../services/api';


const Articals = () => {

    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews= async()=>{
        let response=await getNews();
    }

  return (
    <Box>
        hello
    </Box>
  )
}

export default Articals
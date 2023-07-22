import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { getNews } from '../services/api.js';

//components
import Artical from './Artical';

const Articals = () => {

    const [news,setNews]=useState([]);

    useEffect(()=>{
        dailyNews();
    },[]);

    const dailyNews= async()=>{
        let response=await getNews();
        console.log(response.data);
        setNews(response.data);
    }

  return (
    <Box>
        {
          news.map(data=>(
            <Artical/>
          ))
        }
    </Box>
  )
}

export default Articals
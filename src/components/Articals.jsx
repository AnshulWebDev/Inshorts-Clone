import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'

//components
import Artical from './Artical';
import { data } from '../../data';

const Articals = () => {

    const [news,setNews]=useState([]);

    useEffect(()=>{
        setNews(data)
    },[]);

  return (
    <Box>
        {
          news.map((data)=>(
            <Artical key={data.id} data={data}/>
          ))
        }
    </Box>
  )
}

export default Articals;
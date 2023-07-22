import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Artical from './Artical';
import { data } from '../../data';

const Articals = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchNews();
  }, []);

  const fetchNews = () => {
    // Simulate API call with a delay for demonstration purposes
    setLoading(true);
    setTimeout(() => {
      // Assuming data is an array of new articles
      setNews((prevNews) => [...prevNews, ...data]);
      setLoading(false);
    }, 0.8000);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const threshold = 100; // Adjust this value based on your needs
    const atBottom = scrollTop + clientHeight >= scrollHeight - threshold;

    if (atBottom && !loading) {
      fetchNews();
    }
  };

  useEffect(() => {
    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <Box>
      {news.map((data) => (
        <Artical key={data.id} data={data} />
      ))}
      {loading && <p>Loading more articles...</p>}
    </Box>
  );
};

export default Articals;

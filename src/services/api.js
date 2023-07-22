export const getNews = async () => {
//   const URL = 'https://inshortsclone-wo4m.onrender.com';
  try {
    await fetch(`https://inshortsclone-wo4m.onrender.com/news`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

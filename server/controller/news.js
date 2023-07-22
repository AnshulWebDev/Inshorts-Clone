import news from "../model/news.js";

export const getNews = async (req, res) => {
  try {
    const data = await news.find({});
    res.status(200).json({
        success:true,
        message:data
    });
  } catch (error) {
    res.status(500).json({
        success:false,
        message:error.message
    })
  }
};

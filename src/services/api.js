import axios from "axios"

export const getNews=async()=>{
    const URL='';
    try {
        await axios.get(URL)
    } catch (error) {
        console.log(error)
    }
}
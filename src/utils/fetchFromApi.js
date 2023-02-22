import axios from "axios";
const BASE_URL = "https://imdb-top-100-movies.p.rapidapi.com";
const options = {
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "imdb-top-100-movies.p.rapidapi.com",
  },
};
export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/top${url}`, options);
  return data;
};
export const fetchFromAPIOnce = async () => {
  const { data } = await axios.get(`${BASE_URL}`, options);
  return data;
};

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '94f8fb1ab9b22789c3e815a9d0b4c30c';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    return response.data.results;
  } catch (error) {
    console.log(error);
    return [];
  }
};

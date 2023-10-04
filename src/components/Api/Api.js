import axios from 'axios';

const apiKey = 'b380269491c956fa5bfac5e7d5bf5634';

// fetchTrendingMovies

export async function fetchTrendingMovies() {
  const apiUrl = 'https://api.themoviedb.org/3/trending/all/day';
  const params = new URLSearchParams({
    api_key: apiKey,
    language: 'en-US',
  });
  try {
    const response = await axios.get(apiUrl, { params });
    if (response.status !== 200) {
      throw new Error(
        `Network response was not ok (status: ${response.status})`
      );
    }
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching trending movies: ${error.message}`);
  }
}

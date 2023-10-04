import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from '../../Api/Api';
import {
  ListContainer,
  HomePageTitle,
  HomePageList,
  StyledNavLink,
} from './HomePage.styled';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies(data.results);
        console.log(data.results);
      } catch (error) {
        console.error('Error fetching trending movies:', error);
      }
    };
    getTrendingMovies();
  }, []);

  return (
    <ListContainer>
      <HomePageTitle>Trending today</HomePageTitle>
      <HomePageList>
        {movies.map(movie => (
          <li key={movie.id}>
            <StyledNavLink to={`/goit-react-hw-05-movie/movies/${movie.id}`}>
              {movie.name || movie.title}
            </StyledNavLink>
          </li>
        ))}
      </HomePageList>
    </ListContainer>
  );
};

export default HomePage;

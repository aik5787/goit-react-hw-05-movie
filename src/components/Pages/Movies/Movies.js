import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovieRequest } from '../../Api/Api';
import {
  MoviesContainer,
  MoviesInput,
  MoviesButton,
  ListContainer,
  MoviePageList,
  StyledNavLink,
} from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movieRequest, setMovieRequest] = useState([]);

  useEffect(() => {
    const query = searchParams.get('query');
    if (query) {
      setSearchParams({ query: query });
      // getMovieRequest(query);
    }
  }, [searchParams, setSearchParams]);

  const handleChange = e => {
    const inputValue = e.target.value;
    if (!inputValue.trim()) {
      setSearchParams({ query: '' });
      localStorage.removeItem('searchQuery');
    } else {
      setSearchParams({ query: inputValue });
      localStorage.setItem('searchQuery', inputValue);
    }
  };

  const getMovieRequest = async query => {
    try {
      const dataMovieRequest = await fetchMovieRequest(query);
      setMovieRequest(dataMovieRequest);
    } catch (error) {
      console.error('Error fetching movie request:', error);
    }
  };

  const handleSearch = e => {
    const query = searchParams.get('query');

    getMovieRequest(query);
  };
  //   console.log(movieRequest);

  const handleKeyDown = e => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  // console.log('searchParams', searchParams.get('query'));

  return (
    <MoviesContainer>
      <MoviesInput
        type="text"
        placeholder="Enter a movie name"
        value={searchParams.get('query') || ''}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <MoviesButton onClick={handleSearch}>Search</MoviesButton>
      <ListContainer>
        <MoviePageList>
          {movieRequest.map(movie => (
            <li key={movie.id}>
              <StyledNavLink to={`/goit-react-hw-05-movie/movies/${movie.id}`}>
                {movie.name || movie.title}
              </StyledNavLink>
            </li>
          ))}
        </MoviePageList>
      </ListContainer>
    </MoviesContainer>
  );
};

export default Movies;

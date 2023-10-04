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
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (searchParams.get('query')) {
      setSearchText(searchParams.get('query'));
      getMovieRequest(searchParams.get('query'));
    }
  }, [searchParams]);

  const handleChange = e => {
    const inputValue = e.target.value;
    if (inputValue.trim()) {
      setSearchText(inputValue);
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
    const query = searchText;
    if (query) {
      getMovieRequest(query);
      setSearchParams({ query: query });
    }
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
        value={searchText}
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

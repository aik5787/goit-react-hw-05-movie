import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { fetchMovieDetails } from '../../Api/Api';

import {
  StyledLink,
  MovieDetailsContainer,
  MovieDetailsImg,
  MovieInfoContainer,
  MovieInfoTitle,
  MovieInfo,
  MovieAddInfoContainer,
  MovieAddInfo,
  StyledNavLink,
  MovieDetailsMainContainer,
  MovieInfoSpan,
} from './MoviesDetails.styled.js';

const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const dataMovieDetail = await fetchMovieDetails(movieId);
        setMovieDetails(dataMovieDetail);
        console.log(movieDetails);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);

  return (
    <MovieDetailsMainContainer>
      <StyledLink to="/goit-react-hw-05-movie/">Go Back</StyledLink>
      {Object.keys(movieDetails).length > 0 ? (
        <MovieDetailsContainer>
          <MovieDetailsImg
            src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`}
            alt="Movie Poster"
            width={300}
            height={400}
          />
          <MovieInfoContainer>
            <MovieInfoTitle>{movieDetails.title}</MovieInfoTitle>
            <MovieInfo>
              <MovieInfoSpan>User Score: </MovieInfoSpan>
              {movieDetails.vote_average.toFixed(2)}
            </MovieInfo>
            <MovieInfo>
              <MovieInfoSpan>Overview: </MovieInfoSpan>
              {movieDetails.overview}
            </MovieInfo>
            <MovieInfo>
              <MovieInfoSpan>Genres: </MovieInfoSpan>
              {movieDetails.genres.map(genre => genre.name).join(', ')}
            </MovieInfo>
          </MovieInfoContainer>
        </MovieDetailsContainer>
      ) : (
        <p>Loading...</p>
      )}
      <MovieAddInfoContainer>
        <MovieAddInfo>Additional information</MovieAddInfo>
        <StyledNavLink to={`/movies/${movieId}/cast`}>Cast</StyledNavLink>
        <StyledNavLink to={`/movies/${movieId}/reviews`}>Reviews</StyledNavLink>
      </MovieAddInfoContainer>
      <Outlet />
    </MovieDetailsMainContainer>
  );
};

export default MoviesDetails;

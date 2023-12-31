import { useEffect, useState, useRef } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
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
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? /goit-react-hw-05-movie/);
  useEffect(() => {
    const getMovieDetails = async movieId => {
      try {
        const dataMovieDetail = await fetchMovieDetails(movieId);
        setMovieDetails(dataMovieDetail);
      } catch (error) {
        window.location.href = '/goit-react-hw-05-movie/';
        console.error('Error fetching movie details:', error);
      }
    };
    getMovieDetails(movieId);
  }, [movieId]);

  // console.log(movieDetails);

  return (
    <MovieDetailsMainContainer>
      <StyledLink to={backLink.current}>Go Back</StyledLink>
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
        <p>Something wrong...</p>
      )}
      <MovieAddInfoContainer>
        <MovieAddInfo>Additional information</MovieAddInfo>
        <StyledNavLink to={`/goit-react-hw-05-movie/movies/${movieId}/cast`}>
          Cast
        </StyledNavLink>
        <StyledNavLink to={`/goit-react-hw-05-movie/movies/${movieId}/reviews`}>
          Reviews
        </StyledNavLink>
      </MovieAddInfoContainer>
      <Outlet />
    </MovieDetailsMainContainer>
  );
};

export default MoviesDetails;

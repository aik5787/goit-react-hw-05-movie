import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';

const HomePage = lazy(() => import('./Pages/HomePage/HomePage'));
const Movies = lazy(() => import('./Pages/Movies/Movies'));
const MovieDetails = lazy(() => import('./Pages/MoviesDetails/MoviesDetails'));
const Cast = lazy(() => import('./Pages/Cast/Cast'));
const Reviews = lazy(() => import('./Pages/Reviews/Reviews'));

// import HomePage from './Pages/HomePage/HomePage';
// import Movies from './Pages/Movies/Movies';
// import MovieDetails from './Pages/MoviesDetails/MoviesDetails';
// import Cast from './Pages/Cast/Cast';
// import Reviews from './Pages/Reviews/Reviews';

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movie/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="movies" element={<Movies />}></Route>
      </Route>
    </Routes>
  );
};

export default App;

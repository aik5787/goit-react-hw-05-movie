import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import Movies from './Pages/Movies/Movies';
import MovieDetails from './Pages/MoviesDetails/MoviesDetails';
import Cast from './Pages//Cast/Cast';
import Reviews from './Pages/Reviews/Reviews';

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

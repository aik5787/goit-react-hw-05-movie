import { Routes, Route } from 'react-router-dom';
import Layout from './Layout/Layout';
import HomePage from './Pages/HomePage/HomePage';
import MovieDetails from './Pages/MoviesDetails/MoviesDetails';

const App = () => {
  return (
    <Routes>
      <Route path="/goit-react-hw-05-movie/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="movies/:movieId" element={<MovieDetails />}></Route>
        {/* <Route path="movies" element={<Movies />}>
            <Route index element={<MovieList />}></Route>
          </Route>
          
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route> */}
      </Route>
    </Routes>
  );
};

export default App;

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../../Api/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async movieId => {
      try {
        const dataMovieReviews = await fetchMovieReviews(movieId);
        setMovieReviews(dataMovieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    };
    getMovieReviews(movieId);
  }, [movieId]);

  console.log(movieReviews);

  return (
    <div>
      <h2>Reviews</h2>
      {movieReviews.length > 0 ? (
        <ul>
          {movieReviews.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie.</p>
      )}
    </div>
  );
};

export default Reviews;

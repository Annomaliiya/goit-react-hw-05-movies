import { useState, useEffect } from "react";
import { fetchReviews } from "../../shared/services/moviesApi";
import PropTypes from "prop-types";

import s from "./Reviews.module.css";

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    const getReviews = async () => {
      const { results } = await fetchReviews(movieId);
      setReviews(results);
    };

    getReviews();
  }, [movieId]);

  const reviewsList = reviews?.map((review) => (
    <li key={review.id}>
      <p className={s.author}>@{review.author}</p>
      <p>Comment:{review.content}</p>
    </li>
  ));
  console.log(reviews);
  return (
    <div>
      {reviews?.length > 0 ? (
        <ul className>{reviewsList}</ul>
      ) : (
        <p>We didn't find any review for this movie</p>
      )}
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

import { useState, useEffect } from "react";
import { useParams, useHistory, NavLink, Route } from "react-router-dom";

import { fetchOneMovie } from "../../shared/services/moviesApi";

import s from "./MovieDetailsPage.module.css";

import Cast from "../../components/Cast";
import Reviews from "../../components/Reviews";

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();
  const history = useHistory();
  const getOneMovie = async () => {
    try {
      const oneMovie = await fetchOneMovie(movieId);
      setMovie(oneMovie);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    getOneMovie();
  }, [movieId]);

  if (error) {
    return <p>Произошла ошибка</p>;
  }

  if (!movie) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <button onClick={() => history.goBack()} type="submit" className={s.btn}>
        Go back!
      </button>
      <div className={s.item}>
        <h4 className={s.title}>{movie.title}</h4>
        <img
          className={s.img}
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
          alt={movie.title}
        />
        <p className={s.overview}>Overview: {movie.overview}</p>
        <p className={s.voteAverage}>Rating: {movie.vote_average}</p>
        <p className={s.originalLanguage}>
          Language: {movie.original_language}
        </p>
        <p className={s.release_date}>Release date: {movie.release_date}</p>
      </div>
      <p className={s.additional}>Additonal info:</p>
      <NavLink
        to={`/movies/${movieId}/cast`}
        className={s.linkCast}
        activeClassName={s.activeLink}
      >
        Cast
      </NavLink>
      <Route path="/movies/:movieId/cast">
        <Cast movieId={movieId} />
      </Route>
      <NavLink
        to={`/movies/${movieId}/reviews`}
        className={s.linkReviews}
        activeClassName={s.activeLink}
      >
        Reviews
      </NavLink>
      <Route path="/movies/:movieId/reviews">
        <Reviews movieId={movieId} />
      </Route>
    </>
  );
};

export default MoviesDetailsPage;

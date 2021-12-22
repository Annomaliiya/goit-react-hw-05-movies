import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchOneMovie } from "../../shared/services/moviesApi";
import s from "./MovieDetailsPage.module.css";

const MoviesDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const { movieId } = useParams();

  const getOneMovie = async () => {
    try {
      const oneMovie = await fetchOneMovie(movieId);
      console.log(oneMovie);
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
    <div className={s.item}>
      <h4 className={s.title}>{movie.title}</h4>
      <img
        className={s.poster_path}
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <p className={s.release_date}>{movie.release_date}</p>
    </div>
  );
};

export default MoviesDetailsPage;

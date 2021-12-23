import { useState, useEffect } from "react";
import { fetchCast } from "../../shared/services/moviesApi";
import PropTypes from "prop-types";
import s from "./Cast.module.css";

const Cast = ({ movieId }) => {
  const [actors, setActors] = useState([]);

  const getCast = async () => {
    try {
      const { cast } = await fetchCast(movieId);

      setActors(cast);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCast();
  }, [movieId]);

  const elements = actors?.map((actor) => (
    <li key={actor.id}>
      <img
        height="200"
        src={`https://image.tmdb.org/t/p/w200/${actor.profile_path}`}
        alt={actor.name}
      />
      <p>{actor.name}</p>
      <p>{actor.character}</p>
    </li>
  ));
  return (
    <div>
      <ul className={s.actors}>{elements}</ul>
    </div>
  );
};
export default Cast;

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

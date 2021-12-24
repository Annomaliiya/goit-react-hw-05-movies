import { Link, useHistory, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./MoviesGallery.module.css";

const MoviesGallery = ({ items }) => {
  const history = useHistory();
  const location = useLocation();
  const movies = items.map((item) => (
    <Link
      to={{
        pathname: `/movies/${item.id}`,
        state: { from: location },
      }}
      className={s.link}
      key={item.id}
    >
      <div className={s.item}>
        <h4 className={s.title}>{item.title}</h4>
        <img
          height="490"
          width="360"
          className={s.posterPath}
          src={`https://image.tmdb.org/t/p/w400/${item.poster_path}`}
          alt={item.title}
        />
        <p className={s.voteAverage}>Rating: {item.vote_average}</p>
        <p className={s.originalLanguage}>Language: {item.original_language}</p>
        <p className={s.releaseDate}>Release date: {item.release_date}</p>
      </div>
    </Link>
  ));
  return (
    <>
      <div className={s.gallery}>{movies}</div>
    </>
  );
};

export default MoviesGallery;

const galleryShape = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  vote_average: PropTypes.number.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};
MoviesGallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(galleryShape)),
};

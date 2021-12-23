import { memo } from "react";
import PropTypes from "prop-types";

import s from "./HomePageItem.module.css";
import { Link } from "react-router-dom";

const HomePageItem = ({ id, title, poster_path, release_date }) => {
  return (
    <Link to={`/movies/${id}`} className={s.link}>
      <li className={s.item}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.poster_path}>{poster_path}</p>
        <p className={s.release_date}>{release_date}</p>
      </li>
    </Link>
  );
};
export default memo(HomePageItem);

HomePageItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
};

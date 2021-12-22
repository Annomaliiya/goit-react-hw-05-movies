import { memo } from "react";

import s from "./HomePageItem.module.css";
import { Link as NavLink } from "react-router-dom";

const HomePageItem = ({ id, title, poster_path, release_date }) => {
  return (
    <NavLink to={`/movies/:movieId`} className={s.link}>
      <li className={s.item}>
        <h4 className={s.title}>{title}</h4>
        <p className={s.poster_path}>{poster_path}</p>
        <p className={s.release_date}>{release_date}</p>
      </li>
    </NavLink>
  );
};
export default memo(HomePageItem);

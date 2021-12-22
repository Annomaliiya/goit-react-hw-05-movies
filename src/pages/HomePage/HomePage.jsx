import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
import HomePageItem from "./HomePageItem";
import s from "./HomePage.module.css";

import { fetchTrendingMovies } from "../../shared/services/moviesApi";

const HomePage = () => {
  const [moviesTrending, setMoviesTrending] = useState([]);

  const getMovie = async () => {
    try {
      const movies = await fetchTrendingMovies();
      setMoviesTrending([...movies.results]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);

  const moviesArray = moviesTrending.map(
    ({ id, title, poster_path, release_date }) => (
      <HomePageItem
        key={id}
        id={id}
        title={title}
        poster={poster_path}
        data={release_date}
      />
    )
  );

  return (
    <section className={s.home}>
      <ul className={s.homeList}>{moviesArray}</ul>
    </section>
  );
};

export default HomePage;

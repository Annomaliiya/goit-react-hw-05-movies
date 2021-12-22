import { useState, useEffect } from "react";
import { fetchMovieBySearch } from "../../shared/services/moviesApi";
import SearchBar from "../../components/SearchBar";
import s from "./MoviesPage.module.css";

const initialState = {
  items: [],
  query: "",
  error: false,
};

const MoviesPage = () => {
  const [state, setState] = useState(initialState);

  //   const getMoviesList = async () => {
  //     try {
  //       const movies = await fetchMovieBySearch(query);
  //       setState(...state.items, movies);
  //     } catch (error) {
  //       setState(error);
  //     }
  //   };
  //   useEffect(() => {
  //     getMoviesList();
  //   }, [query]);

  return (
    <div>
      <SearchBar />
    </div>
  );
};

export default MoviesPage;

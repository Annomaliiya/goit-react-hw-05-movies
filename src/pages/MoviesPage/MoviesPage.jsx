import { useState, useCallback } from "react";
import { useHistory, useLocation } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import MoviesGallery from "../../components/MoviesGallery";
import { useEffect } from "react/cjs/react.development";
import { fetchMovieBySearch } from "../../shared/services/moviesApi";

const initialState = {
  items: [],
  page: 1,
  error: null,
};

const MoviesPage = () => {
  const [state, setState] = useState(initialState);

  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { page, results } = await fetchMovieBySearch(query);

        setState({ ...state, page, items: [...results] });
      } catch (error) {
        setState(state.error);
      }
    };

    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("q");

    if (query) {
      fetchMovies();
    }
  }, [location.search]);

  const changeQuery = useCallback(
    (query) => {
      history.push({
        pathname: location.pathname,
        search: `q=${query}`,
      });
    },
    [history, location]
  );

  return (
    <div>
      <SearchBar onSubmit={changeQuery} />
      <MoviesGallery items={state.items} />
    </div>
  );
};

export default MoviesPage;

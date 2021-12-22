import { Route, Switch } from "react-router-dom";

import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import NotFound from "./pages/NotFound";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/movies">
                <MoviesPage />
            </Route>
            <Route exact path="/movies/:movieId">
                <MovieDetailsPage />
            </Route>
            <Route component={NotFound} />
        </Switch>
    )
}

export default Routes;
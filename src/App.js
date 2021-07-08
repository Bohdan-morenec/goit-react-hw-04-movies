import { Redirect, Route, Switch } from "react-router-dom";
import { Suspense, lazy } from "react";
import "./App.css";

import routes from "./routes";

import { Navigation } from "./Component/Navigation.js";

const TrendingTodeyMovis = lazy(() =>
  import(
    "./views/HomePage/HomePage" /* webpackChunkName: "Trending-todey-movis" */
  )
);
const MovieDetails = lazy(() =>
  import(
    "./views/MovieDetailsPage/MovieDetailsPage" /* webpackChunkName: "Movie-details" */
  )
);
const MoviesPage = lazy(() =>
  import("./views/MoviesPage/MoviesPage" /* webpackChunkName: "Movies-page" */)
);

function App() {
  const { home, movies, movieDetails } = routes;

  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={<h1>loading...</h1>}>
        <Switch>
          <Route path={home} exact component={TrendingTodeyMovis}></Route>
          <Route path={movieDetails} component={MovieDetails}></Route>
          <Route path={movies} component={MoviesPage}></Route>
          <Redirect to="/"></Redirect>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;

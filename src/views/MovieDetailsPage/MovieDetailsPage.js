import { Component, lazy, Suspense } from "react";
import { NavLink, Route, Switch } from "react-router-dom";

import getMovieDetailsPage from "../../fetchAPI/MovieDetailsPageFetch";

import Pgoto404 from "../../img/unnamed.jpg";
import routers from "../../routes";

import style from "./movieDetalis.module.scss";

const Cast = lazy(() => import("../Cast/Cast" /* webpackChunkName: "Cast" */));
const Reviews = lazy(() =>
  import("../Reviews/Reviews" /* webpackChunkName: "Reviews" */)
);

class MovieDetails extends Component {
  state = {
    title: null,
    overview: null,
    genres: [],
    poster_path: null,
    vote_average: null,
    location: null,
  };

  async componentDidMount() {
    const { params } = this.props.match;
    const { location } = this.props;

    const response = await getMovieDetailsPage(params.movieId);

    this.setState({ ...response.data, location: location });
  }

  returnPreviousPage = () => {
    const { history } = this.props;
    const { location } = this.state;

    console.log(location);
    if (location.state && location.state.from) {
      return history.push(location.state.from);
    }

    history.push(routers.home);
  };

  render() {
    const { title, overview, genres, poster_path, vote_average, release_date } =
      this.state;
    const { match } = this.props;
    const { movieCast, movieReviews } = routers;

    return (
      <div className={style.box}>
        <button
          className={style.buttonGoBack}
          onClick={this.returnPreviousPage}
        >
          ← Go back
        </button>
        <div className={style.boxInformationMovie}>
          <div>
            <img
              className={style.img}
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : Pgoto404
              }
              alt="poster"
            />
          </div>
          <div className={style.informationMovieText}>
            <h1>
              {title} ({new Date(release_date).getFullYear()})
            </h1>
            <p>
              User Score
              <span className={style.userScore}>{vote_average}</span>
            </p>
            <h2>Owerview</h2>
            <p className={style.movieDescription}>{overview}</p>
            <div>
              <h2>genres :</h2>
              <ul className={style.genresList}>
                {genres &&
                  genres.map(({ id, name }) => (
                    <li className={style.genresItem} key={id}>
                      {name}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h2>additional information</h2>
          <NavLink className={style.link} to={`${match.url}/cast`}>
            Cast
          </NavLink>
          <NavLink className={style.link} to={`${match.url}/Reviews`}>
            Reviews
          </NavLink>
        </div>
        <Suspense fallback={<h1>loading...</h1>}>
          <Switch>
            <Route path={movieCast} component={Cast}></Route>
            <Route path={movieReviews} component={Reviews}></Route>
          </Switch>
        </Suspense>
      </div>
    );
  }
}

export default MovieDetails;

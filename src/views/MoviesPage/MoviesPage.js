import { Component } from "react";
import { NavLink } from "react-router-dom";

import notifications from "../../options/PNotify";

import style from "./movieSerch.module.scss";

import getMoviesPage from "../../fetchAPI/MoviesPageFatch";

class moviesPages extends Component {
  state = {
    movieSearchValue: "",
    movies: null,
  };

  addmovieSearchValue = (e) => {
    const { value } = e.currentTarget;

    this.setState({ movieSearchValue: value });
  };

  async getMovies() {
    const { movieSearchValue } = this.state;
    if (!movieSearchValue) {
      return notifications();
    }

    const response = await getMoviesPage(movieSearchValue);

    this.setState({ movies: response.data.results });
  }

  formSumit = (e) => {
    e.preventDefault();
    this.getMovies();
  };

  render() {
    const { movieSearchValue, movies } = this.state;
    const { location } = this.props;

    return (
      <div className={style.box}>
        <form onSubmit={this.formSumit}>
          <input
            tupe="text"
            placeholder="movie search"
            value={movieSearchValue}
            onChange={this.addmovieSearchValue}
            className={style.input}
          ></input>
          <button className={style.button} tupe="submit">
            <span className={style.buttonText}>Search</span>
          </button>
        </form>
        <div>
          <ul>
            {movies &&
              movies.length > 0 &&
              movies.map(({ id, title }) => (
                <li className={style.list} key={id}>
                  <NavLink
                    className={style.link}
                    to={{
                      pathname: `${this.props.match.url}/${id}`,
                      state: { from: location },
                    }}
                  >
                    {title}
                  </NavLink>
                </li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default moviesPages;

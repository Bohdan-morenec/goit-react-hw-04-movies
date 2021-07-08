import { Component } from "react";
import { NavLink } from "react-router-dom";

import style from "./moviesPage.module.scss";

import getHomePage from "../../fetchAPI/HomePageFetch";

import routers from "../../routes";

class trendingTodeyMovis extends Component {
  state = {
    trendingMovis: null,
  };

  async componentDidMount() {
    const response = await getHomePage();

    this.setState({ trendingMovis: response.data });
  }

  render() {
    const { trendingMovis } = this.state;
    const { movies } = routers;
    const { location } = this.props;

    return (
      <div className={style.box}>
        <h1 className={style.heading}>Trending today</h1>
        <ul>
          {trendingMovis &&
            trendingMovis.results.map(({ id, original_title }) => (
              <li className={style.list} key={id}>
                <NavLink
                  className={style.link}
                  to={{
                    pathname: `${movies}/${id}`,
                    state: { from: location },
                  }}
                >
                  {original_title}
                </NavLink>
              </li>
            ))}
        </ul>
      </div>
    );
  }
}

export default trendingTodeyMovis;

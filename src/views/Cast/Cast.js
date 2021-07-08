import { Component } from "react";

import Pgoto404 from "../../img/unnamed.jpg";

import style from "./cast.module.scss";

import getCast from "../../fetchAPI/CastFetch";

class CastList extends Component {
  state = {
    castList: [],
  };

  async componentDidMount() {
    const { params } = this.props.match;

    const response = await getCast(params.movieId);

    this.setState({ castList: response.data.cast });
  }
  render() {
    const { castList } = this.state;
    return (
      <div>
        <ul className={style.list}>
          {(castList &&
            castList.map(({ id, profile_path, name, character }) => (
              <li className={style.item} key={id}>
                <img
                  className={style.img}
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w500${profile_path}`
                      : Pgoto404
                  }
                  alt="photoActor"
                />
                <p>{name}</p>
                <p> Character {character}</p>
              </li>
            ))) || <p>Nothing found</p>}
        </ul>
      </div>
    );
  }
}
export default CastList;

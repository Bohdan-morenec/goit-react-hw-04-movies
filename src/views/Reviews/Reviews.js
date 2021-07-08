import { Component } from "react";

import axios from "axios";

import style from "./reviews.module.scss";

class reviews extends Component {
  state = {
    reviewslist: null,
  };

  async componentDidMount() {
    const { params } = this.props.match;

    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.movieId}/reviews?api_key=06107a8d40ed107672c06803f6a2ba0d`
    );

    this.setState({ reviewslist: response.data.results });
  }

  render() {
    const { reviewslist } = this.state;

    return (
      <div>
        <ul className={style.list}>
          {(reviewslist &&
            reviewslist.length > 0 &&
            reviewslist.map(({ id, author, content }) => (
              <li className={style.item} key={id}>
                <h2 className={style.heading}>{author}</h2>
                <p>{content}</p>
              </li>
            ))) ||
            "We don't have any reviews for this movie."}
        </ul>
      </div>
    );
  }
}

export default reviews;

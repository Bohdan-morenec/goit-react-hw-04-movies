import axios from "axios";

import fetchParameters from "./queryParameters";

const getMoviesPage = (value) => {
  return axios.get(
    `${fetchParameters.MAINPATH}search/movie?${fetchParameters.KEY}&query=${value}`
  );
};

export default getMoviesPage;

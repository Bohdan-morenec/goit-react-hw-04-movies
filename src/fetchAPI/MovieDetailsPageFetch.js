import axios from "axios";

import fetchParameters from "./queryParameters";

const getMovieDetailsPage = (value) => {
  return axios.get(
    `${fetchParameters.MAINPATH}movie/${value}?${fetchParameters.KEY}`
  );
};
export default getMovieDetailsPage;

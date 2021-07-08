import axios from "axios";

import fetchParameters from "./queryParameters";

const getHomePage = () => {
  return axios.get(
    `${fetchParameters.MAINPATH}trending/movie/day?${fetchParameters.KEY}`
  );
};

export default getHomePage;

import axios from "axios";

import fetchParameters from "./queryParameters";

const getCast = (value) => {
  return axios.get(
    `${fetchParameters.MAINPATH}movie/${value}/credits?${fetchParameters.KEY}`
  );
};
export default getCast;

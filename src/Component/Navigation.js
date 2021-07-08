import { NavLink } from "react-router-dom";

import routes from "../routes";

import style from "./navigation.module.scss";

export const Navigation = () => {
  const { home, movies } = routes;
  return (
    <div className={style.navigationBox}>
      <ul className={style.navigationList}>
        <li className={style.navigationItem}>
          <NavLink
            exact
            className={style.navigationLink}
            activeClassName={style.activeLiink}
            to={home}
          >
            Home
          </NavLink>
        </li>
        <li className={style.navigationItem}>
          <NavLink
            className={style.navigationLink}
            activeClassName={style.activeLiink}
            to={movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

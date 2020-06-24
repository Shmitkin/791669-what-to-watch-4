import React from "react";
import {MovieInfoTitles} from "../../consts.js";
import PropTypes from "prop-types";

export default function MovieInfoNav(props) {
  const {onClick, activeTab} = props;
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        <li className={`movie-nav__item ${activeTab === MovieInfoTitles.OVERVIEW ? `movie-nav__item--active` : ``}`}>
          <a href="#"
            className="movie-nav__link"
            onClick={(evt) => {
              evt.preventDefault();
              onClick(MovieInfoTitles.OVERVIEW);
            }}
          >
            {MovieInfoTitles.OVERVIEW}
          </a>
        </li>
        <li className={`movie-nav__item ${activeTab === MovieInfoTitles.DETAILS ? `movie-nav__item--active` : ``}`}>
          <a href="#"
            className="movie-nav__link"
            onClick={(evt)=>{
              evt.preventDefault();
              onClick(MovieInfoTitles.DETAILS);
            }}
          >
            {MovieInfoTitles.DETAILS}
          </a>
        </li>
        <li className={`movie-nav__item ${activeTab === MovieInfoTitles.REVIEWS ? `movie-nav__item--active` : ``}`}>
          <a href="#"
            className="movie-nav__link"
            onClick={(evt)=>{
              evt.preventDefault();
              onClick(MovieInfoTitles.REVIEWS);
            }}
          >
            {MovieInfoTitles.REVIEWS}
          </a>
        </li>
      </ul>
    </nav>
  );
}

MovieInfoNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

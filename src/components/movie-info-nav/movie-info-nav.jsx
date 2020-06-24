import React from "react";
import {MovieInfoTitles} from "../../consts.js";
import PropTypes from "prop-types";
import MovieInfoNavTab from "../movie-info-nav-tab/movie-info-nav-tab.jsx";

export default function MovieInfoNav(props) {
  const {onClick, activeTab} = props;

  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {Object.values(MovieInfoTitles).map((tabTitle, index) =>
          <MovieInfoNavTab
            key = {`${index}-${tabTitle}`}
            onClick = {onClick}
            activeTab = {activeTab}
            tabTitle = {tabTitle}
          />)}
      </ul>
    </nav>
  );
}

MovieInfoNav.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

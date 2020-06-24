import React from "react";
import PropTypes from "prop-types";

export default function MovieInfoNavTab(props) {
  const {onClick, activeTab, tabTitle} = props;
  return (
    <li className={`movie-nav__item ${activeTab === tabTitle ? `movie-nav__item--active` : ``}`}>
      <a href="#"
        className="movie-nav__link"
        onClick={(evt)=>{
          evt.preventDefault();
          onClick(tabTitle);
        }}
      >
        {tabTitle}
      </a>
    </li>
  );
}

MovieInfoNavTab.propTypes = {
  onClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  tabTitle: PropTypes.string.isRequired,

};

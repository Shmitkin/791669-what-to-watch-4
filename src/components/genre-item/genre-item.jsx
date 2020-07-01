import React from "react";
import PropTypes from "prop-types";

export default function GenreItem({genre, activeTab, onClick}) {

  const addActiveClass = () => {
    return genre === activeTab ? `catalog__genres-item--active` : ``;
  };

  return (
    <li className={`catalog__genres-item ${addActiveClass()}`}>
      <a href="#"
        className="catalog__genres-link"
        onClick = {(evt) => {
          evt.preventDefault();
          onClick(genre);
        }}
      >{genre}</a>
    </li>
  );
}


GenreItem.propTypes = {
  genre: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

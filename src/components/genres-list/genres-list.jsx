import React from "react";
import PropTypes from "prop-types";

import GenreItem from "../genre-item/genre-item.jsx";

export default function GenresList({genres, activeTab, onTabClick}) {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <GenreItem
          key = {`${index}-${genre}`}
          genre = {genre}
          onClick = {onTabClick}
          activeTab = {activeTab}
        />
      )}
    </ul>
  );
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  onTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

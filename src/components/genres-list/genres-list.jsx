import React from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";

export default function GenresList({genres}) {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <GenreItem
          key = {`${index}-${genre}`}
          genre = {genre}
        />
      )}
    </ul>
  );
}


GenresList.propTypes = {
  genres: PropTypes.array.isRequired
};

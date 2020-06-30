import React from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";
import {getGenres} from "../../selectors.js";

function GenresList({genres, onGenreItemClick, currentGenre}) {

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, index) =>
        <GenreItem
          currentGenre = {currentGenre}
          key = {`${index}-${genre}`}
          genre = {genre}
          onClick = {onGenreItemClick}
        />
      )}
    </ul>
  );
}


GenresList.propTypes = {
  genres: PropTypes.array.isRequired,
  onGenreItemClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  currentGenre: state.currentGenre,
  genres: getGenres(state.movies),
});

const mapDispatchToProps = (dispatch) => ({
  onGenreItemClick(genre) {
    dispatch(ActionCreator.setGenre(genre));
  }
});

export {GenresList};
export default connect(mapStateToProps, mapDispatchToProps)(GenresList);

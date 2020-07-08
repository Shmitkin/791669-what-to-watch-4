import React from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";
import {connect} from "react-redux";
import {getGenres} from "../../selectors.js";

function GenresList({genres, activeTab, onTabClick}) {

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

const mapStateToProps = (state) => ({
  genres: getGenres(state.movies),
});

export {GenresList};
export default connect(mapStateToProps)(GenresList);

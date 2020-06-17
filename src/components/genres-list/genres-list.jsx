import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import GenreItem from "../genre-item/genre-item.jsx";

export default class GenresList extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genres} = this.props;

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
}

GenresList.propTypes = {
  genres: PropTypes.array.isRequired
};

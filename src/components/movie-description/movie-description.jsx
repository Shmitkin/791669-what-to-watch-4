import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MovieButtons from "../movie-buttons/movie-buttons.jsx";

export default class MovieDescription extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, genre, release} = this.props;
    return (
      <div className="movie-card__desc">
        <h2 className="movie-card__title">{title}</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">{genre}</span>
          <span className="movie-card__year">{release}</span>
        </p>
        <MovieButtons />
      </div>
    );
  }
}

MovieDescription.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};


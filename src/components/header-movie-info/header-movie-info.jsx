import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MovieDescription from "../movie-description/movie-description.jsx";
import MovieMainPoster from "../movie-main-poster/movie-main-poster.jsx";


export default class HeaderMovieInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, release, genre, isMovieDetails} = this.props;

    return (
      <div className="movie-card__info">
        <MovieMainPoster altDesc = {title} />
        <MovieDescription
          title = {title}
          genre = {genre}
          release = {release}
          isMovieDetails = {isMovieDetails}
        />
      </div>
    );
  }
}

HeaderMovieInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
  isMovieDetails: PropTypes.bool.isRequired,
};

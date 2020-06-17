import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MovieCardDesc from "../movie-card-desc/movie-card-desc.jsx";
import MovieCardPoster from "../movie-card-poster/movie-card-poster.jsx";


export default class MovieCardInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, release, genre} = this.props;

    return (
      <div className="movie-card__info">
        <MovieCardPoster altDesc = {title} />
        <MovieCardDesc
          title = {title}
          genre = {genre}
          release = {release}
        />
      </div>
    );
  }
}

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  release: PropTypes.number.isRequired,
};

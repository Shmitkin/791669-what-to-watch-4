import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class MovieMainPoster extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie} = this.props;

    return (
      <div className="movie-card__poster">
        <img src={movie.poster} alt={`${movie.title} poster`} width="218" height="327" />
      </div>
    );
  }
}

MovieMainPoster.propTypes = {
  movie: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

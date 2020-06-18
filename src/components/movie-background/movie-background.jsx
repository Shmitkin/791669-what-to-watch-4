import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class MovieBackground extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie} = this.props;

    return (
      <div className="movie-card__bg">
        <img src={movie.background} alt={movie.title} />
      </div>
    );
  }
}

MovieBackground.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
  }).isRequired,
};

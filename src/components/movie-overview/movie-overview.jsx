import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieOverview extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {rating, votes, description, director, starring} = this.props;
    return (
      <React.Fragment>
        <div className="movie-rating">
          <div className="movie-rating__score">{rating}</div>
          <p className="movie-rating__meta">
            <span className="movie-rating__level">Very good</span>
            <span className="movie-rating__count">{votes} ratings</span>
          </p>
        </div>

        <div className="movie-card__text">
          <p>
            {description}
          </p>

          <p className="movie-card__director"><strong>Director: {director}</strong></p>

          <p className="movie-card__starring"><strong>Starring: {starring}</strong></p>
        </div>
      </React.Fragment>
    );
  }
}

MovieOverview.propTypes = {
  rating: PropTypes.number.isRequired,
  votes: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  director: PropTypes.string.isRequired,
  starring: PropTypes.string.isRequired,
};

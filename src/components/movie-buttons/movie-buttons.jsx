import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MyListButton from "../my-list-button/my-list-button.jsx";
import PlayButton from "../play-button/play-button.jsx";
import AddReviewButton from "../add-review-button/add-review-button.jsx";

export default class MovieButtons extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {isMovieDetails} = this.props;
    return (
      <div className="movie-card__buttons">
        <PlayButton />
        <MyListButton />
        {isMovieDetails ? <AddReviewButton /> : null}
      </div>
    );
  }
}

MovieButtons.propTypes = {
  isMovieDetails: PropTypes.bool.isRequired
};

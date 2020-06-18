import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieInfoPoster extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {altDesc, image} = this.props;
    return (
      <div className="movie-card__poster movie-card__poster--big">
        <img src = {image} alt = {`${altDesc} poster`} width="218" height="327" />
      </div>
    );
  }
}

MovieInfoPoster.propTypes = {
  altDesc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

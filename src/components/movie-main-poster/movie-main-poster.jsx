import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class MovieMainPoster extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {altDesc} = this.props;

    return (
      <div className="movie-card__poster">
        <img src="img/the-grand-budapest-hotel-poster.jpg" alt={`${altDesc} poster`} width="218" height="327" />
      </div>
    );
  }
}

MovieMainPoster.propTypes = {
  altDesc: PropTypes.string.isRequired
};

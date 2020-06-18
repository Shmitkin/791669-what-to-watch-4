import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class MovieBackground extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {altDesc} = this.props;

    return (
      <div className="movie-card__bg">
        <img src="img/bg-the-grand-budapest-hotel.jpg" alt={altDesc} />
      </div>
    );
  }
}

MovieBackground.propTypes = {
  altDesc: PropTypes.string.isRequired
};

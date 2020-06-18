import React, {PureComponent} from "react";
import PropTypes from "prop-types";


export default class MovieBackground extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {altDesc, image} = this.props;

    return (
      <div className="movie-card__bg">
        <img src={image} alt={altDesc} />
      </div>
    );
  }
}

MovieBackground.propTypes = {
  altDesc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

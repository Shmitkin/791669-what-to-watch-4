import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class GenreItem extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {genre} = this.props;

    return (
      <li className="catalog__genres-item">
        <a href="#" className="catalog__genres-link">{genre}</a>
      </li>
    );
  }
}

GenreItem.propTypes = {
  genre: PropTypes.string.isRequired
};

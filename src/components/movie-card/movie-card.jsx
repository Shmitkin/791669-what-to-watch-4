import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, preview, onHover, onUnhover, onClick} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter = {() => onHover(title)}
        onMouseLeave = {onUnhover}
        onClick = {onClick}
      >
        <div className="small-movie-card__image">
          <img
            src = {preview}
            alt = {title}
            width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            className="small-movie-card__link"
            href="movie-page.html">{title}
          </a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  preview: PropTypes.string.isRequired,
  onHover: PropTypes.func.isRequired,
  onUnhover: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
};

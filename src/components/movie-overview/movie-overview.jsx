import React, {PureComponent} from "react";
import PropTypes from "prop-types";

export default class MovieOverview extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="movie-card__info">
        <div className="movie-card__poster movie-card__poster--big">
          <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
        </div>

        <div className="movie-card__desc">
          <nav className="movie-nav movie-card__nav">
            <ul className="movie-nav__list">
              <li className="movie-nav__item movie-nav__item--active">
                <a href="#" className="movie-nav__link">Overview</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Details</a>
              </li>
              <li className="movie-nav__item">
                <a href="#" className="movie-nav__link">Reviews</a>
              </li>
            </ul>
          </nav>

          <div className="movie-rating">
            <div className="movie-rating__score">8,9</div>
            <p className="movie-rating__meta">
              <span className="movie-rating__level">Very good</span>
              <span className="movie-rating__count">240 ratings</span>
            </p>
          </div>

          <div className="movie-card__text">
            <p>In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave&quot;s friend and protege.</p>

            <p>Gustave prides himself on providing first-class service to the hotel&quot;s guests, including satisfying the sexual needs of the many elderly women who stay there. When one of Gustave&quot;s lovers dies mysteriously, Gustave finds himself the recipient of a priceless painting and the chief suspect in her murder.</p>

            <p className="movie-card__director"><strong>Director: Wes Andreson</strong></p>

            <p className="movie-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
          </div>
        </div>
      </div>
    );
  }
}

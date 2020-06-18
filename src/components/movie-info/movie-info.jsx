import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieDescription from "../movie-description/movie-description.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieInfoNav from "../movie-info-nav/movie-info-nav.jsx";
import MovieInfoPoster from "../movie-info-poster/movie-info-poster.jsx";

export default class MovieInfo extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {movie, similarMovies, onMovieCardClick} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">

            <MovieBackground
              movie = {movie}
            />

            <h1 className="visually-hidden">WTW</h1>

            <PageHeader />

            <div className="movie-card__wrap">

              <MovieDescription
                movie = {movie}
                isMovieDetails = {true}
              />

            </div>
          </div>
          <div className="movie-card__wrap movie-card__translate-top">
            <div className="movie-card__info">
              <MovieInfoPoster
                movie = {movie}
              />

              <div className="movie-card__desc">

                <MovieInfoNav />
                <MovieOverview
                  movie = {movie}
                />
              </div>
            </div>

          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>

            <MovieCardsList
              movies = {similarMovies}
              onMovieCardClick = {onMovieCardClick}
            />

          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfo.propTypes = {
  similarMovies: PropTypes.array.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
};


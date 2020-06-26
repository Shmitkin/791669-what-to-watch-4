import React from "react";
import PropTypes from "prop-types";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieDescription from "../movie-description/movie-description.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import MovieOverview from "../movie-overview/movie-overview.jsx";
import MovieInfoNav from "../movie-info-nav/movie-info-nav.jsx";
import MovieInfoPoster from "../movie-info-poster/movie-info-poster.jsx";
import MovieDetails from "../movie-details/movie-details.jsx";
import MovieReviews from "../movie-reviews/movie-reviews.jsx";
import {MovieInfoTitles} from "../../consts.js";

export default class MovieInfo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: MovieInfoTitles.OVERVIEW
    };

    this._tabClickHandler = this._tabClickHandler.bind(this);
  }

  _getTabInfo(movie) {
    switch (this.state.activeTab) {
      case MovieInfoTitles.OVERVIEW:
        return <MovieOverview
          movie = {movie}
        />;
      case MovieInfoTitles.DETAILS:
        return <MovieDetails
          movie = {movie}
        />;
      case MovieInfoTitles.REVIEWS:
        return <MovieReviews
          movie = {movie}
        />;
      default:
        return <MovieOverview
          movie = {movie}
        />;
    }
  }

  _tabClickHandler(activeTab) {
    this.setState({
      activeTab
    });
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
                <MovieInfoNav
                  onClick = {this._tabClickHandler}
                  activeTab = {this.state.activeTab}
                />
                {this._getTabInfo(movie)}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieCardsList
              movies = {similarMovies}
              onMovieCardClick = {(activeMovie) => {
                onMovieCardClick(activeMovie);
                this.setState({
                  activeTab: MovieInfoTitles.OVERVIEW
                });
              }}
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


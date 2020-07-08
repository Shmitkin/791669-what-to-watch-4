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
import {MovieInfoTabs} from "../../consts.js";
import {getMoviesWithGenre, getMovieById} from "../../selectors.js";
import {connect} from "react-redux";
import UserBlock from "../user-block/user-block.jsx";


class MovieInfo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _getTabInfo() {
    const {activeTab, getMovie, match} = this.props;
    const movie = getMovie(match.params.id);
    switch (activeTab) {
      case MovieInfoTabs.OVERVIEW:
        return <MovieOverview
          movie = {movie}
        />;
      case MovieInfoTabs.DETAILS:
        return <MovieDetails
          movie = {movie}
        />;
      case MovieInfoTabs.REVIEWS:
        return <MovieReviews
          movie = {movie}
        />;
      default:
        return <MovieOverview
          movie = {movie}
        />;
    }
  }

  _getSimilarMovies(id, genre) {
    const {getMoviesByGenre} = this.props;
    const moviesWithSameGenre = getMoviesByGenre(genre);
    return moviesWithSameGenre.filter((movie) => movie.id !== id);
  }

  render() {
    const {getMovie, onTabClick, activeTab, match} = this.props;
    const movie = getMovie(match.params.id);
    return (
      <React.Fragment>
        <section className="movie-card movie-card--full">
          <div className="movie-card__hero">
            <MovieBackground
              movie = {movie}
            />
            <h1 className="visually-hidden">WTW</h1>
            <PageHeader extraClass={`movie-card__head`}>
              <UserBlock />
            </PageHeader>
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
                  onClick = {onTabClick}
                  activeTab = {activeTab}
                />
                {this._getTabInfo()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieCardsList
              movies = {this._getSimilarMovies(movie.id, movie.genre)}
            />
          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MovieInfo.propTypes = {
  getMoviesByGenre: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  getMovie: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  getMoviesByGenre: (genre) => (getMoviesWithGenre(state.movies, genre)),
  movie: state.activeMovie,
  getMovie: (id) => (getMovieById(state.movies, id)),
});

export {MovieInfo};
export default connect(mapStateToProps)(MovieInfo);

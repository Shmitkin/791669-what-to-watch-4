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
import {getMoviesWithGenre} from "../../selectors.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import UserBlock from "../user-block/user-block.jsx";


class MovieInfo extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  _getTabInfo() {
    const {movie, activeTab} = this.props;
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
    const {getMovieByGenre} = this.props;
    const moviesWithSameGenre = getMovieByGenre(genre);
    return moviesWithSameGenre.filter((movie) => movie.id !== id);
  }

  render() {
    const {movie, onTabClick, activeTab, onMovieCardClick} = this.props;
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
              onMovieCardClick = {onMovieCardClick}
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
  getMovieByGenre: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
  movie: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  getMovieByGenre: (genre) => (getMoviesWithGenre(state.movies, genre)),
  movie: state.activeMovie,
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movie) {
    dispatch(ActionCreator.setActiveMovie(movie));
  }
});


export {MovieInfo};
export default connect(mapStateToProps, mapDispatchToProps)(MovieInfo);

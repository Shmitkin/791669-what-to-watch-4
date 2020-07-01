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

const DEFAULT_MOVIE_INFO_TAB = MovieInfoTabs.OVERVIEW;

class MovieInfo extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: DEFAULT_MOVIE_INFO_TAB,
      similarMovies: this._getSimilarMovies(this.props.movie.title, this.props.movie.genre)
    };

    this._tabClickHandler = this._tabClickHandler.bind(this);
    this._onMovieCardClick = this._onMovieCardClick.bind(this);
  }

  _getTabInfo() {
    const {movie} = this.props;
    switch (this.state.activeTab) {
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

  _tabClickHandler(activeTab) {
    this.setState({
      activeTab
    });
  }

  _getSimilarMovies(movieTitle, genre) {
    const {getMovieByGenre} = this.props;
    const moviesWithSameGenre = getMovieByGenre(genre);
    return moviesWithSameGenre.filter((movie) => movie.title !== movieTitle);
  }

  _onMovieCardClick(movie) {
    const {onMovieCardClick} = this.props;
    this.setState({
      similarMovies: this._getSimilarMovies(movie.title, movie.genre),
      activeTab: DEFAULT_MOVIE_INFO_TAB
    });
    onMovieCardClick(movie);

  }

  render() {
    const {movie} = this.props;
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
                {this._getTabInfo()}
              </div>
            </div>
          </div>
        </section>

        <div className="page-content">
          <section className="catalog catalog--like-this">
            <h2 className="catalog__title">More like this</h2>
            <MovieCardsList
              onMovieCardClick = {this._onMovieCardClick}
              movies = {this.state.similarMovies}
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

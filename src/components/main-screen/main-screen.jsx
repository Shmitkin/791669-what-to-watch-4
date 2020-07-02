import React from "react";
import PropTypes from "prop-types";
import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import HeaderMovieInfo from "../header-movie-info/header-movie-info.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import {getMoviesWithGenre} from "../../selectors.js";
import {DEFAULT_GENRE, SHOW_MORE_COUNT} from "../../consts.js";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import withActiveTab from "../../hocs/with-active-tab.jsx";

const GenresListWrapped = withActiveTab(GenresList, DEFAULT_GENRE);

class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      movies: this.props.getMoviesByGenre(DEFAULT_GENRE),
      showingMoviesCount: SHOW_MORE_COUNT,
    };

    this._onGenreClickHandler = this._onGenreClickHandler.bind(this);
  }

  _isShowMoreButtonRequired() {
    return this.state.movies.length > this.state.showingMoviesCount;
  }

  _onGenreClickHandler(genre) {
    const {getMoviesByGenre} = this.props;
    this.setState({
      movies: getMoviesByGenre(genre),
    });
  }

  render() {
    const {mainMovie, onMovieCardClick} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieBackground
            movie = {mainMovie}
          />
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader />
          <div className="movie-card__wrap">
            <HeaderMovieInfo
              movie = {mainMovie}
              isMovieDetails = {false}
            />
          </div>
        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>
            <GenresListWrapped
              onClick = {this._onGenreClickHandler}
            />
            <MovieCardsList
              onMovieCardClick = {onMovieCardClick}
              movies={this.state.movies.slice(0, this.state.showingMoviesCount)}
            />
            {this._isShowMoreButtonRequired() ? <ShowMoreButton onClick = {()=>{
              this.setState({
                showingMoviesCount: this.state.showingMoviesCount + SHOW_MORE_COUNT
              });
            }}/> : null}
          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {
  mainMovie: PropTypes.object.isRequired,
  getMoviesByGenre: PropTypes.func.isRequired,
  onMovieCardClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainMovie: state.mainMovie,
  getMoviesByGenre: (genre) => (getMoviesWithGenre(state.movies, genre))
});

const mapDispatchToProps = (dispatch) => ({
  onMovieCardClick(movie) {
    dispatch(ActionCreator.setActiveMovie(movie));
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

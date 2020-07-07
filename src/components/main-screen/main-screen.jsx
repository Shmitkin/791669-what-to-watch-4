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
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import UserBlock from "../user-block/user-block.jsx";


class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onGenreClickHandler = this._onGenreClickHandler.bind(this);
  }

  _onGenreClickHandler(genre) {
    const {onGenreClick, onTabClick} = this.props;
    onGenreClick();
    onTabClick(genre);
  }

  _getMovies() {
    const {getMoviesByGenre, showingMoviesCount, activeTab} = this.props;
    return getMoviesByGenre(activeTab).slice(0, showingMoviesCount);
  }

  _renderShowMoreButton() {
    const {showingMoviesCount, onShowMoreButtonCLick} = this.props;
    const movies = this._getMovies();

    return movies.length >= showingMoviesCount ?
      <ShowMoreButton onClick = {onShowMoreButtonCLick}/> : null;
  }

  render() {
    const {mainMovie, activeTab} = this.props;
    const movies = this._getMovies();
    return (
      <React.Fragment>
        <section className="movie-card">
          <MovieBackground
            movie = {mainMovie}
          />
          <h1 className="visually-hidden">WTW</h1>
          <PageHeader extraClass={`movie-card__head`}>
            <UserBlock />
          </PageHeader>

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
            <GenresList
              activeTab={activeTab}
              onTabClick={this._onGenreClickHandler}
            />
            <MovieCardsList
              movies={movies}
            />
            {this._renderShowMoreButton()}
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
  activeTab: PropTypes.string.isRequired,
  onTabClick: PropTypes.func.isRequired,
  showingMoviesCount: PropTypes.number.isRequired,
  onShowMoreButtonCLick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mainMovie: state.mainMovie,
  getMoviesByGenre: (genre) => (getMoviesWithGenre(state.movies, genre)),
  showingMoviesCount: state.showingMoviesCount,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick() {
    dispatch(ActionCreator.resetMoviesShowingCount());
  },
  onShowMoreButtonCLick() {
    dispatch(ActionCreator.increaseMoviesShowingCount());
  }
});

export {MainScreen};
export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);

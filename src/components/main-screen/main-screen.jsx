import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCardsList from "../movie-cards-list/movie-cards-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import HeaderMovieInfo from "../header-movie-info/header-movie-info.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieBackground from "../movie-background/movie-background.jsx";
import UserBlock from "../user-block/user-block.jsx";

import {getMoviesByGenre, getPromoMovie, getGenres} from "../../reducer/data/selectors.js";
import {getShowingMovieCount} from "../../reducer/main/selectors.js";
import {ActionCreator} from "../../reducer/main/main.js";


class MainScreen extends React.PureComponent {
  constructor(props) {
    super(props);

    this._onGenreClickHandler = this._onGenreClickHandler.bind(this);
  }

  _onGenreClickHandler(genre) {
    const {onTabClick, onGenreClick} = this.props;
    onTabClick(genre);
    onGenreClick();
  }

  render() {
    const {promoMovie, activeTab, movies, showingMoviesCount, onShowMoreButtonCLick, genres} = this.props;
    return (
      <React.Fragment>
        <section className="movie-card">

          <MovieBackground movie = {promoMovie} />

          <h1 className="visually-hidden">WTW</h1>

          <PageHeader extraClass={`movie-card__head`}>
            <UserBlock />
          </PageHeader>

          <div className="movie-card__wrap">
            <HeaderMovieInfo movie = {promoMovie} isMovieDetails = {false} />
          </div>

        </section>
        <div className="page-content">
          <section className="catalog">
            <h2 className="catalog__title visually-hidden">Catalog</h2>

            <GenresList activeTab={activeTab} onTabClick={this._onGenreClickHandler} genres = {genres} />

            <MovieCardsList movies={movies.slice(0, showingMoviesCount)} />

            {movies.length >= showingMoviesCount ?
              <ShowMoreButton onClick = {onShowMoreButtonCLick}/> : null
            }

          </section>
          <PageFooter />
        </div>
      </React.Fragment>
    );
  }
}

MainScreen.propTypes = {
  promoMovie: PropTypes.object.isRequired,
  movies: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  showingMoviesCount: PropTypes.number.isRequired,
  onShowMoreButtonCLick: PropTypes.func.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  onTabClick: PropTypes.func.isRequired,
  genres: PropTypes.array.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  promoMovie: getPromoMovie(state),
  movies: getMoviesByGenre(state, ownProps),
  showingMoviesCount: getShowingMovieCount(state),
  genres: getGenres(state),
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

import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import ShowMoreButton from "../show-more-button/show-more-button.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import PageFooter from "../page-footer/page-footer.jsx";
import MovieCardInfo from "../movie-card-info/movie-card-info.jsx";
import PageHeader from "../page-header/page-header.jsx";
import MovieCardBg from "../movie-card-bg/movie-card-bg.jsx";

const MainScreen = ({mainMovieTitle, mainMovieGenre, mainMovieReleaseDate, movies, genres}) => {

  return (
    <React.Fragment>
      <section className="movie-card">

        <MovieCardBg altDesc = {mainMovieTitle} />

        <h1 className="visually-hidden">WTW</h1>

        <PageHeader />

        <div className="movie-card__wrap">

          <MovieCardInfo
            title = {mainMovieTitle}
            genre = {mainMovieGenre}
            release = {mainMovieReleaseDate}
          />

        </div>
      </section>
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList genres = {genres} />
          <MoviesList movies = {movies} />
          <ShowMoreButton />

        </section>

        <PageFooter />
      </div>
    </React.Fragment>
  );
};

MainScreen.propTypes = {
  mainMovieTitle: PropTypes.string.isRequired,
  mainMovieGenre: PropTypes.string.isRequired,
  mainMovieReleaseDate: PropTypes.number.isRequired,
  movies: PropTypes.array.isRequired,
  genres: PropTypes.array.isRequired,
};

export default MainScreen;

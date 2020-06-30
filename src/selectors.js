import {DEFAULT_GENRE} from "./consts.js";

export const getGenres = (movies) => {
  const genres = movies.reduce((genresAccum, movie) => {
    return genresAccum.add(movie.genre);
  }, new Set([DEFAULT_GENRE]));

  return Array.from(genres);
};

export const getMoviesByGenre = (movies, genre) => {
  if (genre === DEFAULT_GENRE) {
    return movies;
  } else {
    return movies.filter((movie) => movie.genre === genre);
  }
};

import {getGenres, getMoviesWithGenre, getMovieById} from "./selectors.js";
import {DEFAULT_GENRE} from "./consts.js";

const MOCK_GENRE = `Drama`;


// total genres: 3 (2 unique genres in movies and DEFAULT_GENRE)
// 2 movies for each genre
const moviesForGenreTest = [
  {genre: MOCK_GENRE}, {genre: `Comedy`}, {genre: MOCK_GENRE}, {genre: `Comedy`}
];

const mockId = `77`;

const mockMovies = [{id: 2}, {id: 3}, {id: 4}, {id: 7}, {id: mockId}, {id: 67}];

describe(`getGenres will return`, () => {
  it(`array with DEFAULT_GENRE when there is no movies`, () => {
    expect(getGenres([])).toEqual(
        [DEFAULT_GENRE]
    );
  });

  it(`array with DEFAULT_GENRE and unique genres`, () => {
    expect(getGenres(moviesForGenreTest))
    .toHaveLength(3);
  });
});

describe(`getMoviesWithGenre will return`, () => {
  it(`array with movies without changing when genre is DEFAULT_GENRE`, () => {
    expect(getMoviesWithGenre(moviesForGenreTest, DEFAULT_GENRE))
    .toEqual(moviesForGenreTest);
  });

  it(`array with movies, which genre is MOCK_GENRE`, () => {
    expect(getMoviesWithGenre(moviesForGenreTest, MOCK_GENRE))
    .toHaveLength(2);
  });
});

it(`Should return movie with id`, ()=>{
  expect(getMovieById(mockMovies, mockId)).toEqual({id: mockId});
});

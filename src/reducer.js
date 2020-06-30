const extend = (a, b) => {
  return Object.assign({}, a, b);
};

const initialState = {
  currentGenre: `All genres`,
  movies: [],
  mainMovie: {},
};

const ActionType = {
  SET_GENRE: `SET_GENRE`,
  SET_MOVIES: `SET_MOVIES`,
  SET_MAIN_MOVIE: `SET_MAIN_MOVIE`,
};

export const ActionCreator = {
  setGenre: (genre) => ({
    type: ActionType.SET_GENRE,
    payload: genre
  }),

  setMovies: (movies) => ({
    type: ActionType.SET_MOVIES,
    payload: movies,
  }),

  setMainMovie: (movie) => ({
    type: ActionType.SET_MAIN_MOVIE,
    payload: movie,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_GENRE:
      return extend(state, {
        currentGenre: action.payload,
      });
    case ActionType.SET_MOVIES:
      return extend(state, {
        movies: action.payload,
      });
    case ActionType.SET_MAIN_MOVIE:
      return extend(state, {
        mainMovie: action.payload,
      });
  }
  return state;
};


export {reducer, ActionType};

import {extend} from "../../utils.js";
import {Movies} from "../../consts.js";

const initialState = {
  showingMoviesCount: Movies.DEFAULT_SHOW_COUNT,
};

const ActionType = {
  INCREASE_MOVIES_SHOWING_COUNT: `INCREASE_MOVIES_SHOWING_COUNT`,
  RESET_MOVIES_SHOWING_COUNT: `RESET_MOVIES_SHOWING_COUNT`,
};

export const ActionCreator = {
  increaseMoviesShowingCount: () => ({
    type: ActionType.INCREASE_MOVIES_SHOWING_COUNT,
    payload: Movies.SHOW_MORE_COUNT,
  }),
  resetMoviesShowingCount: () => ({
    type: ActionType.RESET_MOVIES_SHOWING_COUNT,
    payload: Movies.DEFAULT_SHOW_COUNT,
  }),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE_MOVIES_SHOWING_COUNT:
      return extend(state, {
        showingMoviesCount: state.showingMoviesCount + action.payload
      });
    case ActionType.RESET_MOVIES_SHOWING_COUNT:
      return extend(state, {
        showingMoviesCount: action.payload
      });
  }
  return state;
};


export {reducer, ActionType};

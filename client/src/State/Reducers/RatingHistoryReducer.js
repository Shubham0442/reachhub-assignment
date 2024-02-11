import {
  GET_PLAYER_RATING_HISTORY_FAILURE,
  GET_PLAYER_RATING_HISTORY_REQUEST,
  GET_PLAYER_RATING_HISTORY_SUCCESS,
  SET_PLAYER_RATING_HISTORY_TO_INITIAL
} from "../ActionTypes/RatingHistoryActionsTypes";

const initState = {
  isLoading: false,
  isError: false,
  ratingHistory: []
};

export const ratingHistoryReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_PLAYER_RATING_HISTORY_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case GET_PLAYER_RATING_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ratingHistory: payload
      };
    case GET_PLAYER_RATING_HISTORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        ratingHistory: []
      };
    case SET_PLAYER_RATING_HISTORY_TO_INITIAL:
      return {
        ...state,
        isLoading: false,
        isError: false,
        ratingHistory: []
      };
    default:
      return state;
  }
};

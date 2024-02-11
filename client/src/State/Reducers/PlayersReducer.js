import {
  GET_TOP_PLAYERS_FAILURE,
  GET_TOP_PLAYERS_REQUEST,
  GET_TOP_PLAYERS_SUCCESS
} from "../ActionTypes/PlayersActionTypes";

const initState = {
  isLoading: false,
  isError: false,
  topPlayers: []
};

export const playersReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_TOP_PLAYERS_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        topPlayers: []
      };
    case GET_TOP_PLAYERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        topPlayers: payload
      };
    case GET_TOP_PLAYERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        topPlayers: []
      };
    default:
      return state;
  }
};

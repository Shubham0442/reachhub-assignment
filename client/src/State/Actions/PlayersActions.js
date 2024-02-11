import axios from "axios";
import {
  GET_TOP_PLAYERS_FAILURE,
  GET_TOP_PLAYERS_REQUEST,
  GET_TOP_PLAYERS_SUCCESS
} from "../ActionTypes/PlayersActionTypes";

export const getTopPlayers = (token) => (dispatch) => {
  dispatch({ type: GET_TOP_PLAYERS_REQUEST });
  axios({
    url: "https://reachhub-server.onrender.com/top-players",
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      dispatch({ type: GET_TOP_PLAYERS_SUCCESS, payload: res.data.players });
    })
    .catch((err) => {
      dispatch({ type: GET_TOP_PLAYERS_FAILURE });
    });
};

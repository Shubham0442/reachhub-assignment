import axios from "axios";
import {
  DOWNLOAD_RATING_HISTORY_FAILURE,
  DOWNLOAD_RATING_HISTORY_REQUEST,
  DOWNLOAD_RATING_HISTORY_SUCCESS,
  GET_PLAYER_RATING_HISTORY_FAILURE,
  GET_PLAYER_RATING_HISTORY_REQUEST,
  GET_PLAYER_RATING_HISTORY_SUCCESS,
  SET_PLAYER_RATING_HISTORY_TO_INITIAL
} from "../ActionTypes/RatingHistoryActionsTypes";

export const getPlayerRatingHistory = (username, token) => (dispatch) => {
  dispatch({ type: GET_PLAYER_RATING_HISTORY_REQUEST });
  return axios({
    url: `https://reachhub-server.onrender.com/players/${username}/rating-history`,
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      return dispatch({
        type: GET_PLAYER_RATING_HISTORY_SUCCESS,
        payload: res.data.rating_history
      });
    })
    .catch(() => {
      dispatch({ type: GET_PLAYER_RATING_HISTORY_FAILURE });
    });
};

export const setRatingHistoryInitial = () => (dispatch) => {
  dispatch({ type: SET_PLAYER_RATING_HISTORY_TO_INITIAL });
};

export const downloadRatingHistory = (token) => (dispatch) => {
  dispatch({ type: DOWNLOAD_RATING_HISTORY_REQUEST });
  return axios({
    url: "https://reachhub-server.onrender.com/players/rating-history-csv",
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then((res) => {
      console.log(res.data);
      return dispatch({
        type: DOWNLOAD_RATING_HISTORY_SUCCESS,
        payload: res.data
      });
    })
    .catch((err) => {
      dispatch({ type: DOWNLOAD_RATING_HISTORY_FAILURE });
    });
};

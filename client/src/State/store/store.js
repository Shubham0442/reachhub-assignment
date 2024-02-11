import { thunk } from "redux-thunk";
import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";

import { authReducer } from "../Reducers/AuthReducer";
import { playersReducer } from "../Reducers/PlayersReducer";
import { ratingHistoryReducer } from "../Reducers/RatingHistoryReducer";

const rootReducer = combineReducers({
  authReducer,
  playersReducer,
  ratingHistoryReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = legacy_createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import searchReducer from "../reducers/search.js";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const initialState = {
  searchInput: "",
  results: [],
};

const rootReducer = combineReducers({
  searchInput: searchReducer,
});

export default function configureStore() {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  );
}

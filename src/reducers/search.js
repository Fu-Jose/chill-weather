import { initialState } from "../store/index.js";

const searchReducer = (state = initialState.searchInput, action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return {
        searchInput: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;

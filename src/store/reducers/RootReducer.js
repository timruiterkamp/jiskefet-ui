import { combineReducers } from "redux";
import { DataReducer } from "./data/DataReducer";

export default combineReducers({
  data: DataReducer
});

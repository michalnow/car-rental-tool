import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import carReducer from "./carReducer";

export default combineReducers({
  errors: errorReducer,
  car: carReducer
});

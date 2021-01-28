import { combineReducers } from "redux";
import { SubmitAppReducer } from "../reducers/submitAppReducer";
import { AppStatsReducer } from "../reducers/appstatsReducer";

const rootReducer = combineReducers({
  SubmitAppReducer,
  AppStatsReducer,
});

export default rootReducer;

import { SUBMIT_APP_JSON_DATA, ALL_COMMENTS } from "../constants/submitApp";

let initState = {
  submitAppformData: [],
  comments: [],
};

export const SubmitAppReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_APP_JSON_DATA:
      return {
        ...state,
        submitAppformData: payload,
      };
    case ALL_COMMENTS:
      return {
        ...state,
        comments: payload,
      };
    default:
      return state;
  }
};

import { SUBMIT_APP_JSON_DATA } from "../constants/submitApp";

let initState = {
  submitAppformData: [],
};

export const SubmitAppReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT_APP_JSON_DATA:
      return {
        ...state,
        submitAppformData: payload,
      };
    default:
      return state;
  }
};

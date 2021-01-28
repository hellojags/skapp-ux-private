import { IS_APP_IN_FAV, IS_APP_IN_LIKED } from "../constants/appStats";

let initState = {
  isAppInFav: "",
  isAppLiked: "",
};

export const AppStatsReducer = (state = initState, action) => {
  const { type, payload } = action;

  switch (type) {
    case IS_APP_IN_FAV:
      return {
        ...state,
        isAppInFav: payload,
      };

    case IS_APP_IN_LIKED:
      return {
        ...state,
        isAppLiked: payload,
      };
    default:
      return state;
  }
};

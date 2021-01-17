let initState = {};

export const SubmitAppReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "":
      return {
        ...state,
      };
    default:
      return state;
  }
};

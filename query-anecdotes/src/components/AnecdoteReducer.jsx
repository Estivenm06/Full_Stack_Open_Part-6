export const anecdoteReducer = (state = null, action) => {
  switch (action.type) {
    case "VOTE":
      if (action.payload !== null) {
        return {
          message: `anecdote '${action.payload.content}' voted`,
          type: "success",
        };
      } else {
        return null;
      }
    case "CREATE_NEW":
      if (action.payload !== null) {
        return {
          message: `anecdote '${action.payload}' created`,
          type: "success",
        };
      } else {
        return null;
      }
    case "ERROR":
      if (action.payload !== null) {
        return { message: action.payload, type: "error" };
      } else {
        return null;
      }
    default:
      return state;
  }
};

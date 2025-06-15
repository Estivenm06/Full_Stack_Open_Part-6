export const anecdoteReducer = (state = null, action) => {
  switch (action.type) {
    case "VOTE":
      if (action.payload !== null) {
        return `anecdote '${action.payload.content}' voted`;
      } else {
        return null;
      }
    case "CREATE_NEW":
      if (action.payload !== null) {
        return `anecdote '${action.payload}' created`;
      } else {
        return null;
      }
    case "ERROR":
      if (action.payload !== null) {
        return action.payload;
      } else {
        return null;
      }
    default:
      return state;
  }
};

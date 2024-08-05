const filterReducer = (state = null, action) => {
  switch(action.type){
    case 'SEARCH':
      return action.payload
    default:
      return state
  }
};

export const filterChange = (filter) => {
  return {
    type: "SEARCH",
    payload: filter,
  };
};

export default filterReducer;

import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    NEW_NOTIFICATION(state, action) {
      return action.payload;
    },
    HIDE_NOTIFICATION(state, action) {
      return null;
    },
  },
});

export const setNotification = (payload, timeout) => {
  return async dispatch => {
    dispatch(NEW_NOTIFICATION(payload))
    setTimeout(() => {
      dispatch(HIDE_NOTIFICATION())
    }, timeout)
  }
}

export const { NEW_NOTIFICATION, HIDE_NOTIFICATION } =
  notificationSlice.actions;
export default notificationSlice.reducer;

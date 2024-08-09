import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    NEW_NOTIFICATION(state, action) {
      return action.payload.payload;
    },
    HIDE_NOTIFICATION(state, action) {
      return null;
    },
  },
});

export const { NEW_NOTIFICATION, HIDE_NOTIFICATION } =
  notificationSlice.actions;
export default notificationSlice.reducer;

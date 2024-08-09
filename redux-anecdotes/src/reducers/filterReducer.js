import { createSlice } from "@reduxjs/toolkit";

const initialState = null

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterChange(state, action){
      const content = action.payload !== null
      ? action.payload
      : state
      return content
    }
  }

})

export const { filterChange } = filterSlice.actions
export default filterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

const editBookSlice = createSlice({
  name: "editBook",
  initialState: null,
  reducers: {
    setEditBook: (state, action) => action.payload,
    clearEditBook: () => null,
  },
});

export const { setEditBook, clearEditBook } = editBookSlice.actions;
export default editBookSlice.reducer;

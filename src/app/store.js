import { configureStore } from "@reduxjs/toolkit";
import { bookApi } from "../features/bookApi";
import editBookReducer from "../features/editBookSlice";
export const store = configureStore({
  reducer: {
    [bookApi.reducerPath]: bookApi.reducer,
    editBook: editBookReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(bookApi.middleware),
});

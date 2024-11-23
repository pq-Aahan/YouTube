import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Import the appSlice reducer
import searchSlice from "./searchSlice"; // Import the searchSlice reducer
import chatSlice from "./chatSlice"; // Import the chatSlice reducer

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice, // Correctly referenced chatSlice
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Import the appSlice reducer
import searchSlice from "./searchSlice"; // Import the appSlice reducer


const store=configureStore({
reducer:{
    app: appSlice,
    search:searchSlice,
},
});

export default store;
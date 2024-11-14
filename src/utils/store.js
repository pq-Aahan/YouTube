import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice"; // Import the appSlice reducer

const store=configureStore({
reducer:{
    app: appSlice,
},
});

export default store;
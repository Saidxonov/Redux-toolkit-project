import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./todoSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    users: userReducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cartSlice";
import userReducer from "../features/userSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

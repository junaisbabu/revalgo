import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/products-slice";
import cartsReducer from "./slices/carts-slice";
import usersReducer from "./slices/users-slice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

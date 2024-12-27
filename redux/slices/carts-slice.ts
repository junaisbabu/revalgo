import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "@/axios";
import { Cart, CartState } from "@/types/cart";

const initialState: CartState = {
  carts: [],
  loading: false,
  error: null,
};

export const fetchCarts = createAsyncThunk<Cart[]>(
  "carts/fetchCarts",
  async () => {
    const response = await api.get("/carts");
    return response.data;
  }
);

const productsSlice = createSlice({
  name: "carts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCarts.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCarts.fulfilled, (state, action) => {
        state.loading = false;
        state.carts = action.payload;
      })
      .addCase(fetchCarts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Something went wrong";
      });
  },
});

export default productsSlice.reducer;

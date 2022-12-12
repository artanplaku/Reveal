import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  total: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      state.items.push(item);
      state.total += item.price;
    },
    removeFromCart: (state, action) => {
      const item = action.payload;
      state.items = state.items.filter(i => i.id !== item.id);
      state.total -= item.price;
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
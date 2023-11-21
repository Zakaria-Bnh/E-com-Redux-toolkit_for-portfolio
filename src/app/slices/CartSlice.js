import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "ShoppingCart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      // finding the item in the cart first

      const cartitem = state.cartItems.find((item) => {
        return item.id === action.payload.id;
      });

      // if the item is found we increas the amount that's already there by 1.

      if (cartitem) {
        state.cartItems.map((item) => {
          if (item.id === action.payload.id) {
            return item.amount++
          }
        });
      } else {
        state.cartItems.push({ ...action.payload, amount: 1 , itemAdded: true });
      }
    },
  },
});

export const { addtocart } = CartSlice.actions;
export const selectCartitems = (state) => state.ShoppingCart.cartItems;
export const selectTotalPrice = (state) => state.ShoppingCart.cartItems.reduce((acc, curr)=>{
  return acc + curr.price * curr.amount
},0);

export default CartSlice.reducer;

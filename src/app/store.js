import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slices/ProductsSlices";
import ProductQuickViewReducer from "./slices/ProductQuickViewSlice";

export const store = configureStore({
    reducer: {
        products : ProductsReducer,
        ProductQuickViewReducer,
    }
})
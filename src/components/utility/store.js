import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import shippingInfoSlice from "./shippingInfoSlice";
const store = configureStore(
    {
        //slices
        reducer:{
            cart:cartSlice,
            shipping:shippingInfoSlice
        }
    }
)

export default store;
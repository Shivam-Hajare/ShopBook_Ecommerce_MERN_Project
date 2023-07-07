import { createSlice } from "@reduxjs/toolkit"

const shippingInfoSlice = createSlice(
    {
        name: "shippingInfo",
        initialState: {
            shippingData: localStorage.getItem('shippingAddress') ?
                JSON.parse(localStorage.getItem('shippingAddress')) :
                {fullname: "",
                    address: "",
                    city: "",
                    postalcode: "",
                    country: ""}
        },
        reducers:
        {
            addShippingData: (state, action) => {
                state.shippingData=action.payload
            },
            removeShippingData: (state, action) => {
                state.shippingData={}
            },
            
        }
    }
)
export const { addShippingData, removeShippingData } = shippingInfoSlice.actions;
export default shippingInfoSlice.reducer;
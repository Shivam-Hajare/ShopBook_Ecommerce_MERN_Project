import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice(
    {
        name:'cart',
        initialState:{
            items:[{
                "quantity":"1",
                "_id": "6406ac17c3d0b69f685023c1",
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ],
                "__v": 0
            }]
        },
        reducers:{
            addItem:(state,action)=>{
                
                state.items.push({quantity:1, ...action.payload})
            },

            addQuantity: (state,action)=> {
                    state.items.forEach(item=> {
                        if(item.id === action.payload) {
                            item.quantity++;
                        }
                    })
            },
            removeQuantity:(state,action)=>{
                state.items.forEach(item=> {
                  
                    if(item.id === action.payload) {
                        if(item.quantity===1)
                        {
                            state.items = state.items.filter(item => item.id !== action.payload);
                        }
                        else
                        item.quantity--;
                    }
                })

            },
            removeItem:(state,action)=>{
                //state.items.pop();
                 state.items = state.items.filter(item => item.id !== action.payload)
            },
            clearCart:(state)=>{ 
                state.items=[];
            }
        }
    }
);
export const {addItem, removeItem, clearCart,addQuantity,removeQuantity} = cardSlice.actions;
export default cardSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
name: 'cart',
initialState: {
    items: [],
    totalQuantity: 0,
},
reducers:{
    addItemtoCart(state, action){
        const newitem= action.payload;
        const existingitem=state.items.find(item=>item.id===newitem.id);
        state.totalQuantity=state.totalQuantity+1;
        if(!existingitem){
            state.items.push({itemIt: newitem.id,
                price: newitem.price,
                quantity:1,
                name:newitem.name});
        } else {
            existingitem.quantity=existingitem.quantity+1;
            existingitem.totalPrice=existingitem.totalPrice+ newitem.price;
        }
    },
    removeItemfromCart(state, action){
        const id=action.payload;
        const existingitem= state.items.find(item=>item.id===id);
        state.totalQuantity=state.totalQuantity-1;
        if (existingitem.quantity===1){
        state.items=state.items.filter(item=>item.id!==id);
        } else {
            existingitem.quantity=existingitem.quantity-1;
            existingitem.totalPrice=existingitem.totalPrice- existingitem.price;
        }
    }
}})
export const cartAction= cartSlice.actions;
export default cartSlice;
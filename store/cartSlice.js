import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items : [],
    delivery: 10,
    freeDeliveryFrom : 200,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCartItem : (state,action)=>{
            const newProduct = action.payload.product;
            const carItem = state.items.find((item) =>item.product.id === newProduct.id);
            if(carItem){
                carItem.quantity+=1; 
            }else{
                state.items.push({product: newProduct, quantity: 1});
            }        
        },

        changeQuantity: (state, action) => {
            const {productId, amount} = action.payload;
            const cartItem = state.items.find((item) =>item.product.id === productId);
            if(cartItem){
                cartItem.quantity += amount;
                //carItem.quantity = carItem.quantity + amount;
            }          
            if(cartItem.quantity <= 0) {
                state.items = state.items.filter((item)=> item !== cartItem);
            }    
        }
    }
});

export const selectNumberOfItems = (state) => state.cart.items.length;

export const selectSubtutotal = (state) => state.cart.items.reduce(
    (sum,cartItems) => (sum + cartItems.product.price * cartItems.quantity), 0
)
 

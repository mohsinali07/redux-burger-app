import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    totalBill: 3.00,
    ingredients: {
        lettuce: {
            name: 'lettuce',
            price: 0.50,
            quantity: 0
        },
        bacon: {
            name: 'bacon',
            price: 0.70,
            quantity: 0
        },
        cheese: {
            name: 'cheese',
            price: 0.40,
            quantity: 0
        },
        meat: {
            name: 'meat',
            price: 1.30,
            quantity: 0
        }
    }
};

const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {
        updateIngredient: (state, action) => {
            const ingredient = state.ingredients[action.payload.key];
            ingredient.quantity = Math.max(0, ingredient.quantity + action.payload.operation);
            state.totalBill += ingredient.price * action.payload.operation;
        }
    }
});

export const { updateIngredient } = orderSlice.actions;

export default orderSlice.reducer;

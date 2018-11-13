import { actionType } from '../actions.js'

const initialState = { cart: [] };

export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case actionType.ADD_TO_CART:
      return {
        cart: [...state.cart, action.payload]
      }
    default:
        return state;
    }
}

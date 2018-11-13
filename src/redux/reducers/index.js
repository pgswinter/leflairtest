import { actionType } from "../actions";

const initialState = { items: [] };

export function productsReducer(state = initialState, action){
	switch (action.type) {
		case actionType.GET_PRODUCTS:
			return Object.assign(
				{},
				{
					items: action.payload.Items
				}
			);
		default:
			return state;
	}
};

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
  
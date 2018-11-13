const getProductsPath = require('../data.json');

export const actionType = {
    GET_PRODUCTS: "get_products",
    ADD_TO_CART: "add_to_cart"
};

export function getProducts() {
	return dispatch => 
        dispatch({
            type: actionType.GET_PRODUCTS,
            payload: getProductsPath
        });
}

export function addToCart(itemsCart) {
    return dispatch => 
    dispatch({
        type: actionType.ADD_TO_CART,
        payload: itemsCart
    });
  }
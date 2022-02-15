import * as constants from './favouriteConstants'

const initialState = {
    products: []
}

export function favouriteReducer(state = initialState, action) {
    switch (action.type) {
        case constants.add:
            let productInFavourite = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInFavourite = true;
                    return {
                        ...product,
                        quantity: 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInFavourite) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            quantity: 1
                        }
                    ]
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
        case constants.remove:
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts
            });
        default:
            return state;
    }
}
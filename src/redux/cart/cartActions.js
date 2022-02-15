import * as constants from './cartConstants'

export function addToCart(payload) {
    return {
        type: constants.add,
        payload
    }
}

export function removeFromCart(payload) {
    return {
        type: constants.remove,
        payload
    }
}
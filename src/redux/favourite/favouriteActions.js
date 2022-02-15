import * as constants from './favouriteConstants'

export function addToFavourite(payload) {
    return {
        type: constants.add,
        payload
    }
}

export function removeFromFavourite(payload) {
    return {
        type: constants.remove,
        payload
    }
}
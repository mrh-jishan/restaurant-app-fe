import { COLLECTIONS } from "../constants";


export const initCollectionsLoad = () => ({
    type: COLLECTIONS.LOAD_INIT,
})

export const successCollectionsLoad = (restaurants) => ({
    type: COLLECTIONS.LOAD_SUCCESS,
    collections: restaurants
})

export const errorCollectionsLoad = (err) => ({
    type: COLLECTIONS.LOAD_ERROR,
    err: err
})

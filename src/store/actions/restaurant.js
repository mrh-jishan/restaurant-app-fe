import { RESTAURANT } from "../constants";


export const initRestaurantsLoad = (params) => ({
    type: RESTAURANT.LOAD_INIT,
    params: params
})

export const successRestaurantsLoad = (restaurants) => ({
    type: RESTAURANT.LOAD_SUCCESS,
    restaurants: restaurants
})

export const errorRestaurantsLoad = (err) => ({
    type: RESTAURANT.LOAD_ERROR,
    err: err
})

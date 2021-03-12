import { RESTAURANT } from "../constants";

const initState = {
    err: null,
    isloading: false,
    restaurants: [],
    params: {},
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        case RESTAURANT.LOAD_INIT:
            return {
                ...state,
                isloading: true,
                params: action.params
            }

        case RESTAURANT.LOAD_SUCCESS:
            return {
                ...state,
                isloading: false,
                restaurants: action.restaurants,
            }


        case RESTAURANT.LOAD_ERROR:
            return {
                ...state,
                isloading: false,
                err: action.err
            }


        default:
            return state;
    }
};

export default authReducer;
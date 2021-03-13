import { COLLECTIONS } from "../constants";

const initState = {
    err: null,
    isloading: false,
    collections: [],
}

const collectionsReducer = (state = initState, action) => {
    switch (action.type) {

        case COLLECTIONS.LOAD_INIT:
            return {
                ...state,
                isloading: true,
            }

        case COLLECTIONS.LOAD_SUCCESS:
            return {
                ...state,
                isloading: false,
                collections: action.collections,
            }


        case COLLECTIONS.LOAD_ERROR:
            return {
                ...state,
                isloading: false,
                err: action.err
            }


        default:
            return state;
    }
};

export default collectionsReducer;
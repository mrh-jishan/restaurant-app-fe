import { COLLABORATE } from "../constants";

const initState = {
    err: null,
    isloading: false,
    collaborates: [],
}

const collaborateReducer = (state = initState, action) => {
    switch (action.type) {

        case COLLABORATE.LOAD_INIT:
            return {
                ...state,
                isloading: true,
            }

        case COLLABORATE.LOAD_SUCCESS:
            return {
                ...state,
                isloading: false,
                collaborates: action.collaborates,
            }


        case COLLABORATE.LOAD_ERROR:
            return {
                ...state,
                isloading: false,
                err: action.err
            }


        default:
            return state;
    }
};

export default collaborateReducer;
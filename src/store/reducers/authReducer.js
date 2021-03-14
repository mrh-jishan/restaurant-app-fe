import { LOGIN } from "../constants";

const initState = {
    error: null,
    isLoggedIn: false,
    isloading: false,
    user: {},
    token: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {

        case LOGIN.INIT_AUTH:
            return {
                ...state,
                user: action.user,
                token: action.token
            }

        case LOGIN.AUTH_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                user: action.user,
                token: action.token
            }

        case LOGIN.LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                user: {},
                token: null
            }

        default:
            return state;
    }
};

export default authReducer;
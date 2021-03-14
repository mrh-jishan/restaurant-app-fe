import { INVITATIONS } from "../constants";

const initState = {
    err: null,
    isloading: false,
    invitations: [],
}

const invitationsReducer = (state = initState, action) => {
    switch (action.type) {

        case INVITATIONS.LOAD_INIT:
            return {
                ...state,
                isloading: true,
            }

        case INVITATIONS.LOAD_SUCCESS:
            return {
                ...state,
                isloading: false,
                invitations: action.invitations,
            }


        case INVITATIONS.LOAD_ERROR:
            return {
                ...state,
                isloading: false,
                err: action.err
            }


        default:
            return state;
    }
};

export default invitationsReducer;
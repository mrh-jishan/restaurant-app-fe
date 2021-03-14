import { COLLABORATE } from "../constants";


export const initCollaborateLoad = (token) => ({
    type: COLLABORATE.LOAD_INIT,
    token: token
})

export const successCollaborateLoad = (collaborates) => ({
    type: COLLABORATE.LOAD_SUCCESS,
    collaborates: collaborates
})

export const errorCollaborateLoad = (err) => ({
    type: COLLABORATE.LOAD_ERROR,
    err: err
})

import { COLLABORATE } from "../constants";


export const initCollaborateLoad = () => ({
    type: COLLABORATE.LOAD_INIT,
})

export const successCollaborateLoad = (collaborates) => ({
    type: COLLABORATE.LOAD_SUCCESS,
    collaborates: collaborates
})

export const errorCollaborateLoad = (err) => ({
    type: COLLABORATE.LOAD_ERROR,
    err: err
})

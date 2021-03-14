import { INVITATIONS } from "../constants";


export const initInvitationsLoad = () => ({
    type: INVITATIONS.LOAD_INIT,
})

export const successInvitationsLoad = (invitations) => ({
    type: INVITATIONS.LOAD_SUCCESS,
    invitations: invitations
})

export const errorInvitationsLoad = (err) => ({
    type: INVITATIONS.LOAD_ERROR,
    err: err
})

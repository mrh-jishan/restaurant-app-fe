import { LOGIN, REGISTER } from "../constants"

/*
******************
****  Login ******
******************
*/

export const successLogin = (user, token) => ({
    type: LOGIN.AUTH_SUCCESS,
    user: user,
    token: token
})

const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://fathomless-reef-83687.herokuapp.com/api/v1/'
});

const POST = (url, body) => {
    return instance.post(url, body).then(res => {
        console.log('res: ', res);
        return res;
    }).catch((err) => err.response);
}

const GET = async (url) => {
    return await instance.post(url);
}

export const signin = async (user) => {
    return await POST(`/auth`, user);
}

export const register = async (user) => {
    return await POST(`/users`, user);
}

export const signOut = () => {
    localStorage.clear();
}

export const getAccessToken = () => {
    return "AccessToken";
}

export const saveToken = (token) => {
    return "SavedToken";
}
const axios = require('axios');

const instance = axios.create({
    baseURL: 'https://fathomless-reef-83687.herokuapp.com/api/v1/'
});

const POST = (url, body, headers = {}) => {
    return instance.post(url, body, headers)
        .then(res => res)
        .catch((err) => err.response);
}

const GET = async (url, params = {}, headers = {}) => {
    return await instance.get(url, { params: params, headers: headers.headers },)
        .then(res => res)
        .catch((err) => err.response);
}


const getHeaders = () => {
    const { token } = getLocalStorage();
    return {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
        }
    }
}

export const signin = async (user) => {
    return await POST(`/auth`, user);
}

export const register = async (user) => {
    return await POST(`/users`, user);
}

export const getRestaurant = async (params) => {
    const { data } = await GET(`restaurants`, params);
    return data;
}

export const addCollection = async (body) => {
    const headers = getHeaders();
    const { data } = await POST(`favourites`, body, headers);
    return data;
}

export const getCollection = async () => {
    const headers = getHeaders();
    const { data } = await GET(`favourites`, {}, headers);
    return data;
}

export const signOut = () => {
    localStorage.clear();
}

export const getLocalStorage = () => {
    const data = localStorage.getItem("app-data")
    if (data) {
        return JSON.parse(data)
    } else {
        return null;
    }
}

export const saveLocalStorage = (data) => {
    return localStorage.setItem("app-data", JSON.stringify(data))
}

const axios = require('axios').default;

// Add a request interceptor
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    console.log('config: ',config);
    return config;
}, function (error) {
    // Do something with request error
    console.log('error: ', error);
    return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    console.log('response: ',response);
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.log('error: ', error);
    return Promise.reject(error);
});

const instance = axios.create({
    baseURL: 'https://fathomless-reef-83687.herokuapp.com/api/v1/'
});

const POST = async (url, body) => {
    return await instance.post(url, body);
}

const GET = async (url) => {
    return await instance.post(url);
}

export { GET, POST };

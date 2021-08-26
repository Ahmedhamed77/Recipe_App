import axiosPackage from 'axios';

export const baseURL = 'https://test.kode-t.ru/';

const startToken = null;

export const axios = axiosPackage.create({
  headers: {
    Authorization: `Bearer ${startToken}`,
  },
  baseURL,
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    // Do something with response error
    console.log('axios error', error, error.response);
    return Promise.reject(error.response);
  },
);

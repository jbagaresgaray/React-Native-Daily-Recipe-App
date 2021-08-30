import axios from 'axios';

const headers = {
  'Content-Type': 'application/json',
};

const API = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1/',
  timeout: 30000,
  headers,
  transformResponse: data => {
    try {
      return JSON.parse(data);
    } catch (error) {
      throw Error(
        `[requestClient] Error parsing response JSON data - ${JSON.stringify(
          error,
        )}`,
      );
    }
  },
});

API.interceptors.request.use(
  async config => {
    config.headers = headers;
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

API.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    return Promise.reject(error);
  },
);

export default API;

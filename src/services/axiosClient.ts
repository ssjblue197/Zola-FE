import { APP_CONFIG } from '@/utils/constants'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getAccessToken } from '@/utils/auth'

const axiosClient = axios.create({
    baseURL: APP_CONFIG.ENTRY_POINTS.BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

// Add a request interceptor
axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
    // Add token before request is sent
    if (config.url &&!config.url.includes(APP_CONFIG.ENTRY_POINTS.auth.login)
        && !config.url.includes(APP_CONFIG.ENTRY_POINTS.auth.register)
        && !config.url.includes(APP_CONFIG.ENTRY_POINTS.auth.facebook)
        && !config.url.includes(APP_CONFIG.ENTRY_POINTS.auth.google)
    ) {
        const token = getAccessToken();
        if (!!token && config.headers) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

// Add a response interceptor
axiosClient.interceptors.response.use(function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

export default axiosClient
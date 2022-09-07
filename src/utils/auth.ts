import moment from 'moment';
import { APP_CONFIG } from '@/utils/constants'

export const setAccessToken = (token: string) => {
    if (!!token) {
        localStorage.setItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN, token);
    }
}

export const setAccessTokenExpire = (expired: string) => {
    if (!!expired) {
        localStorage.setItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES, expired);
    }
}

export const getAccessToken = () => {
    return localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN);
}

export const getAccessTokenExpire = () => {
    return localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES);
}

export const removeAccessToken = () => {
    const token = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN);
    if (!!token) {
        localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN);
    }
}

export const removeAccessTokenExpire = () => {
    const token = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES);
    if (!!token) {
        localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE.ACCESS_TOKEN_EXPIRES);
    }
}


export const setRefreshToken = (token: string) => {
    if (!!token) {
        localStorage.setItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN, token);
    }
}

export const setRefreshTokenExpire = (expired: string) => {
    if (!!expired) {
        localStorage.setItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN_EXPIRES, expired);
    }
}

export const getRefreshToken = () => {
    return localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN);
}

export const getRefreshTokenExpire = () => {
    return localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN_EXPIRES);
}

export const removeRefreshToken = () => {
    const token = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN);
    if (!!token) {
        localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN);
    }
}

export const removeRefreshTokenExpire = () => {
    const token = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN_EXPIRES);
    if (!!token) {
        localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE.REFRESH_TOKEN_EXPIRES);
    }
}


export const getCurrentUser = () => {
    return localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.CURRENT_USER);
}

export const setCurrentUser = (user: string) => {
    if (!!user) {
        localStorage.setItem(APP_CONFIG.LOCAL_STORAGE.CURRENT_USER, user);
    }
}

export const removeCurrentUser = () => {
    const user = localStorage.getItem(APP_CONFIG.LOCAL_STORAGE.CURRENT_USER);
    if (!!user) {
        localStorage.removeItem(APP_CONFIG.LOCAL_STORAGE.CURRENT_USER);
    }
}

export const checkIsAuthenticated = () => {
    if (!!getCurrentUser() && !!getAccessToken() && !!getAccessTokenExpire()) {
        const countDown = moment().diff(moment(getAccessTokenExpire()));
        console.log(countDown);

        if (countDown < 0) {
            return true;
        }
        return false;
    }
    return false;
}
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { User } from '@/models'
import { toast } from 'react-toastify';
import {
    setAccessToken,
    setAccessTokenExpire,
    setRefreshToken,
    setRefreshTokenExpire,
    setCurrentUser,
} from '@/utils/auth'


export interface LoginPayload {
    email: string,
    password: string
}

export interface AuthInfo {
    accessToken?: string,
    refreshToken?: string,
    accessTokenExpire?: string,
    refreshTokenExpire?: string,
}
export interface AuthState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User,
    authInfo: AuthInfo
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
    authInfo: {
        accessToken: '',
        refreshToken: '',
        accessTokenExpire: '',
        refreshTokenExpire: '',
    }
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        register(state, action: PayloadAction<any>) {
            console.log(action.payload);

        },
        registerSuccess(state, action: PayloadAction<any>) {
            toast.success('Register Successfully', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                window.location.href = '/login';
            }, 1000)
        },
        registerFailed(state, action: PayloadAction<any>) {
            toast.error(action.payload.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        loginSuccess(state, action: any) {
            const data = action.payload
            toast.success('Login successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            state.logging = false;
            state.currentUser = action.payload.user
            state.isLoggedIn = true;
            state.authInfo.accessToken = data.tokens.access.token;
            state.authInfo.accessTokenExpire = data.tokens.access.expires;
            state.authInfo.refreshToken = data.tokens.refresh.token;
            state.authInfo.refreshTokenExpire = data.tokens.refresh.expires;
            setAccessToken(data.tokens.access.token)
            setAccessTokenExpire(data.tokens.access.expires)
            setRefreshToken(data.tokens.refresh.token)
            setRefreshTokenExpire(data.tokens.refresh.expires)
            setCurrentUser(data.user)
        },
        loginFailed(state, action: any) {
            console.log(action);
            state.logging = false;
            state.isLoggedIn = false;
            toast.error(action.payload.response.data.message, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        logout(state, action: any) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
        logoutSuccess(state, action: any) {
            state.logging = false;
            state.currentUser = undefined
            state.isLoggedIn = false;
            state.authInfo.accessToken = '';
            state.authInfo.accessTokenExpire = '';
            state.authInfo.refreshToken = '';
            state.authInfo.refreshTokenExpire = '';
            setAccessToken('');
            setAccessTokenExpire('');
            setRefreshToken('');
            setRefreshTokenExpire('');
            setCurrentUser('');
            toast.success('Logout successfully!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
        logoutFailed(state, action: any) {
            console.log(action);

            state.logging = false;
            state.currentUser = undefined
            state.isLoggedIn = false;
            state.authInfo.accessToken = '';
            state.authInfo.accessTokenExpire = '';
            state.authInfo.refreshToken = '';
            state.authInfo.refreshTokenExpire = '';
            setAccessToken('');
            setAccessTokenExpire('');
            setRefreshToken('');
            setRefreshTokenExpire('');
            setCurrentUser('');
            toast.error(action.payload.response.data, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        },
    },
})

const { actions, reducer } = authSlice;
export const { login,
    loginSuccess,
    logout,
    loginFailed,
    logoutSuccess,
    logoutFailed,
    register,
    registerSuccess,
    registerFailed, } = actions
// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.auth
export default reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { User } from '@/models'
import { setAccessToken, setAccessTokenExpire, setCurrentUser, setRefreshToken, setRefreshTokenExpire } from '@/utils/auth'

export interface LoginPayload {
    email: string,
    password: string
}
export interface AuthState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User,
    accessToken?: string,
    refreshToken?: string,
    accessTokenExpire?: string,
    refreshTokenExpire?: string,
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: any) {
            const data = action.payload
            state.logging = false;
            state.currentUser = action.payload.user
            state.isLoggedIn = true;
            setAccessToken(data.tokens.access.token)
            setAccessTokenExpire(data.tokens.access.expires)
            setRefreshToken(data.tokens.refresh.token)
            setRefreshTokenExpire(data.tokens.refresh.expires)
            setCurrentUser(data.user)
        },
        loginFailed(state, action: any) {
            state.logging = false;
            state.isLoggedIn = false;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        }
    },
})

const { actions, reducer } = authSlice;
export const { login, loginSuccess, logout, loginFailed } = actions
// Other code such as selectors can use the imported `RootState` type
export const selectAuthState = (state: RootState) => state.auth
export default reducer
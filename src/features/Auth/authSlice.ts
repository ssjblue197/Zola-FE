import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { User } from '@/models'

export interface LoginPayload {
    email: string,
    password: string
}
export interface AuthState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User
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

        },
        loginSuccess(state, action: PayloadAction<User>) {

        },
        loginFailed(state, action: PayloadAction<any>) {

        },

        logout(state) {

        } 
    },
})

const { actions, reducer } = authSlice;
export const { login, loginSuccess } = actions
// Other code such as selectors can use the imported `RootState` type
export const selectUserInfo = (state: RootState) => state.auth
export default reducer
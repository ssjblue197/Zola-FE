import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState: {},
    reducers: {
        postLogin(state, action) {

        },
        postLogout(state, action) {

        }
    },
})

const { actions, reducer } = authSlice;
export const { postLogin, postLogout } = actions
export default reducer
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { User } from '@/models'
import { toast } from 'react-toastify';

export interface MessagePayload {
    email: string,
    password: string
}

export interface MessageState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User,
}

const initialState: MessageState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
}

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        getMessageList: (state, action: PayloadAction<any>) => {
            console.log(state, action);
        },
        getMessageListSuccess: (state, action: any) => {

        },
        getMessageListFailure: (state, action: any) => {

        }
    }
})

const { actions, reducer } = messageSlice;
export const { getMessageList, getMessageListSuccess, getMessageListFailure } = actions;
export const selectMessageState = (state: RootState) => state.message
export default reducer

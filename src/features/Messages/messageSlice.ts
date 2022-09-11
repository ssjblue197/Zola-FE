import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '@/app/store'
import { User } from '@/models'
import { toast } from 'react-toastify';


export interface MessageState {
    conversationList: Array<any>,
    selectedConversation: any,
    selectedConversationDetail: Array<any>
}

const initialState: MessageState = {
    conversationList: [],
    selectedConversation: {},
    selectedConversationDetail: []
}

const messageSlice = createSlice({
    name: 'message',
    initialState: initialState,
    reducers: {
        getMessageList(state, action: PayloadAction<any>){
        },
        getMessageListSuccess(state, action: any){
            const data = action.payload;
            state.conversationList = data.data
        },
        getMessageListFailure(state, action: any){

        },
        getConversationDetail(state, action: any){

        },
        getConversationDetailSuccess(state, action: any){
            state.selectedConversationDetail = action.payload.data
        },
        getConversationDetailFailure(state, action: any){

        },
        setSelectedConversation(state, action: any) {
            state.selectedConversation = action.payload;
        }
    }
})

const { actions, reducer } = messageSlice;
export const { getMessageList, 
    getMessageListSuccess, 
    getMessageListFailure, 
    getConversationDetail, 
    getConversationDetailSuccess,
    getConversationDetailFailure,
    setSelectedConversation } = actions;
export const selectMessageState = (state: RootState) => state.message
export default reducer

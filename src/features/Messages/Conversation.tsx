import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectMessageState, getConversationDetail } from './messageSlice'
import { selectAuthState } from '../Auth/authSlice';
import { MessageContent } from './MessageContent';

export interface ConversationProps {
    conversation: any
}

export function Conversation ({ conversation }: ConversationProps) {
    const dispatch = useAppDispatch();
    const messageList = useAppSelector(selectMessageState).selectedConversationDetail;    
    const currentUserID = useAppSelector(selectAuthState)?.currentUser?.id;
    useEffect(() => {
        dispatch(getConversationDetail({
            userID: currentUserID,
            conversationID: conversation?.id
        }))       
    }, [conversation])
    console.log(messageList);
    
  return (
    <div className="w-full h-full flex flex-col">
        <div className="w-full h-[88px] bg-blue-200">
        </div>
        <div className="flex flex-col flex-1 bg-slate-200 relative p-4 overflow-y-auto">
            { messageList?.length > 0 && messageList.map((message: any) => {
                return (
                    <span
                        className={
                            message.sender.id === currentUserID
                            ? 'w-full relative m-1 flex flex-row justify-end'
                            : 'w-full relative m-1 flex flex-row justify-start'
                        }
                    >
                        <MessageContent
                            own={ message.sender.id === currentUserID }
                            message={ message }
                        />
                    </span>
                )
            }) }
        </div>
        <div className="w-full h-[88px] bg-blue-200">
        </div>
    </div>
  );
}

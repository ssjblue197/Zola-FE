import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { selectMessageState, getConversationDetail } from '../messageSlice'
import { MessageContent } from '.';
import {
    faPhone, faMagnifyingGlass,
    faEllipsisVertical,
    faPaperPlane, faPaperclip,
    faMicrophoneLines, faVideo
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, GroupAvatar } from '@/components/common';
export interface ConversationProps {
    conversation: any,
    currentUser: any
}

export function Conversation({ conversation, currentUser }: ConversationProps) {
    const dispatch = useAppDispatch();
    const messageList = useAppSelector(selectMessageState).selectedConversationDetail;
    const currentUserID = currentUser.id;
    useEffect(() => {
        dispatch(getConversationDetail({
            userID: currentUserID,
            conversationID: conversation?.id
        }))
    }, [conversation])
    const getTitleConversation = (conversation: any, currentUserID: any) => {
        const otherMember = conversation.memberList.filter((member: any) => member.id !== currentUserID);
        if (otherMember.length > 1) {
            return 'Group ' + otherMember.length + ' members';
        } else {
            const member = otherMember[0];
            return member.displayName
                ? member.profileImageUrl
                : member.firstName && member.lastName
                    ? member?.firstName + " " + member?.lastName
                    : member.email
        }
    }

    return (
        <div className="w-full h-full flex flex-col">
            <div className="w-full h-[88px]
                backdrop-blur-sm px-4 flex flex-row 
                items-center justify-between
                ">
                <div className="flex flex-row items-center">
                    <GroupAvatar
                        memberList={conversation.memberList}
                        currentUser={currentUser}
                    />
                    <span>
                        {getTitleConversation(conversation, currentUserID)}
                    </span>
                </div>
                <div className="flex flex-row">
                    <FontAwesomeIcon icon={faPhone}
                        className="text-slate-500 cursor-pointer active:text-blue-400 m-3"
                        size="1x"
                    />
                    <FontAwesomeIcon icon={faVideo}
                        className="text-slate-500 cursor-pointer active:text-blue-400 m-3"
                        size="1x"
                    />
                    <FontAwesomeIcon icon={faMagnifyingGlass}
                        className="text-slate-500 cursor-pointer active:text-blue-400 m-3"
                        size="1x"
                    />
                    <FontAwesomeIcon icon={faEllipsisVertical}
                        className="text-slate-500 cursor-pointer active:text-blue-400 m-3"
                        size="1x"
                    />
                </div>
            </div>
            <div className="flex flex-col flex-1 bg-slate-200 relative p-4 overflow-y-auto overflow-x-hidden">
                {messageList?.length > 0 && messageList.map((message: any) => {
                    return (
                        <span
                            className={
                                message.sender.id === currentUserID
                                    ? 'w-full relative m-1 flex flex-row justify-end'
                                    : 'w-full relative m-1 flex flex-row justify-start'
                            }
                        >
                            <MessageContent
                                own={message.sender.id === currentUserID}
                                message={message}
                            />
                        </span>
                    )
                })}
            </div>
            <div className="w-full h-[88px] p-2 flex flex-row items-center">
                <div className="w-16 m-2">
                    <Avatar
                        userInfo={currentUser}
                    />
                </div>
                <textarea name="message" id="message"
                    className="w-full rounded-xl border-none focus:ring-0 text-xl h-16 resize-none"
                    placeholder="Type something..."
                ></textarea>
                <FontAwesomeIcon icon={faMicrophoneLines}
                    className="cursor-pointer text-blue-300 m-2 active:text-blue-500"
                    size="1x"
                />
                <FontAwesomeIcon icon={faPaperclip}
                    className="cursor-pointer text-blue-300 m-2 active:text-blue-500"
                    size="1x"
                />
                <FontAwesomeIcon icon={faPaperPlane}
                    className="cursor-pointer text-blue-300 m-2 active:text-blue-500"
                    size="1x"
                />
            </div>
        </div>
    );
}
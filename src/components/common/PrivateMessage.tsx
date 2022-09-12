import React, { useState, useEffect } from 'react';
// import { faPenToSquare, faComment } from '@fortawesome/free-regular-svg-icons';
import { faCheckDouble, faPen, faCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from 'moment';
import { Avatar } from './Avatar';
export interface PrivateMessageProps {
    conversation: any,
    currentUser: any,
    selectedConversation: any,
    onClick: Function
}

export interface LastMessage {
    messageType: string,
    message: string,
    createdAt: any
}

export function PrivateMessage({ conversation, currentUser, selectedConversation, onClick }: PrivateMessageProps) {

    const [conversationInfo, setConversationInfo] = useState({});
    const displayLastMessage = (message: LastMessage) => {
        if (!message) return '';

        switch (message.messageType) {
            case 'text':
                return message.message
                break;
            case 'image':
                return 'Sent an image'
                break;
            case 'file':
                return 'Sent an attach'
                break;
            case 'voice':
                return 'Sent a voice record'
                break;

            default:
                break;
        }
    }
    useEffect(() => {
        const friendInfo = conversation.memberList.find((member: any) => member.id !== currentUser.id);
        setConversationInfo(friendInfo)
    }, [conversation])
    return (
        <div className={conversation.id === selectedConversation?.id
            ? 'bg-blue-200 border-l-4 border-sky-500 w-full h-24 flex flex-row items-center px-2'
            : 'w-full h-24 flex flex-row items-center px-2 cursor-pointer hover:bg-blue-100'}
            onClick={() => onClick(conversation)}
        >
            <div className="rounded-full bg-slate-400 w-16 h-16 relative text-xs">
                <span className="h-3 w-3 flex absolute bottom-1 right-1 text-green-500">
                    <FontAwesomeIcon icon={faCircle}
                        className="absolute cursor-pointer animate-ping" />
                    <FontAwesomeIcon icon={faCircle}
                        className="cursor-pointer" />
                </span>
                <div className="w-full h-full md:hidden">
                    <Avatar
                        userInfo={conversationInfo}
                    />
                </div>
            </div>
            <div className="flex-1 flex flex-col px-4">
                <span className="text-xl text-slate-700 mb-2 whitespace-nowrap text-ellipsis">
                    {
                        conversationInfo.displayName
                            ? conversationInfo.profileImageUrl
                            : conversationInfo.firstName && conversationInfo.lastName
                                ? conversationInfo?.firstName + " " + conversationInfo?.lastName
                                : conversationInfo.email
                    }
                </span>
                <span className="text-slate-400 text-md flex flex-row">
                    <span className="text-sky-500 text-sm mr-2 animate-bounce">
                        <FontAwesomeIcon icon={faPen}
                            className="cursor-pointer" />
                    </span>
                    <span className="text-sm">
                        is typing...
                    </span>
                    <span>
                        {displayLastMessage(conversationInfo.lastMessage)}
                    </span>

                </span>
            </div>
            <div className="flex flex-col">
                <FontAwesomeIcon icon={faCheckDouble}
                    className="cursor-pointer text-green-500 text-sm" />
                <span className="text-sm text-slate-500">
                    {moment().format('HH:mm')}
                </span>
            </div>
        </div>
    );
}

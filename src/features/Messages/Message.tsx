import React, { useEffect, useState, useContext } from 'react';
import { faPenToSquare, faComment } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass, faXmark, faThumbTack, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PrivateMessage, GroupMessage } from '@/components/common';
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { getMessageList, selectMessageState, setSelectedConversation } from './messageSlice'
import { selectAuthState } from '../Auth/authSlice';
import { Conversation } from './components';
import { SocketContext } from 'context/socket';

export interface MessagesProps {
}

export function Messages(props: MessagesProps) {
  const authState = useAppSelector(selectAuthState);
  const messageState = useAppSelector(selectMessageState);
  const selectedConversation = messageState.selectedConversation;

  const currentUserID = authState.currentUser?.id;
  const dispatch = useAppDispatch();
  const socket = useContext(SocketContext);

  useEffect(() => {
    if (currentUserID) {
      dispatch(getMessageList({
        userID: currentUserID
      }))
    }
  }, [currentUserID])

  useEffect(() => {
    console.log(messageState.conversationList);
    console.log(currentUserID);
    socket.emit('joinRoom', {
      userID: currentUserID,
      roomList: messageState.conversationList
    })
    if (messageState.conversationList && messageState.conversationList.length > 0) {
      dispatch(setSelectedConversation(messageState.conversationList[0]));
    }
  }, [messageState.conversationList])

  const changeConversation = (newConversation: any) => {
    dispatch(setSelectedConversation(newConversation));
  }


  return (
    <div className="flex flex-nowrap w-full h-full justify-center text-slate-700">
      <div className="flex-col bg-slate-100 h-full w-86 md:w-64">
        {/* lIST FRIEND ONLINE */}
        <div className="flex flex-row justify-start p-2">
          <div className="rounded-full w-14 h-14 bg-blue-300 m-2"></div>
          <div className="rounded-full w-14 h-14 bg-blue-300 m-2"></div>
          <div className="rounded-full w-14 h-14 bg-blue-300 m-2"></div>
        </div><hr />

        {/* CREATE MESSAGES */}
        <div className="flex flex-row justify-between p-4 mt-2">
          <span className="font-medium mr-2">
            Messages
          </span>
          <span className="text-blue-500 text-xl font-medium cursor-pointer">
            48 New
          </span>
          <span className="flex-1">
          </span>
          <span className="text-blue-500">
            <FontAwesomeIcon icon={faPenToSquare}
              className="slate-300 cursor-pointer"
              size="1x"
            />
          </span>
        </div>

        {/* SEARCH MESSAGES */}
        <div className="flex flex-row justify-between px-4 mt-2 text-2xl relative">
          <input type="text" className="bg-white text-xl rounded-2xl border-none w-full h-14 focus:ring-0 px-8" />
          <FontAwesomeIcon icon={faXmark}
            className="slate-300 cursor-pointer absolute top-4 left-6 text-slate-300"
            size="1x"
          />
          <FontAwesomeIcon icon={faMagnifyingGlass}
            className="slate-300 cursor-pointer absolute top-4 right-6 text-slate-300"
            size="1x"
          />
        </div>

        {/* PINNED MESSAGES */}
        <div className="flex flex-row justify-start px-4 mt-4 text-2xl">
          <FontAwesomeIcon icon={faThumbTack}
            className="slate-300 cursor-pointer text-slate-300 mr-2 translate-y-1"
            size="1x"
          />
          <span className="uppercase text-lg text-slate-500">Pin chats</span>
        </div>
        <div className="flex flex-col">

        </div>

        {/* GROUP MESSAGES */}
        <div className="flex flex-row justify-start px-4 mt-4 text-2xl">
          <FontAwesomeIcon icon={faCircleNodes}
            className="slate-300 cursor-pointer text-slate-300 mr-2 translate-y-1"
            size="1x"
          />
          <span className="uppercase text-lg text-slate-500">Groups</span>
        </div>
        <div className="flex flex-col">

        </div>

        {/* ALL MESSAGES */}
        <div className="flex flex-row justify-start px-4 mt-4 mb-2 text-2xl">
          <FontAwesomeIcon icon={faComment}
            className="slate-300 cursor-pointer text-slate-300 mr-2 translate-y-1"
            size="1x"
          />
          <span className="uppercase text-lg text-slate-500">All Messages</span>
        </div>
        <div className="flex flex-col">
          {messageState.conversationList && messageState.conversationList.map((conversation: any, index: any) => {
            return (
              <React.Fragment key={index}>
                <PrivateMessage
                  onClick={changeConversation}
                  conversation={conversation}
                  currentUser={authState.currentUser}
                  selectedConversation={selectedConversation}
                />
              </React.Fragment>
            )
          })}
        </div>
      </div>

      {/* CONTENT MESSAGE */}
      <div className="flex-col bg-blue-100 h-full flex-1">
        {
          selectedConversation && selectedConversation.id && authState.currentUser && authState.currentUser.id && (
            <Conversation conversation={selectedConversation} currentUser={authState.currentUser} />
          )
        }
      </div>


      {/* MESSAGE INFO */}
      <div className="flex-col bg-slate-100 w-80 hidden">
        453454
      </div>
    </div>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer, SideBar } from '../common';
import { io } from "socket.io-client";
import { APP_CONFIG } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectAuthState } from '../../features/Auth/authSlice';
export interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {
  const socket = useRef(io(APP_CONFIG.SOCKET.BASE_URL))
  const authState = useAppSelector(selectAuthState);
  useEffect(() => {
    socket.current.emit('addUser', authState.currentUser.id)
    socket.current.on('getUsers', (userList) => {
      console.log(userList);
    })
  }, [authState.currentUser])
  return (
    <div>
      {/* <Header /> */}
      <div className="w-screen h-screen flex bg-slate-100 text-2xl">
        <SideBar></SideBar>
        <div className="w-full h-full flex">{children}</div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

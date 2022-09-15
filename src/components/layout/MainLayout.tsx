import React, { useState, useEffect, useRef } from 'react';
import { Header, Footer, SideBar } from '../common';
// import { io } from "socket.io-client";
import { APP_CONFIG } from '@/utils/constants';
import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { selectAuthState } from '../../features/Auth/authSlice';
import { SocketContext, socket } from '@/context/socket';
export interface MainLayoutProps {
  children?: React.ReactNode
}

export function MainLayout({ children }: MainLayoutProps) {

  const authState = useAppSelector(selectAuthState);
  useEffect(() => {
    if (authState.currentUser && authState.currentUser.id) {
      socket.emit('addUser', authState.currentUser.id)
      socket.on('getUsers', (userList) => {
        console.log(userList);
      })
      socket.on('connect', () => {
        console.log('Connected', socket.id);
        const engine = socket.io.engine;
        console.log(engine.transport.name);
        engine.once("upgrade", () => {
          // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
          console.log(engine.transport.name); // in most cases, prints "websocket"
        });
        engine.on("packet", ({ type, data }) => {
          // called for each packet received
        });

        engine.on("packetCreate", ({ type, data }) => {
          // called for each packet sent
        });

        engine.on("drain", () => {
          // called when the write buffer is drained
        });

        engine.on("close", (reason) => {
          // called when the underlying connection is closed
        });
      })
      socket.on('disconnect', () => {
        console.log('Disconnected', socket.id);
      })
      socket.io.on("reconnect_attempt", () => {
        // ...
        console.log('Reconnect_attempt: ', socket.id);

      });

      socket.io.on("reconnect", () => {
        // ...
        console.log('Reconnect: ', socket.id);
      });
    }
  }, [authState.currentUser])

  return (
    <SocketContext.Provider value={socket}>
      <div>
        {/* <Header /> */}
        <div className="w-screen h-screen flex bg-slate-100 text-2xl">
          <SideBar></SideBar>
          <div className="w-full h-full flex">{children}</div>
        </div>
        {/* <Footer /> */}
      </div>
    </SocketContext.Provider>
  );
}

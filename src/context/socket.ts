import { createContext } from "react";
import { io, Socket } from "socket.io-client";
import { APP_CONFIG } from '@/utils/constants';

export const socket = io(APP_CONFIG.SOCKET.BASE_URL, {
  // withCredentials: true,
})
export const SocketContext = createContext(Socket);
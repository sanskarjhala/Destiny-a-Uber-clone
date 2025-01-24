import React, { createContext, useEffect } from 'react'
import { io } from "socket.io-client"

export const SocketDataContext = createContext();

const socket = io('http://localhost:3000'); // Replace with your server URL


const SocketContext = ({children}) => {

    useEffect(() => {
        socket.on('connect' , () => {
            console.log("Conected to socket server")
        })

        socket.on('disconnect' , () => {
            console.log("disconnected from socket server")
        })
    } , [])
  return (
    <div>
        <SocketDataContext.Provider value={{socket}} >
            {children}
        </SocketDataContext.Provider>
    </div>
  )
}

export default SocketContext
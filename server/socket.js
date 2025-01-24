const { Server } = require("socket.io");
const User = require("./models/user.module");
const captainModel = require("./models/captain.model");

let io;

function initializeSocket(server) {
    io = new Server(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log(`New client connected: ${socket.id}`);

        socket.on('join' , async (data) => {
            const {userId , userType} = data;

            console.log(`User ${userId} joined as ${userType}`)
            if(userType === 'user'){
                const usertest = await User.findByIdAndUpdate(userId , {
                    socketId:socket.id
                });
            } else if(userType === 'captain'){
                await captainModel.findByIdAndUpdate(userId , {
                    socketId:socket.id
                })
            }
        })

        socket.on("disconnect", () => {
            console.log(`Client disconnected: ${socket.id}`);
        });
    });
}

const sendMessageToSocketId = (socketId, messageObject) => {

    console.log(messageObject);
    
        if (io) {
            io.to(socketId).emit(messageObject.event, messageObject.data);
        } else {
            console.log('Socket.io not initialized.');
        }
    }

module.exports = {
    initializeSocket,
    sendMessageToSocketId
};

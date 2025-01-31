const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const  {dbConnection}  = require("./config/database");
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
const http = require("http");
const { initializeSocket } = require("./socket");
//database connection
dbConnection();

//creating the server 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
const server = http.createServer(app);


//routes
app.use("/users" , userRoutes);
app.use("/captains" , captainRoutes);
app.use("/maps" , mapsRoutes );
app.use("/rides" , rideRoutes);

initializeSocket(server);

const PORT  = process.env.PORT;
server.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})

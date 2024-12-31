const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require('cors');
const  {dbConnection}  = require("./config/database");
const userRoutes = require('./routes/user.routes')
const cookieParser = require('cookie-parser');
const captainRoutes = require('./routes/captain.routes');

//database connection
dbConnection();

//creating the server 
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());


//routes
app.use("/users" , userRoutes);
app.use("/captains" , captainRoutes);

const PORT  = process.env.PORT;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
})

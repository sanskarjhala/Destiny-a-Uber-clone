const User = require('../models/user.module');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const baclklistTokenModel = require("../models/baclklistToken.model");

exports.authUser = async (req,res,next) => {
    try {
        const token = req.cookies.token || req.header.Authorization.split(' ')[1];
        
        const blackListToken = await baclklistTokenModel.findOne({token : token});

        if(blackListToken){
            return res.status(401).json({message:"unauthorized access"})
        }
        
        if(!token){
            return res.status(401).json({message:"unAuthorized access"});
        }

        try {
            const decoded = jwt.verify(token , process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            req.user = user;
            return next();
        } catch (error) {
            return res.status(401).json({message:"Unauthorized access"});
        }
    } catch (error) {
        return res.status(500).json({message:"Error while decoding the token "});
    }
}
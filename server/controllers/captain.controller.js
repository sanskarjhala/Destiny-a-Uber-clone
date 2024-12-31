const captainModel = require("../models/captain.model");
const {validationResult} = require('express-validator');
const jwt = require('jsonwebtoken');

exports.registerCaptain = async(req,res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors:errors.array()});
        }
        
        
        const {fullName,email,password,vehicle} = req.body;
        const hashPassword = await captainModel.hashPassword(password);
        
        const alreadyExist = await captainModel.findOne({email:email});
        
        if(alreadyExist){
            return res.status(403).json({message:"Captain already exists"});
        }
        
        const captain = await captainModel.create({
            fullName:fullName,
            email:email,
            password:hashPassword,
            vehicle:vehicle
        });
        
        const token = jwt.sign(
                {id: captain._id,},
                process.env.JWT_SECRET,
                {
                  expiresIn: "24h"
                }
              );

        return res.status(200).json({
            success:true,
            token:token,
            captain:captain
        });
    } catch (error) {
        return res.status(500).json({
            message:"Something went while registering the captain"
        });
    }
}
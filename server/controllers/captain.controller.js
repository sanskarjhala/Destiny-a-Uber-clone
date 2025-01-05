const captainModel = require("../models/captain.model");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const baclklistTokenModel = require("../models/baclklistToken.model");
const dotenv = require('dotenv');
dotenv.config()

exports.registerCaptain = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password, vehicle } = req.body;

    const hashPassword = await captainModel.hashPassword(password);
    
    const alreadyExist = await captainModel.findOne({ email: email });

    if (alreadyExist) {
      return res.status(403).json({ message: "Captain already exists" });
    }
    
    const captain = await captainModel.create({
      fullName: fullName,
      email: email,
      password: hashPassword,
      vehicle: vehicle,
    });

    const token = jwt.sign({ id: captain._id }, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    return res.status(200).json({
      success: true,
      token: token,
      captain: captain,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went while registering the captain",
    });
  }
};

exports.loginCaptain = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const { email, password } = req.body;
    
        const captain = await captainModel.findOne({ email: email }).select("+password");
    
        if (!captain) {
          return res.status(401).json({ message: "Invalid email or password" });
        }
    
        const isMatch = await bcrypt.compare(password, captain.password);
    
        if (!isMatch) {
          return res.status(401).json({ message: "invalid email or password" });
        }
    
        const token = jwt.sign(
          { email: captain.email, id: captain._id},
          process.env.JWT_SECRET,
          {
            expiresIn: "24h"
          }
        );
        res.cookie("token", token);
        
        res.status(200).json({ token, captain });

      } catch (error) {
        return res.status(500).json({
          message: "something went wrong while login the user",
          error: error,
        });
      }
};

exports.getCaptainProfile = async (req, res) => {
  try {
    return res.status(200).json(req.captain);
  } catch (error) {
    return res
      .status(500)
      .json({
        message: "Error while fetching the details of captain profile",
        error: error,
      });
  }
};

exports.logoutCaptain = async (req, res) => {
  try {
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");
    res.clearCookie("token");

    await baclklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error while logout ", error: error });
  }
};

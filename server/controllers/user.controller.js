const User = require("../models/user.module");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const baclklistTokenModel = require("../models/baclklistToken.model");

exports.registerUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fullName, email, password } = req.body;
    const hashPassword = await User.hashPassword(password);

    const alreadyExist = await User.findOne({ email: email });

    if (alreadyExist) {
      return res.status(403).json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      fullName: fullName,
      email: email,
      password: hashPassword,
    });

    const token = jwt.sign(
        {id: user._id,},
        process.env.JWT_SECRET,
        {
          expiresIn: "24h"
        }
      );
      
    return res.status(200).json({
      success: true,
      token: token,
      User: user,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something went while registering the user",
    });
  }
};

exports.userLogin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email: email }).select("+password");

    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: "invalid email or password" });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h"
      }
    );
    console.log("1");
    res.cookie("token", token);

    res.status(200).json({ token, user });
  } catch (error) {
    return res.status(500).json({
      message: "something went wrong while login the user",
      error: error,
    });
  }
};

exports.getUserProfile = async (req, res) => {
  return res.status(200).json(req.user);
};

exports.logotUser = async (req, res) => {
  try {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1];
    res.clearCookie("token");

    await baclklistTokenModel.create({ token });

    return res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    return res.status(500).json({
      message: "Error while logout user",
    });
  }
};

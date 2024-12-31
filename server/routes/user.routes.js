const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const userControllers = require("../controllers/user.controller");
const { authUser } = require('../middlewares/auth');

router.post('/register' ,[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullName.firstName').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
] , userControllers.registerUser)

router.post("/login" , [
    body("email").isEmail().withMessage("Invalid Email"),
    body("password").isLength({min:6}).withMessage("Password must be atleast 6 character long")
] , userControllers.userLogin )


router.get('/profile' , authUser , userControllers.getUserProfile)

router.post("/logout" ,authUser ,  userControllers.logotUser)


module.exports =  router;
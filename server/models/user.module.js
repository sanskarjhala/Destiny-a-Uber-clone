const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
   fullName:{
    firstName:{type: String , required: true , minlength: [3 , 'First Name must be at least of length 3' ]},
    lastName: {type:String , required : true , minlength: [3 , "Last Name should be more than length 3"]},
   },
   email:{type:String , required: true , unique:true},
   password:{type: String ,required: true,  select:false},
   socketId: {type:String},
})


userSchema.methods.generateAuthToken = () => {
    const token = jwt.sign({id: this._id} , process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async(password) => {
    return await bcrypt.compare(password , this.password);
}

userSchema.statics.hashPassword = async(password) => {
    return await bcrypt.hash(password , 10);
}

const User = mongoose.model('User' , userSchema);
module.exports = User;
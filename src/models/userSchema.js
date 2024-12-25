
const mongoose = require("mongoose");
const validator = require("validator");
const userScheme = mongoose.Schema(
    {
        userName:{
            type:String,
            required:true,
            maxLenght:20
        },
        email:{
            type:String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
            validate(value){
                if(!validator.isEmail(value)){
                    throw new Error("Email is invalid");
                }
            }
        },
        password:{
            type:String,
            required:true,
            validator(value){
                if(!validator.isStrongPassword(value)){
                    throw new Error("Password is weak");
                }
            }
        }
        

    }
)

const User = mongoose.model("User", userScheme);
module.exports = User;
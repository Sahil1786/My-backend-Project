

import mongoose,{Schema} from "mongoose";

import { Jwt } from "jsonwebtoken";
import bcrypt from "bcrypt"


const userSchema=new Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true

        //for serching in db
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    
    },

    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    
    },

    avtrtar:{
        type:String,//cloudnary url
        required:true,
     
    },

    coverImage:{
        type:String,//cloudnary url
   
    
    },
    watchHistary:[{
        type:Schema.Types.ObjectId,
        type:"video"
    }]
    ,
    password:{
        type:String,
        required:[true,'password is required']
    },

    refereshToken:{
        type:String
    }

}
,
{timestamps:true}
)


// paylod:encry --id ,pass


userSchema.plugin("save",async function(next){
    if(!this.isModified("password")) return next();
    
    this.password=bcrypt.hash(this.hash,10)
    next()
})

userSchema.method.isPasswordCorrect=async function(password){
    return await bcrypt.compare(password,this.password)
}

// jwt =bereer token==key


userSchema.methods.generateAccessToken=function(){
  return  jwt.sign(
        {
            _id:this._id,
            email:this.email,
            userName:this.userName,
            fullName:this.fullName
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
    return  jwt.sign(
        {
            _id:this._id,
           
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn:process.env.REFRESH_TOKEN_EXPIRY
            ,
        }
    )
}

export const User =mongoose.model("User",userSchema)
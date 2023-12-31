
import { asyncHndler } from "../utils/asyncHandler.js";
import {ApiError}from "../utils/ApiErros.js"
import { User } from "../models/user.modle.js";


import {uplodeOnCloudnary} from "../utils/cloudnary.js"

import { ApiResponse } from "../utils/ApiResponse.js";







const registerUser=asyncHndler(async(req,res)=>{
      // get user details from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for images, check for avatar
    // upload them to cloudinary, avatar
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return res

    const {fullName,email,userName,password}=req.body;
    console.log("email :" , email);
    console.log('fullname',fullName , userName,password);

    // if (fullName==="") {
    //     throw new ApiError(400,"full Name is required")
        
    // }

    if([fullName, email, userName,password].some((fiield)=>fiield?.trim()==="")){
        throw new ApiError(400,"All fields are required")

    }

    const ExistedUser = await User.findOne({
        $or: [{ userName }, { email }]
    }).exec();
    
    if (ExistedUser) {
        throw new ApiError(409, "User with email or username already exists");
    }
    


    const avaterLocalpath = req.files?.avt[0]?.path;
  const coverImageLocalpath= req.files?.coverImage[0]?.path;

  if(!avaterLocalpath){
    throw new ApiError(400,"avt2 file is reqried")
  }

  const avt=await uplodeOnCloudnary(avaterLocalpath)
  const coverImage=await uplodeOnCloudnary(coverImageLocalpath)

  if(!avt)
  throw new ApiError(400,"avt file is reqried")

const user= await User.create({
    fullName,
    avt:avt.url,
  
    coverImage:coverImage?.url ||"",
    email,
    password,
    userName:userName.toLowerCase()
})
console.log(avt.url);
const createdusername=await User.findById(user._id).select(
    "-password -refereshToken"
)

if (!createdusername) {
    throw new ApiError(500,"somthing went wrong while registering the user")
    
}

return res.status(201).json(
    new ApiResponse(200,createdusername,"user register sucessfully")
)
})

export {registerUser}
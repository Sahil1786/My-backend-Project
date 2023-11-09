// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectdb from "./db/index.js";



// import mongoose, { connect } from "mongoose";
// import { db_name } from "./constants";


dotenv.config({
    path:'./env'
})




connectdb()























// import { Express } from "express";
// const app=Express();


//  (async()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error
//         })
//         app.listen(process.env.PORT,()=>{
//             console.log(`app is listening on port${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.log("Error",error);
//         throw error
//     }
//  })
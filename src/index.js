
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";
import { app } from "./app.js";


import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

dotenv.config({
    path:'./env'
})



connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`server running at port : ${process.env.PORT}`);
app.on("error",(error)=>{
    console.log("Error ",error);
    throw error
})

    })
})
.catch((err)=>{
    console.log("mongoDB connection Faild !!",err);
})







// import { Express } from "express";
// const app = Express();


// (async ()=>{
//     try {
//       await  mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//       app.on("error ",(error)=>{
//             console.log("error ", error);
//             throw error
//       })

//       app.listen(process.env.PORT,()=>{
//         console.log(`app is listening on port ${process.env.PORT}`);
//       })
        
//     } catch (error) {
//         console.error("EEROR", error);
//         throw error
//     }
// })()

























// // import { Express } from "express";
// // const app=Express();


// //  (async()=>{
// //     try {
// //       await  mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
// //         app.on("error",(error)=>{
// //             console.log("error",error);
// //             throw error
// //         })
// //         app.listen(process.env.PORT,()=>{
// //             console.log(`app is listening on port${process.env.PORT}`);
// //         })
// //     } catch (error) {
// //         console.log("Error",error);
// //         throw error
// //     }
// //  })
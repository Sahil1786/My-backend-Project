
// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"

import connectDB from "./db/index.js";
import { app } from "./app.js";


dotenv.config({
    path:'./env'
})

const PORTS=8000;

connectDB()
.then(()=>{
    app.listen(PORTS || 8000,()=>{
        console.log(`⚙️ Server is running at port :${PORTS}`);
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
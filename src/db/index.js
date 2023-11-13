import mongoose from "mongoose";


import { DB_NAME } from "../constants.js";




const connectDB=async()=>{

 const connectionInstance=await mongoose.connect(`mongodb://127.0.0.1:27017/${DB_NAME}`)
  .then((d)=>{
      
   console.log(`DB Connected....!!!`);

  })

  .catch((err)=>{
      console.log(err.Message);
      process.exit(1);
      throw console.error();
  });
}



export default connectDB
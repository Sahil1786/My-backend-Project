import mongoose, { connect } from "mongoose";
import { db_name } from "../constants.js";



const connectdb=async()=>{
    try {
      const connectinstance = await mongoose.connect(`mongodb://${process.env.MONGODB_URL}/${db_name}`);
      // or
      // const connectinstance = await mongoose.connect(`mongodb+srv://${process.env.MONGODB_URL}/${db_name}`);
      
      console.log(`\n MongoDB connected !!  DB Host: ${connectinstance.connection.host}`);

        
    } catch (error) {
      console.log("MongoDB connection failed", error.message);
      process.exit(1);
        
    }

}

export default connectdb;
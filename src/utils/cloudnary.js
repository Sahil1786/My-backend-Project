import{v2 as cloudinary}from "cloudinary"
import fs from "fs"


          
cloudinary.config({ 
  cloud_name: process.env.CLOUDNARY_CLOUD_NAME, 
  api_key: process.env.CLOUDNARY_API_KEY, 
  api_secret: process.env.CLOUDNARY_API_SECRET
});

const uplodeOnCloudnary=async(localFilePath)=>{
    try {
        if (!localFilePath)return null
        // uplode  the fil on cloudnary
      const response= await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
            //file has benn uploded sucessfullty
            console.log("file is sucessfully uploded on cloudnary",response.url);
            return response;

            
    } catch (error) {
        fs.unlinkSync(localFilePath)
         /// remove the loccaly tempary file as  the uplod opration got faild 
        return null;
    }
}

export {uplodeOnCloudnary}
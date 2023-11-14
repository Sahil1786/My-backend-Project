import mongoose,{Schema} from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema=new Schema({


    videoFile:{
        type:String,//ocudnary url
        required:true
    },
thamilnail:{
    type:String,//ocudnary url
    required:true

},
tittle:{
    type:String,
    required:true

},
description:{
    type:String,
    required:true

},
duration:{
    type:Number,//cocudnary url
    required:true

},
views:{
    type:Number,
    default:0
},
isPublished:{
    type:Boolean,
    default:true
},
owner:{
    types:Schema.Types.ObjectId,
    ref:"User"
}

},{timestamps:true})



videoSchema.plugin(mongooseAggregatePaginate)


export const Video=mongoose.model("Video",videoSchema)
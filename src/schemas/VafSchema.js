import mongoose from "mongoose";

export const vafSchema=new mongoose.Schema({
    ECUtype:{
        type:String,
        required:true
    },
    ECUPartNo:{
        type:String,
        required:true
    },
    ECUSerialNo:{
        type:String,
        required:true
    },
    OEM:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'OEM'
    },
    VAFFeatures:{
        type:String,
        required:true
    },
    EnablerId:{
        type:String,
        required:true
    }
})
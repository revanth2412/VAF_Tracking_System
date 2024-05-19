import mongoose from "mongoose";

export const OemSchema = new mongoose.Schema({
    name: { type: String, maxLength:[25, "Name can't be greater than 25 characters"]},
    email: {type: String, unique: true, required: true,
        match: [/.+\@.+\../, "Please enter a valid email"]
    },
    password: {type: String, required: true
        // validate:{
        //     validator: function(value){
        //         return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
        //     },
        //     message:"Password should be between 8-12 charachetrs and have a special character"
        // }
    },
    OEM: { type: String, maxLength:[25, "OEM can't be greater than 25 characters"], required:true},
})
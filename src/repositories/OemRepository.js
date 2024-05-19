import mongoose from "mongoose";
import { OemSchema } from "../schemas/OemSchema.js";

const OemModel = mongoose.model('OEM', OemSchema)

export default class OemRepository{

    async signUp(user){
        try{
            // create instance of model.
           
            const newUser = new OemModel(user);
            
            await newUser.save();
            return newUser;
        }
        catch(err){
            console.log(err);
            if(err instanceof mongoose.Error.ValidationError){
                throw err;
            }else{
                console.log(err);
                throw new ApplicationError("Something went wrong with database", 500);
            }
            
        }
    }

    async findByEmail(email) {
        try{
        return await OemModel.findOne({email});
      }catch(err){
        console.log(err);
        throw new ApplicationError("Something went wrong with database", 500);
      }
      }

}
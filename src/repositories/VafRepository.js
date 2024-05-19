import { vafSchema } from "../schemas/VafSchema.js";
import mongoose from "mongoose";
import {  ObjectId } from "mongodb";

const vafModel=mongoose.model('VAFLIST',vafSchema);

export default class vafRepository{

    async allVafList(){
        try {
            const allList=await vafModel.find();
            return allList;

        } catch (error) {
            console.log(error);
            return false;
        }

    }
}
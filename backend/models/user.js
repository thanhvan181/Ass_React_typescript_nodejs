import mongoose from "mongoose";
import {Schema} from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
         required: true, 
         unique: true },
   password: {
       type: String,
       required: true

   },
   

   registeredAt: { type: Date, index: true }
},  { timestamps: true})

export default mongoose.model("User", userSchema)


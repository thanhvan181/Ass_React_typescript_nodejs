import mongoose from "mongoose";
import {Schema, ObjectId} from "mongoose";

const sub_cagegorySchema = new Schema({
    index: {
        type: Number,
         required: true, 
    },
    name: {
        type: String,
        required: true, 

        
    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    }
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Subcategory", sub_cagegorySchema)


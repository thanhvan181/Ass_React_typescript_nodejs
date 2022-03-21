import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    
    name: {
        type: String,
        required: true, 

        
    },
    code: {
        type: String,
         required: true, 
    },
    subcategory_id: {
        type: ObjectId,
        ref: "Subcategory"
    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    quanlity: {
        type: Number,
    },
    start_use: {
        type: Date,
    },
    end_use : {
        type: Date,

    },
    available: {
        type: Boolean,
    }
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Product", productSchema)


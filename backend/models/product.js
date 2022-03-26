import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const productSchema = new Schema({
    
    name: {
        type: String,
        trim: true,
        required: true,
        maxlength: 255,
        text: true

        
    },
    code: {
        type: String,
        
    },
    images: {
        type: Array
    },
    price: {
        type: Number,
        required: true,
        trim: true,
        maxLength: 32
    },
    description: {
        type: String,
        required: true,
        text: true
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
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


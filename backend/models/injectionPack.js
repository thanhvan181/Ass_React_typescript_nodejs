import mongoose from "mongoose";
import {Schema, ObjectId} from "mongoose";

const injectionParkSchema = new Schema({
    name: {
        type: String,

    },
   
    imagePark: {
        type: String,
    },
    
    description: {
        type: String,
    },
    price: {
        type: Number
    },

    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    subcategory_id: {
        type: ObjectId,
        ref: "Subcategory"
    }
    

    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Injectionpark", injectionParkSchema)


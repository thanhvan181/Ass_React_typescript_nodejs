import mongoose from "mongoose";
import {Schema} from "mongoose";

const injectionParkSchema = new Schema({
    name: {
        type: String,

    },
    category_id: {
        type: ObjectId,
        ref: "Category"
    },
    subcategory_id: {
        type: ObjectId,
        ref: "Subcategory"
    },
    

    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Injectionpark", injectionParkSchema)


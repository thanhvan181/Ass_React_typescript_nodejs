import mongoose from "mongoose";
import {Schema, ObjectId} from "mongoose";

const CompanySchema = new Schema({
 
    name: {
        type: String,
       

        
    },
    slug: {
        
        type: String,
        // unique: true,
        required: false,
        // lowercase: true,
        // index: true
    },
    address: {
        type: String,

    },
    
    // longitude: {
    //     type: String,

    // },

    // latitude: {
    //     type: String,

        

    // },
    mapUrl: {
        type: String,

    },

    city_id: {
        type: ObjectId,
        ref: "City"
    }
    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Company", CompanySchema)


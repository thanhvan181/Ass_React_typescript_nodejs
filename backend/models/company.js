import mongoose from "mongoose";
import {Schema} from "mongoose";

const CompanySchema = new Schema({
 
    name: {
        type: String,
        required: true, 

        
    },
    slug: {
        type: String,
        unique: true,
        lowercase: true,
        index: true
    },
    address: {
        type: String,

    },
    
    longitude: {

    },

    latitude: {
        

    }
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Company", CompanySchema)


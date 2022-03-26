import mongoose from "mongoose";
import {Schema} from "mongoose";

const CompanySchema = new Schema({
 
    name: {
        type: String,
       

        
    },
    slug: {
        
        type: String,
        // unique: true,
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

    }
    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Company", CompanySchema)



import mongoose from "mongoose";
import {Schema, ObjectId } from "mongoose";

const RegisterSchema = new Schema({
    name: {
        type: String,

    },
    birthday: {
        type: Date,


    },
    sex: {
        type: String,

    },
    code: {
        required: false,

        type: ObjectId,
        ref: "User"
        
    },
    address: {
        type: String,
    },
    contact_person_name: {
        type: String,


    },
    relativeship_phone: {
        type: String,


    },
    relativeship_name: {
        type: String,


    },
    dateo_injection : {
        type: Date,
    },

    company_id: {
        require: false,
        type: ObjectId,
        ref: "Company"
    },
    





   
    
    

    
   

   
},  { timestamps: true})

export default mongoose.model("Register", RegisterSchema)


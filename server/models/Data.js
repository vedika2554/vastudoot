import { Schema, model } from "mongoose";
const dataSchema = new Schema({

    image: {
        type: String,
        required: true
    },

    design: {

        type: String,
        
        required: true
    }
});


const Data = model('data', dataSchema)

export default Data;
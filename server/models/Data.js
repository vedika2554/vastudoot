import { Schema, model } from "mongoose";
const dataSchema = new Schema({
    image: String,
    design: String
});

const Data = model('data', dataSchema)

export default Data;
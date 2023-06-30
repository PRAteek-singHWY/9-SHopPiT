import mongoose from "mongoose";

//creating Schema 
const DesignSchema = new mongoose.Schema({
    //giving all the properties to each object(schema element) of this schema

    // 1-name with some required fields
    name: {
        type: String, required: true
    },
    // 2-photo with some required fields
    photo: { type: String, required: true },
    // 3-designName with some required fields
    designName: { 
        type: String, required: true }

})
const Design = mongoose.model("Design", DesignSchema)
export default Design
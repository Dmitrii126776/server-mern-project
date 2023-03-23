import mongoose from "mongoose";

const {Schema} = mongoose;

const numberSchema = new Schema({
    numberTask: {type: Number, required: true}
})

export default mongoose.model('Numbers', numberSchema)

import mongoose from "mongoose";

const {Schema} = mongoose;

const animalSchema = new Schema({
    name: {type: String, required: true},
    type: {type: String, required: true},
    sex: {type: String, required: true},
    age: {type: String, required: true},
    breed: {type: String, required: true},
    description: {type: String, required: true},
    mainPhoto: {type: String, required: true},
    photos: [{type: String, required: true}],
})

export default mongoose.model('Animal', animalSchema)

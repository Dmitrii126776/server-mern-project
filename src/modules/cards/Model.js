import mongoose from "mongoose";

const {Schema} = mongoose;

const cardSchema = new Schema({
    taskNumber: {type: String, required: true, unique: true},
    name: {type: String, required: true},
    assignee: {type: String, required: true},
    description: {type: String, required: true},
    status: {type: String, required: true},
    priority: {type: String, required: true},
})

export default mongoose.model('Card', cardSchema);

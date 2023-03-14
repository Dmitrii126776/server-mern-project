import mongoose, {Schema} from "mongoose";

const taskSchema = new Schema({
    name: {type: String, required: true},
    created: {
        date: {type: String, required: true},
        status: {type: Boolean, required: true}
    },
    completed: {
        date: {type: String, required: false},
        status: {type: Boolean, required: false}
    },
});
export default mongoose.model('Task', taskSchema);

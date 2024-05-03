import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: {type: String, required: true},
    avatar: {type: String},
    email: {
        type: String,
        required: true,
        index: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});

userSchema.index({email: 1}, {unique: true});
export default mongoose.model('User', userSchema);

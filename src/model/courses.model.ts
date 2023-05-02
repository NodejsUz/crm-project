import { Schema, model } from "mongoose";

const courseSchema = new Schema({
    coursname: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        default: 0
    },
    image: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})

const courseModel = model("course", courseSchema);

export default courseModel
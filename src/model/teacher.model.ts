import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    experince: {
        type: String,
        required: true
    },
    fan: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    enterest: {
        type: String,
        required: true
    },
    wins: {
        type: String,
        required: false,
        default: ""
    }
}, {
    timestamps: true
})

const teacherModel = model("teacher", teacherSchema);

export default teacherModel
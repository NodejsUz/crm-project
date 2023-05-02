import { Schema, model } from "mongoose";

// kursga qabul qilish uchun model
// o'quvchining ma'lumotlari

const studentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    course:{
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const studentModel = model("student", studentSchema);

export default studentModel
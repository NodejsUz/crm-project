import { Schema, model } from "mongoose";

const bahoSchema = new Schema({
    baho: {
        type: Number,
        required: true
    },
    student_id: {
        type: Schema.Types.ObjectId,
        ref: "student",
        required: true
    },
    teacher_id: {
        type: Schema.Types.ObjectId,
        red: "teacher",
        required: true
    }
}, {
    timestamps: true
})

const bahoModel = model("baho", bahoSchema);

export default bahoModel
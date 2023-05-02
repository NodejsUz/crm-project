import { Schema, model } from "mongoose";

const feadBackSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: "user"
    },
    teacher_id: {
        type: Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    course_id: {
        type: Schema.Types.ObjectId,
        red: "course",
    }
}, {
    timestamps: true
})

const feadBackModel = model("feadback", feadBackSchema);

export default feadBackModel
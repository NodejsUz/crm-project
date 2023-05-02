import { Schema, model } from "mongoose";

const groupSchema = new Schema({
    groupname: {
        type: String,
        required: true,
        unique: true
    },
    teacher_id: {
        type: Schema.Types.ObjectId,
        ref: "teacher",
        required: true
    },
    dedline: {
        type: String,
        required: true
    },
    start_time: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const groupModel = model("group", groupSchema);

export default groupModel
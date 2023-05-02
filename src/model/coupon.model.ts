import { Schema, model } from "mongoose";

const couponSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
}, {
    timestamps: true
})

const couponModel = model("coupon", couponSchema);

export default couponModel
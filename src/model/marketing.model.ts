import { Schema, model } from "mongoose";

// talaba yoki o'qitivchi yoki boshqalarga qanaqadir xabar yuborish kerak bo'ladigan bo'lsa 
// shu bo'lim bajaradi

const marketingSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    // xabar kim tomonidan yuborilayabdi
    messageby_id: {
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true
    },
    // kimga xabar yuborilayabdi
    user_id: {
        type: Schema.Types.ObjectId,
        required: true
    }
}, {
    timestamps: true
})

const marketingModel = model("marketing", marketingSchema);

export default marketingModel
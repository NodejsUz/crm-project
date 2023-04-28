import { IAUTH } from "../types/auth.interface";
import { Schema, model} from "mongoose";

const authSchema = new Schema<IAUTH>({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: [6, "Password eng kamida 6 ta bo'lishi kerak"]
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: [3, "Username eng kamida 3 ta bo'lishi kerak"]
    },
    firstname: {
        type: String,
        required: true
    },
    story: {
        type: String,
        default: ""
    }
})

const AuthModel = model<IAUTH>("user", authSchema);

export default AuthModel
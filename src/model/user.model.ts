import { IAUTH, IAddCustom } from '../types/auth.interface';
import { Schema, model } from 'mongoose';

const authSchema = new Schema<IAddCustom>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "Password eng kamida 6 ta bo'lishi kerak"],
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [3, "Username eng kamida 3 ta bo'lishi kerak"],
  },
  firstname: {
    type: String,
    required: true,
  },
  story: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: "user"
  },
  jinsi:{
    type: String,
    enum: ["erkak", "ayol"]
  },
  image: {
    type: String,
  },
  tel_raqam: {
    type: Number,
    default: 99-999-99-99
  },
  isBlock:  {
    type: Boolean,
    default: false
  }
});

const AuthModel = model<IAddCustom>('user', authSchema);

export default AuthModel;

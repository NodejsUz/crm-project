// rolelar
// director, admin, o'qituvchi, o'quvchi, hamma
import { Document } from 'mongoose';

interface IAUTH extends Document {
    firstname: string;
    username: string;
    email: string;
    password: string;
    story?: string;
}

interface IUpdateUser {
    email: string;
    firstname: string;
    username: string;
    tel_raqam?: number;
    role?: string;
    jinsi?: string;
    image?: string;
    story?: string;
    isBlock?: boolean
}

interface IAddCustom {
    email: string;
    firstname: string;
    username: string;
    tel_raqam?: number;
    password: string;
    role?: string;
    jinsi?: string;
    image?: string;
    story?: string;
    isBlock?: boolean
}

interface ILogin {
    email: string;
    password: string;
}

export { IAUTH, ILogin, IAddCustom,IUpdateUser };

// rolelar
// director, admin, o'qituvchi, o'quvchi, hamma
import { Document } from "mongoose"

interface IAUTH extends Document {
    firstname: string,
    username: string,
    email: string,
    password: string,
    story: string,
}

interface IAddCustom {
    email: string,
    firstname: string,
    username: string,
    raqam_tel?: number,
    password: string,
    role?: string,
    jinsi?: string,
    image?: string
}

interface ILogin{
    email: string,
    password: string
}

export {IAUTH, ILogin, IAddCustom}
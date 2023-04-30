import AuthModel from "../model/user.model";
import { IUpdateUser } from "../types/auth.interface";

class UserService {
    private authmodel = AuthModel

    public async updateUser(id: string, data: IUpdateUser) {
        try {
            const result = await this.authmodel.findByIdAndUpdate(id, data, { new: true });

            if (!result) throw new Error("This user is not defined!");

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async deleteUser(id: string) {
        try {
            const result = await this.authmodel.findByIdAndDelete(id);
            if (!result) throw new Error("This user is not defined");

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async blockUser(id: string) {
        try {
            const result = await this.authmodel.findById(id);
            if (!result) throw new Error("This user is not defined");

            if (result.isBlock) throw new Error("This user already blocked!");

            await this.authmodel.findByIdAndUpdate(id, {
                isBlock: true
            })

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async unBlockUser(id: string) {
        try {
            const result = await this.authmodel.findById(id);
            if (!result) throw new Error("This user is not defined");

            if (!result.isBlock) throw new Error("This user already unblocked!");

            await this.authmodel.findByIdAndUpdate(id, {
                isBlock: false
            })

            return result
        } catch (error: any) {
            throw new Error(error.message);
        }
    }

    public async imageUpload(url: string) {
        try {
            // const result = await 
        } catch (error: any) {
            throw new Error(error.message);
        }
    }
}

export default UserService;
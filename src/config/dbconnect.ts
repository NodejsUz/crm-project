import mongoose from "mongoose";

class Database {
    private url: string

    constructor(url: string) {
        this.url  = url

        mongoose.set("strictQuery", false);

        this.connection();
    }

    private connection(){
        try {
            mongoose.connect(this.url);

            mongoose.connection.on("error", (err)=>{
                console.log(err);
            })

            console.log("Database connection success");
            
        } catch (error: any) {
            console.log(error.message);
            
        }
    }
}

export default Database
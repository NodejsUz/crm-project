// runing main code
import express, { Application } from "express";
import cors from "cors";
import cookieParser from 'cookie-parser';
import morgan from "morgan";
import fs from "fs";
import swaggerDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import Database from "./config/dbconnect";
import ErrorHandling from "./middleware/error.handling";

class App {
    private app: Application;
    private port: number;

    constructor(port: number){
        this.app = express()
        this.port = port

        this.connectionDb();

        this.initialMiddleware();

        this.swaggerUi();

        this.routers();

        this.errorHandling();
    }

    private initialMiddleware(){
        const logging = fs.createWriteStream(__dirname + "/log/log.log", "utf-8");
        this.app.use(express.json())
        this.app.use(express.urlencoded({extended: true}))
        this.app.use(cors())
        this.app.use(cookieParser())
        this.app.use(morgan("dev"))
        this.app.use(morgan("combined", {stream: logging}));
    }

    private swaggerUi(){
        const swaggerOptions = {
            definition: {
                openapi: '3.0.0',
                info: {
                    title: 'My API',
                    version: '1.0.0',
                    description: 'My API description',
                },
            },
            servers: [
                {
                    url: `http://localhost:${this.port}/`,
                    description: 'Development server'
                }
            ],
            // Path to the API docs
            apis: ['./**/*.ts'],
        };

        const swaggerSpec = swaggerDoc(swaggerOptions);
        this.app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerSpec))
    }

    private async connectionDb(){
        const url = process.env.DB_URL;
        new Database(String(url));
    }

    private routers(){
        this.app.use("/", (req, res) => {
            res.send("salom");
        })
    }

    private errorHandling(){
        this.app.use(ErrorHandling)
    }

    public listen(){
        this.app.listen(this.port, ()=>{
            console.log(`Server listen on ${this.port} port`);
        })
    }
}

export default App
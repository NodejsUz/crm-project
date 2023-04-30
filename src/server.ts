import 'dotenv/config';
import App from './app';

const port = process.env.PORT;

const server = new App(Number(port));

server.listen();

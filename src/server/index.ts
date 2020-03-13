import http from 'http';
import { app }from "./app";

const server = http.createServer(app());
const Port: number = 7000;

server.listen(Port, () => console.log(`listening to port ${Port}`));

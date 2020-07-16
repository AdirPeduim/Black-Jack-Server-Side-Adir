"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Express is a minimal and flexible Node.js web application framework:
 * 1) allows to set up middlewares to respond to HTTP Requests,
 * 2) Defines a routing table which is used to perform different actions based on HTTP Method and URL,
 * 3) Allows to dynamically render HTML Pages based on passing arguments to templates.*/
const express_1 = __importDefault(require("express"));
// setup for express server
const app = express_1.default();
// setup the port
const port = 3000;
// example of route
app.get("/getCard", (req, res) => {
    res.send("Hello Adir!\nNow you can send http requests to this server and get your response.\nPlease read how to send http requests in the internet");
});
// start the server
app.listen(port, (err) => {
    if (err) {
        return console.error(err);
    }
    console.log(`Server Started!`);
    console.log(`server is listening on ${port}`);
});
//# sourceMappingURL=server.js.map
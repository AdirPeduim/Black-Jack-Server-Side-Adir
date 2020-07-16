/*
 * Express is a minimal and flexible Node.js web application framework:
 * 1) allows to set up middlewares to respond to HTTP Requests,
 * 2) Defines a routing table which is used to perform different actions based on HTTP Method and URL,
 * 3) Allows to dynamically render HTML Pages based on passing arguments to templates.
 *
 * read and learn how to use express server at:
 * https://expressjs.com/en/guide/routing.html
 * */
import express from "express";

// setup for express server
const app = express();

// setup the port
const port = 3000;

// example of route
app.get("/", (req, res) => {
  res.send(
    "Hello Adir!\nNow you can send http requests to this server and get your response.\nPlease read how to send http requests in the internet"
  );
});

// start the server
app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }

  console.log(`Server Started!`);
  console.log(`server is listening on ${port}`);
});

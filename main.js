const express = require("express");
const EventEmitter = require("events");
const myEvent = new EventEmitter();
const app = express();
const PORT = 3000;
const routes = require("./routes/index");
const bodyParser = require("body-parser");
const connectDB = require("./database/db");
app.use(bodyParser.json());
app.use(routes);

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
  });
});

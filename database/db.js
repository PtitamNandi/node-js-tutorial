const mongoose = require("mongoose");
const username = "pritam";
const password = "pritam";
const cluster = "pritam.7vnrtx4";
const dbname = "nodejs_course";
const url = `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`;
// const url =
//   "mongodb+srv://pritam:pritam@pritam.7vnrtx4.mongodb.net/?retryWrites=true&w=majority";

async function connectDB() {
  await mongoose.connect(url);
}
module.exports = connectDB;

// const { MongoClient } = require("mongodb");

// // Connection URL
// const url =
//   "mongodb+srv://pritam:pritam@pritam.7vnrtx4.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);

// // Database Name
// const dbName = "nodejs_course";

// async function connect() {
//   await client.connect();
//   const db = await client.db(dbName);
//   return db;
// }
// module.exports = connect;

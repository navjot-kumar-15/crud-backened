import express from "express";
import Connection from "./Database/db.js";
import Routes from "./server/route.js";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Using the dataparser
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// Using the cors to prevent the different server
app.use(cors());

// All the routes are in the server folder
app.use("/", Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT;

// Connecting to the database
Connection(USERNAME, PASSWORD);
app.listen(PORT, () => {
  console.log(`Server is running succesfully on PORT ${PORT}`);
});

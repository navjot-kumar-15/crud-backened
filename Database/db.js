import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Connection = async (DB_USERNAME, DB_PASSWORD) => {
  const URL = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@ac-0ob5mvw-shard-00-00.jc9849t.mongodb.net:27017,ac-0ob5mvw-shard-00-01.jc9849t.mongodb.net:27017,ac-0ob5mvw-shard-00-02.jc9849t.mongodb.net:27017/MY-PROJECTS?ssl=true&replicaSet=atlas-12aj84-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Database connected succesfully");
  } catch (error) {
    console.log("Error while connecting the data ", error.message);
  }
};

export default Connection;

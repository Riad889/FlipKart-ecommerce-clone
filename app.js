const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routes/auth");
const app = express();

//cors is used to overcome the connection problem the frontend and backend


app.use(cors());

// acknowledge the server that the data is in json

app.use(express.json());


//configure the env file
dotenv.config({ path: "./.env" });

const Port = process.env.PORT;

//database connection

require("./DB_Connection/connection");

//acknowledge the server that we use a middleware

app.use(router);

app.get("/", (req, res) => {
  res.send("hi");
});
//defaultData();
app.listen(Port, () => {
  console.log(`listening port ${Port}`);
});

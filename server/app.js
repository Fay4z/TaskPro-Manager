const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const TaskRoute = require("./routes/tasks");
const UserRoute = require("./routes/user");

require("dotenv").config({ path: [".env.local", ".env"] });

const app = express();

const port = 3000;

app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));
console.log("connecting...");

app.use("/tasks", TaskRoute);
app.use("/auth", UserRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    app.listen(3000, () => {
      console.log("connected to db & listening on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

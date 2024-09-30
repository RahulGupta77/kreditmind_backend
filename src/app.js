const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const connectDb = require("./config/database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.options("*", cors());

app.use("/v1", routes);

app.use((req, res, next) => {
  res.status(404).send("Route not found");
});

app.use((err, req, res, next) => {
  res.status(400).send(err.message);
});

connectDb()
  .then(() => {
    console.log("Database connected successfully");

    app.listen(3000, (req, res) => {
      console.log("server started on port 3000...");
    });
  })
  .catch((err) => {
    console.error(err.message);
  });

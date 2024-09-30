const express = require("express");
const cookieParser = require("cookie-parser");
const connectDb = require("./config/database");
const routes = require("./routes");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/v1", routes);

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

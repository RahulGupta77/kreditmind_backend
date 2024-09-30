const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const convoRoute = require("./convo.route");

router.use("/auth", authRoute);
router.use("/convo", convoRoute);

module.exports = router;

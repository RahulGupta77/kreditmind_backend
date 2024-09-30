const express = require("express");
const router = express.Router();
const authRoute = require("./auth.route");
const convoRoute = require("./convo.route");
const userRoute = require("./user.route");

router.use("/auth", authRoute);
router.use("/conversations", convoRoute);
router.use("/user", userRoute);

module.exports = router;

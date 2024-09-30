const express = require("express");
const router = express.Router();
const { convoController } = require("../controllers");
const { userAuth } = require("../middlewares/auth");

router.get("/", userAuth, convoController.getAllConversation);
router.put("/", userAuth, convoController.appendNewMessage);

module.exports = router;

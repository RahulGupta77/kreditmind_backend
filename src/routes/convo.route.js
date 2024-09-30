const express = require("express");
const router = express.Router();
const { convoController } = require("../controllers");

router.get("/convo", convoController.getAllConversation);
router.post("/convo", convoController.appendNewMessage);

module.exports = router;

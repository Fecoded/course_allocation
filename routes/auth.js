const express = require("express");
const router = express.Router();
const { getUser, postUser } = require("../controller/auth");

router
  .route("/")
  .get(getUser)
  .post(postUser);

module.exports = router;

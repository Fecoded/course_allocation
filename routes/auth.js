const express = require("express");
const router = express.Router();
const {
  getUserAuth,
  postUserAuth,
  getAdminAuth,
  postAdminAuth,
  getUsers,
  allocateCourse,
} = require("../controllers/auth");
const auth = require("../middleware/auth");

router.route("/user").get(auth, getUserAuth).post(postUserAuth);
router.route("/admin").get(auth, getAdminAuth).post(postAdminAuth);
router.route("/users").get(auth, getUsers);
router.route("/allocate/:id").put(auth, allocateCourse);

module.exports = router;
